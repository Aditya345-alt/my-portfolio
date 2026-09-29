@echo off
set "PATH=C:\Users\aj393\.node-v22\node-v22.14.0-win-x64;%PATH%"
cd /d "%~dp0hero-40"
call npx.cmd vinext dev
