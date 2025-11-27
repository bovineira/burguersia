@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Inicializando repositorio Git...
git init

echo Adicionando arquivos...
git add .

echo Fazendo commit...
git commit -m "Initial commit - Landing Page Black Friday Burguersia"

echo Adicionando remote origin...
git remote add origin https://github.com/bovineira/burguersia.git

echo Renomeando branch para main...
git branch -M main

echo Fazendo push para GitHub...
git push -u origin main

echo.
echo ✅ Push concluido com sucesso!
pause

