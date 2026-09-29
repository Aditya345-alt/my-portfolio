@echo off
setlocal enabledelayedexpansion

echo ====================================================
echo     Aditya Jain Portfolio — Push to GitHub
echo ====================================================
echo.
echo Your repository is committed and ready to upload!
echo.
set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/your-username/portfolio.git): "

if "!REPO_URL!"=="" (
    echo.
    echo [ERROR] No repository URL entered.
    echo Please create a new repository on https://github.com/new and run this script again.
    pause
    exit /b 1
)

echo.
echo [1/3] Configuring remote origin...
git remote remove origin 2>nul
git remote add origin !REPO_URL!

echo [2/3] Setting default branch to main...
git branch -M main

echo [3/3] Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================
    echo   SUCCESS! Your portfolio repository is now live!
    echo ====================================================
) else (
    echo.
    echo [NOTE] If git requested credentials, make sure you are signed into GitHub.
    echo If the repository on GitHub already had a README, run:
    echo     git pull origin main --rebase
    echo     git push -u origin main
)

echo.
pause
