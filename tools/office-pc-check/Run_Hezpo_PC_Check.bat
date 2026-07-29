@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Hezpo_Office_PC_Check.ps1" -OpenReport
echo.
echo The report was saved to your Desktop.
pause
