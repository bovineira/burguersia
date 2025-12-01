@echo off
echo ========================================
echo   FORCANDO DEPLOY NO VERCEL
echo ========================================
echo.

echo [1/4] Adicionando arquivos ao staging...
git add .
if %errorlevel% neq 0 (
    echo ERRO ao adicionar arquivos!
    pause
    exit /b 1
)

echo.
echo [2/4] Fazendo commit...
git commit -m "Deploy: atualiza pagina cardapio - A PARTIR DAS 18:30"
if %errorlevel% neq 0 (
    echo AVISO: Nenhuma alteracao para commitar ou commit ja existe.
)

echo.
echo [3/4] Fazendo push para o GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ERRO ao fazer push!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOY ENVIADO COM SUCESSO!
echo ========================================
echo.
echo Verifique o painel do Vercel em alguns minutos.
echo O deploy deve iniciar automaticamente.
echo.
pause

