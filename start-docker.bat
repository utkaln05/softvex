@echo off
REM Docker Compose startup script for Windows

echo 🚀 Starting Softvex with Docker Compose...
echo.

docker-compose up -d

echo.
echo ✅ Application started!
echo.
echo Access points:
echo   • Frontend: http://localhost:3000
echo   • Backend API: http://localhost:5000
echo.
echo Check logs:
echo   docker-compose logs -f
echo.
echo Stop application:
echo   docker-compose down
echo.
pause
