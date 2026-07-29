param([switch]$OpenReport = $true)
$ErrorActionPreference = 'SilentlyContinue'
$desktop = [Environment]::GetFolderPath('Desktop')
if (-not $desktop) { $desktop = $PSScriptRoot }
$report = Join-Path $desktop ("HEZPO_PC_CHECK_{0}.md" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
$rows = [System.Collections.Generic.List[object]]::new()

function Add-Check([string]$Category,[string]$Item,[string]$Status,[string]$Details,[string]$Action) {
  $rows.Add([pscustomobject]@{Category=$Category;Item=$Item;Status=$Status;Details=$Details;Action=$Action}) | Out-Null
}
function Check-Cmd([string]$Name,[string]$Label,[bool]$Required,[string]$Hint,[string[]]$Args=@('--version')) {
  $cmd = Get-Command $Name -ErrorAction SilentlyContinue
  if (-not $cmd) { Add-Check 'Tool' $Label $(if($Required){'MISSING'}else{'OPTIONAL'}) 'Not found in PATH' $Hint; return }
  try { $v = ((& $cmd.Source @Args 2>&1 | Select-Object -First 2) -join ' ').Trim() } catch { $v='Detected' }
  Add-Check 'Tool' $Label 'OK' "$v | $($cmd.Source)" 'No action'
}
function Find-Repo {
  $candidates=@(
    "$HOME\hezpo-website", "$HOME\Desktop\hezpo-website", "$HOME\Documents\hezpo-website",
    "$HOME\Downloads\hezpo-website", 'C:\hezpo-website','C:\Projects\hezpo-website','C:\Work\hezpo-website'
  )
  foreach($p in $candidates){ if(Test-Path $p){ return $p } }
  return $null
}

$os=Get-CimInstance Win32_OperatingSystem
$cs=Get-CimInstance Win32_ComputerSystem
$cpu=Get-CimInstance Win32_Processor | Select-Object -First 1
$c=Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'"
$ram=[math]::Round($cs.TotalPhysicalMemory/1GB,1)
$free=if($c){[math]::Round($c.FreeSpace/1GB,1)}else{0}
$total=if($c){[math]::Round($c.Size/1GB,1)}else{0}
Add-Check 'System' 'Windows' 'INFO' "$($os.Caption) | Build $($os.BuildNumber) | $($os.OSArchitecture)" 'Windows 10/11 64-bit preferred'
Add-Check 'System' 'CPU' 'INFO' $cpu.Name 'No action unless performance is slow'
Add-Check 'System' 'RAM' $(if($ram-ge16){'OK'}elseif($ram-ge8){'WARNING'}else{'MISSING'}) "$ram GB" $(if($ram-ge16){'Enough'}elseif($ram-ge8){'Usable; Docker/AI may be slow'}else{'Upgrade to at least 8 GB; 16 GB preferred'})
Add-Check 'Storage' 'C: free space' $(if($free-ge50){'OK'}elseif($free-ge20){'WARNING'}else{'MISSING'}) "$free GB free of $total GB" $(if($free-ge50){'Enough'}elseif($free-ge20){'Free more space before Docker/AI models'}else{'Free at least 30-50 GB'})

Check-Cmd winget 'Windows Package Manager' $true 'Update App Installer from Microsoft Store'
Check-Cmd git 'Git' $true 'Install Git for Windows'
Check-Cmd bash 'Git Bash' $true 'Included with Git for Windows'
Check-Cmd gh 'GitHub CLI' $true 'winget install --id GitHub.cli'
Check-Cmd node 'Node.js' $true 'Install Node.js LTS'
Check-Cmd npm 'npm' $true 'Included with Node.js'
Check-Cmd python 'Python' $true 'Install Python 3.11+'
Check-Cmd pip 'pip' $true 'Included with Python; add Python to PATH'
Check-Cmd codex 'Codex CLI' $true 'Install or update Codex CLI/app'
Check-Cmd code 'VS Code CLI' $false 'Recommended for project work'
Check-Cmd uv 'uv' $false 'Recommended Python package manager'
Check-Cmd docker 'Docker' $false 'Needed later for Metabase/n8n/Dify'
Check-Cmd ffmpeg 'FFmpeg' $false 'Recommended for Remotion/video work' @('-version')
Check-Cmd ollama 'Ollama' $false 'Needed only for local Ollama workflow'

Add-Check 'Tool' 'PowerShell' $(if($PSVersionTable.PSVersion.Major-ge7){'OK'}else{'WARNING'}) $PSVersionTable.PSVersion.ToString() 'PowerShell 7 recommended; Windows PowerShell is usable'
$codexHome=Join-Path $HOME '.codex'
Add-Check 'Codex' '.codex folder' $(if(Test-Path $codexHome){'OK'}else{'MISSING'}) $codexHome 'Open/install Codex once if missing'

$repo=Find-Repo
if($repo){
  Add-Check 'Hezpo' 'hezpo-website repository' 'OK' $repo 'No action'
  $agents=Join-Path $repo '.codex\agents'
  $needed=@('customer-service.toml','pricing-analyst.toml','analytics-reporter.toml','cross-border-e-commerce-specialist.toml','seo-specialist.toml','aeo-foundations-architect.toml','social-media-strategist.toml','video-optimization-specialist.toml')
  $missing=@($needed | Where-Object { -not (Test-Path (Join-Path $agents $_)) })
  Add-Check 'Hezpo' '8 project Codex agents' $(if($missing.Count-eq0){'OK'}else{'MISSING'}) $(if($missing.Count-eq0){"All 8 found in $agents"}else{"Missing: $($missing -join ', ')"}) 'Run git pull in the repository'
  Add-Check 'Hezpo' 'package.json' $(if(Test-Path (Join-Path $repo 'package.json')){'OK'}else{'MISSING'}) (Join-Path $repo 'package.json') 'Required for website project'
  Add-Check 'Hezpo' 'node_modules' $(if(Test-Path (Join-Path $repo 'node_modules')){'OK'}else{'WARNING'}) (Join-Path $repo 'node_modules') 'Run npm install if missing'
}else{
  Add-Check 'Hezpo' 'hezpo-website repository' 'MISSING' 'Not found in common C: locations' 'Clone hezpohair-bit/hezpo-website'
}

$gh=Get-Command gh -ErrorAction SilentlyContinue
if($gh){
  & $gh.Source auth status *> $null
  Add-Check 'GitHub' 'GitHub CLI authentication' $(if($LASTEXITCODE-eq0){'OK'}else{'WARNING'}) $(if($LASTEXITCODE-eq0){'Authenticated'}else{'Not authenticated'}) 'Run gh auth login if needed'
}

$missing=@($rows|Where-Object Status -eq 'MISSING')
$warn=@($rows|Where-Object Status -eq 'WARNING')
$lines=[System.Collections.Generic.List[string]]::new()
$lines.Add('# Hezpo Office PC Check');$lines.Add('')
$lines.Add("- Checked: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss K')")
$lines.Add("- Computer: $env:COMPUTERNAME")
$lines.Add("- User: $env:USERNAME")
$lines.Add('- Safety: no passwords, cookies, seller credentials, API keys, or document contents were read.')
$lines.Add('');$lines.Add('## Summary');$lines.Add('')
$lines.Add("- Missing/fix items: **$($missing.Count)**")
$lines.Add("- Warnings: **$($warn.Count)**")
$lines.Add("- C: free space: **$free GB / $total GB**")
$lines.Add("- RAM: **$ram GB**")
$lines.Add('');$lines.Add('## What You Need To Download or Fix');$lines.Add('')
if($missing.Count-eq0){$lines.Add('No required missing items detected.')}else{foreach($r in $missing){$lines.Add("- **$($r.Item)** — $($r.Details). $($r.Action)")}}
$lines.Add('');$lines.Add('## Full Check');$lines.Add('')
$lines.Add('| Category | Item | Status | Details | Action |');$lines.Add('|---|---|---|---|---|')
foreach($r in $rows){$d=($r.Details-replace '\|','/');$a=($r.Action-replace '\|','/');$lines.Add("| $($r.Category) | $($r.Item) | $($r.Status) | $d | $a |")}
$lines.Add('');$lines.Add('## Safety');$lines.Add('')
$lines.Add('- Do not install random Shopee/TikTok scrapers.')
$lines.Add('- Do not paste passwords, cookies, tokens, or API keys into scripts.')
$lines.Add('- Do not automate price changes, listings, refunds, inventory, or CAPTCHA bypass.')
Set-Content -Path $report -Value ($lines -join [Environment]::NewLine) -Encoding UTF8
Write-Host "Report saved to: $report" -ForegroundColor Green
if($OpenReport){Start-Process notepad.exe $report}
