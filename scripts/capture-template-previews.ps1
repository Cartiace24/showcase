[CmdletBinding()]
param(
  [string]$Url = 'http://127.0.0.1:5183/',
  [string]$OutputDirectory,
  [string]$BrowserPath = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
  [string]$PythonPath = 'C:\Users\Cartiace\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
)

if (-not $OutputDirectory) {
  $OutputDirectory = Join-Path $PSScriptRoot '..\public\templates\devport'
}
$resolvedOutput = [System.IO.Path]::GetFullPath($OutputDirectory)
if (-not (Test-Path -LiteralPath $BrowserPath)) {
  throw "Microsoft Edge was not found at '$BrowserPath'. Pass -BrowserPath to its executable."
}

New-Item -ItemType Directory -Path $resolvedOutput -Force | Out-Null
$profilePath = Join-Path $env:TEMP 'portfolio-template-showcase-edge-profile'
New-Item -ItemType Directory -Path $profilePath -Force | Out-Null

$captures = @(
  @{ Name = 'desktop.png'; Width = 1440; Height = 1100; PageUrl = $Url },
  @{ Name = 'mobile.png'; Width = 390; Height = 844; PageUrl = $Url }
)

foreach ($capture in $captures) {
  $outputPath = Join-Path $resolvedOutput $capture.Name
  $previousWriteTime = if (Test-Path -LiteralPath $outputPath) {
    (Get-Item -LiteralPath $outputPath).LastWriteTimeUtc
  } else {
    [datetime]::MinValue
  }
  $arguments = @(
    '--headless=new',
    '--disable-gpu',
    '--force-prefers-reduced-motion=reduce',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    "--user-data-dir=$profilePath",
    "--window-size=$($capture.Width),$($capture.Height)",
    '--virtual-time-budget=12000',
    "--screenshot=$outputPath",
    $capture.PageUrl
  )

  & $BrowserPath @arguments
  $deadline = [datetime]::UtcNow.AddSeconds(20)
  do {
    $file = Get-Item -LiteralPath $outputPath -ErrorAction SilentlyContinue
    if ($file -and $file.Length -ge 2048 -and $file.LastWriteTimeUtc -gt $previousWriteTime) {
      break
    }
    Start-Sleep -Milliseconds 250
  } while ([datetime]::UtcNow -lt $deadline)

  if (-not $file -or $file.Length -lt 2048 -or $file.LastWriteTimeUtc -le $previousWriteTime) {
    throw "Edge did not create a valid screenshot at '$outputPath'."
  }
  Write-Output ("{0}: {1:N0} KB" -f $file.Name, ($file.Length / 1KB))
}

if (-not (Test-Path -LiteralPath $PythonPath)) {
  throw "Python was not found at '$PythonPath'. Pass -PythonPath to a Python installation with Pillow and WebP support."
}

$optimizerPath = Join-Path $PSScriptRoot 'optimize-template-previews.py'
& $PythonPath $optimizerPath --directory $resolvedOutput --quality 86
if ($LASTEXITCODE -ne 0) {
  throw 'Preview optimization failed. The original PNG screenshots are still available.'
}
