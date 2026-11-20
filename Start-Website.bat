@echo off
title Al Irfan Online Quran Academy
echo ====================================================
echo  Al Irfan Online Quran Academy Website
echo  Opening website in your browser...
echo ====================================================
start "" "http://localhost:5173/"
call npx vite preview --port 5173 --host
pause
