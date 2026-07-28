param(
    [switch]$Headed,
    [switch]$Discover,
    [ValidateSet('auto', 'edge', 'chrome')]
    [string]$Browser = 'auto',
    [string]$ProfileDirectory = ''
)

$ErrorActionPreference = 'Stop'
$ProjectDir = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectDir

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    if (Get-Command winget -ErrorAction SilentlyContinue) {
        Write-Host 'Node.js was not found. Installing the current LTS release with winget...'
        winget install --id OpenJS.NodeJS.LTS --exact --silent --accept-package-agreements --accept-source-agreements
        $env:Path = [System.Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path', 'User')
    }
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw 'Node.js 22 or newer is required and could not be installed automatically.'
}

$nodeMajor = [int]((node --version).TrimStart('v').Split('.')[0])
if ($nodeMajor -lt 22) {
    throw "Node.js 22 or newer is required. Current version: $(node --version)"
}

Write-Host 'Installing locked Playwright dependencies...'
npm install --no-audit --no-fund
npx playwright install chromium

$cloneArgs = @('-ExecutionPolicy', 'Bypass', '-File', (Join-Path $PSScriptRoot 'clone-browser-profile.ps1'), '-Browser', $Browser)
if ($ProfileDirectory) {
    $cloneArgs += @('-ProfileDirectory', $ProfileDirectory)
}
& powershell @cloneArgs

$nodeArgs = @('src/download-templates.mjs')
if ($Headed) { $nodeArgs += '--headed' }
if ($Discover) { $nodeArgs += '--discover' }

Write-Host 'Starting BigSeller official template download...'
& node @nodeArgs
$exitCode = $LASTEXITCODE

$manifestPath = Join-Path $ProjectDir 'templates\latest\manifest.json'
if (Test-Path $manifestPath) {
    Write-Host "Manifest: $manifestPath"
}
exit $exitCode
