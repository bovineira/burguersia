# Script para forçar deploy no Vercel
Write-Host "Adicionando arquivos..." -ForegroundColor Yellow
git add .

Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "Deploy: atualiza página cardapio para aquisição normal - A PARTIR DAS 18:30"

Write-Host "Fazendo push..." -ForegroundColor Yellow
git push origin main

Write-Host "`nDeploy iniciado! Verifique o painel do Vercel em alguns minutos." -ForegroundColor Green
Write-Host "URL do repositório:" -ForegroundColor Cyan
git remote get-url origin

