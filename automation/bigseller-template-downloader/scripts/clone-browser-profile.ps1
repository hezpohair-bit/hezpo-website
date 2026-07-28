param(
    [ValidateSet('auto', 'edge', 'chrome')]
    [string]$Browser = 'auto',
    [string]$ProfileDirectory = '',
    [string]$Destination = ''
)

$ErrorActionPreference = 'Stop'
$ProjectDir = Split-Path -Parent $PSScriptRoot
if (-not $Destination) {
    $Destination = Join-Path $ProjectDir '.runtime\browser-user-data'
}

$candidates = @()
if ($Browser -in @('auto', 'edge')) {
    $candidates += [PSCustomObject]@{
        Name = 'edge'
        Channel = 'msedge'
        Source = Join-Path $env:LOCALAPPDATA 'Microsoft\Edge\User Data'
    }
}
if ($Browser -in @('auto', 'chrome')) {
    $candidates += [PSCustomObject]@{
        Name = 'chrome'
        Channel = 'chrome'
        Source = Join-Path $env:LOCALAPPDATA 'Google\Chrome\User Data'
    }
}

$selected = $candidates | Where-Object { Test-Path $_.Source } | Select-Object -First 1
if (-not $selected) {
    throw 'No supported Edge or Chrome user-data directory was found.'
}

$localStatePath = Join-Path $selected.Source 'Local State'
$lastUsed = 'Default'
if (Test-Path $localStatePath) {
    try {
        $localState = Get-Content $localStatePath -Raw | ConvertFrom-Json
        if ($localState.profile.last_used) {
            $lastUsed = [string]$localState.profile.last_used
        }
    } catch {
        Write-Warning "Could not read browser Local State: $($_.Exception.Message)"
    }
}

if ($ProfileDirectory) {
    $lastUsed = $ProfileDirectory
}
$sourceProfile = Join-Path $selected.Source $lastUsed
if (-not (Test-Path $sourceProfile)) {
    throw "Browser profile not found: $sourceProfile"
}

if (Test-Path $Destination) {
    Remove-Item $Destination -Recurse -Force
}
New-Item -ItemType Directory -Path $Destination -Force | Out-Null
if (Test-Path $localStatePath) {
    Copy-Item $localStatePath (Join-Path $Destination 'Local State') -Force
}

$destinationProfile = Join-Path $Destination $lastUsed
New-Item -ItemType Directory -Path $destinationProfile -Force | Out-Null

$excludedDirectories = @(
    'Cache', 'Code Cache', 'GPUCache', 'DawnCache', 'GrShaderCache',
    'ShaderCache', 'Media Cache', 'Crashpad', 'BrowserMetrics',
    'OptimizationGuidePredictionModels', 'Safe Browsing', 'component_crx_cache'
)
$excludedFiles = @('LOCK', 'SingletonLock', 'SingletonCookie', 'SingletonSocket')

$robocopyArgs = @(
    $sourceProfile,
    $destinationProfile,
    '/E', '/COPY:DAT', '/DCOPY:DAT', '/R:1', '/W:1', '/NFL', '/NDL', '/NJH', '/NJS', '/NP',
    '/XD'
) + $excludedDirectories + @('/XF') + $excludedFiles

& robocopy @robocopyArgs | Out-Null
$robocopyExit = $LASTEXITCODE
if ($robocopyExit -ge 8) {
    throw "Browser profile copy failed with robocopy exit code $robocopyExit"
}

$runtime = [ordered]@{
    channel = $selected.Channel
    browser = $selected.Name
    sourceUserDataDir = $selected.Source
    sourceProfileDirectory = $lastUsed
    userDataDir = $Destination
    profileDirectory = $lastUsed
    clonedAt = (Get-Date).ToString('o')
}
$runtimePath = Join-Path $ProjectDir '.runtime\browser-profile.json'
New-Item -ItemType Directory -Path (Split-Path -Parent $runtimePath) -Force | Out-Null
$runtime | ConvertTo-Json | Set-Content $runtimePath -Encoding UTF8

Write-Host "Cloned $($selected.Name) profile '$lastUsed' to $Destination"
Write-Output $runtimePath
