param(
    [switch]$KeepTemporaryFiles
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$AgencyRepository = "https://github.com/msitarzewski/agency-agents.git"
$DestinationDirectory = Join-Path $HOME ".codex\agents"
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$BackupDirectory = Join-Path $HOME ".codex\agents_backup\$Timestamp"
$RepositoryRoot = Split-Path -Parent $PSScriptRoot
$ReportPath = Join-Path $RepositoryRoot "INSTALL_REPORT.md"

# Install only this reviewed subset. Existing unrelated Codex agents are never deleted.
$SelectedAgents = [ordered]@{
    "Cross-Border E-Commerce Specialist" = "cross-border-e-commerce-specialist.toml"
    "SEO Specialist"                       = "seo-specialist.toml"
    "AEO Foundations Architect"            = "aeo-foundations-architect.toml"
    "Social Media Strategist"              = "social-media-strategist.toml"
    "Video Optimization Specialist"        = "video-optimization-specialist.toml"
    "Customer Service"                     = "customer-service.toml"
    "Pricing Analyst"                      = "pricing-analyst.toml"
    "Analytics Reporter"                   = "analytics-reporter.toml"
}

function Get-BashExecutable {
    $Command = Get-Command bash -ErrorAction SilentlyContinue
    if ($Command) {
        return $Command.Source
    }

    $Candidates = @(
        (Join-Path $env:ProgramFiles "Git\bin\bash.exe"),
        (Join-Path $env:ProgramFiles "Git\usr\bin\bash.exe"),
        (Join-Path ${env:ProgramFiles(x86)} "Git\bin\bash.exe"),
        (Join-Path ${env:ProgramFiles(x86)} "Git\usr\bin\bash.exe")
    ) | Where-Object { $_ -and (Test-Path $_) }

    if ($Candidates.Count -gt 0) {
        return $Candidates[0]
    }

    throw "Git Bash was not found. Install Git for Windows, then run this script again."
}

function Invoke-CheckedCommand {
    param(
        [Parameter(Mandatory = $true)][string]$Executable,
        [Parameter(Mandatory = $true)][string[]]$Arguments
    )

    & $Executable @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Command failed with exit code $LASTEXITCODE: $Executable $($Arguments -join ' ')"
    }
}

$Git = Get-Command git -ErrorAction SilentlyContinue
if (-not $Git) {
    throw "Git was not found. Install Git for Windows, then run this script again."
}

$Bash = Get-BashExecutable
$TemporaryRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("agency-agents-codex-" + [Guid]::NewGuid().ToString("N"))
$SourceDirectory = Join-Path $TemporaryRoot "agency-agents"
$Installed = New-Object System.Collections.Generic.List[object]
$BackedUp = New-Object System.Collections.Generic.List[string]
$SourceCommit = "unknown"

try {
    New-Item -ItemType Directory -Path $TemporaryRoot -Force | Out-Null
    Invoke-CheckedCommand -Executable $Git.Source -Arguments @("clone", "--depth", "1", $AgencyRepository, $SourceDirectory)

    Push-Location $SourceDirectory
    try {
        Invoke-CheckedCommand -Executable $Bash -Arguments @("./scripts/convert.sh", "--tool", "codex")
        $SourceCommit = (& $Git.Source "rev-parse" "HEAD").Trim()
        if ($LASTEXITCODE -ne 0) {
            throw "Unable to read the Agency Agents source commit."
        }
    }
    finally {
        Pop-Location
    }

    $GeneratedDirectory = Join-Path $SourceDirectory "integrations\codex\agents"
    if (-not (Test-Path $GeneratedDirectory)) {
        throw "Codex agent conversion did not create: $GeneratedDirectory"
    }

    New-Item -ItemType Directory -Path $DestinationDirectory -Force | Out-Null

    foreach ($Entry in $SelectedAgents.GetEnumerator()) {
        $AgentName = $Entry.Key
        $FileName = $Entry.Value
        $SourcePath = Join-Path $GeneratedDirectory $FileName
        $DestinationPath = Join-Path $DestinationDirectory $FileName

        if (-not (Test-Path $SourcePath)) {
            throw "Expected converted agent was not found: $SourcePath"
        }

        $Toml = Get-Content -Path $SourcePath -Raw
        $ExpectedNameLine = 'name = "' + $AgentName + '"'
        if (-not $Toml.Contains($ExpectedNameLine)) {
            throw "Safety check failed for $FileName. Expected agent name: $AgentName"
        }

        if (Test-Path $DestinationPath) {
            New-Item -ItemType Directory -Path $BackupDirectory -Force | Out-Null
            Copy-Item -Path $DestinationPath -Destination (Join-Path $BackupDirectory $FileName) -Force
            $BackedUp.Add($DestinationPath)
        }

        Copy-Item -Path $SourcePath -Destination $DestinationPath -Force

        $Installed.Add([PSCustomObject]@{
            Name = $AgentName
            File = $FileName
            Destination = $DestinationPath
        })
    }

    $CodexCommand = Get-Command codex -ErrorAction SilentlyContinue
    $CodexStatus = if ($CodexCommand) {
        "Codex command detected at `$($CodexCommand.Source)`."
    }
    else {
        "Codex command was not detected in PATH. The agent files were still installed; open or restart the Codex app/CLI to load them."
    }

    $InstalledRows = ($Installed | ForEach-Object {
        "| $($_.Name) | ``$($_.File)`` | ``$($_.Destination)`` |"
    }) -join [Environment]::NewLine

    $BackupNote = if ($BackedUp.Count -gt 0) {
        "Backed up $($BackedUp.Count) existing same-name file(s) to ``$BackupDirectory`` before replacement."
    }
    else {
        "No same-name Codex agent files existed, so no backup was required."
    }

    $Report = @"
# Agency Agents Installation Report

- Installed at: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss K")
- Source repository: `$AgencyRepository`
- Source commit: ``$SourceCommit``
- Codex agent directory: ``$DestinationDirectory``
- Result: **8 selected agents installed**

$BackupNote

## Installed agents

| Agent | File | Destination |
|---|---|---|
$InstalledRows

## Validation

- Only the reviewed eight agents were copied.
- Existing unrelated files inside ``~/.codex/agents`` were not deleted or changed.
- Each generated TOML file passed an exact-name safety check before copying.
- $CodexStatus

## Use in Codex

Start a new Codex session after installation, then use prompts such as:

- `Use the Cross-Border E-Commerce Specialist to review this Shopee Malaysia listing.`
- `Use the SEO Specialist and AEO Foundations Architect to improve this product page for SEO and AI discovery.`
- `Use the Video Optimization Specialist to create ten short-video concepts for this product.`
- `Use Customer Service to draft a Malay reply to this buyer.`
- `Use the Pricing Analyst and Analytics Reporter to review SKU margin and ROAS.`

## Safety boundaries

The installation does not log in to Shopee, TikTok Shop, BigSeller, Metricool, or any marketplace. It does not publish listings, change prices, modify inventory, send customer replies, or overwrite existing Hezpo prompts.
"@

    Set-Content -Path $ReportPath -Value $Report -Encoding UTF8

    Write-Host ""
    Write-Host "Agency Agents installation completed successfully." -ForegroundColor Green
    Write-Host "Installed: $($Installed.Count) agents"
    Write-Host "Destination: $DestinationDirectory"
    Write-Host "Report: $ReportPath"
    Write-Host "Restart Codex before using the new agents."
}
finally {
    if ((Test-Path $TemporaryRoot) -and (-not $KeepTemporaryFiles)) {
        Remove-Item -Path $TemporaryRoot -Recurse -Force -ErrorAction SilentlyContinue
    }
}
