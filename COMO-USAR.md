# 🍔 Como Usar a Landing Page Burguersia Black Friday

## ✅ Status

✨ **Servidor iniciado com sucesso!**

## 🌐 Acesso

Abra seu navegador e acesse:

```
http://localhost:5173
```

## 🎯 Personalizar o Link do iFood

1. Abra o arquivo `src/App.jsx`
2. Encontre a linha com o link do iFood:

```jsx
<a
  href="https://www.ifood.com.br"  // ← ALTERE AQUI
  target="_blank"
  ...
```

3. Substitua `https://www.ifood.com.br` pelo link da sua loja no iFood
4. Salve o arquivo - o navegador irá atualizar automaticamente!

## 🎨 Personalizar Cores

Para alterar as cores, edite `tailwind.config.js`:

```javascript
colors: {
  'neon-red': '#ff0040',      // Cor do título BLACK FRIDAY
  'neon-purple': '#bc13fe',   // Alternativa roxa
  'gold': '#FFD700',          // Cor do preço e botão
  'deep-black': '#0a0a0a',    // Cor de fundo
},
```

## 📝 Alterar Textos

Edite `src/App.jsx` e procure por:

- **Título**: `BLACK FRIDAY`
- **Subtítulo**: `2 HAMBÚRGUERES POR:`
- **Preço**: `49,90`
- **Botão**: `ABRIR IFOOD`
- **Rodapé**: `Oferta válida enquanto durarem os estoques.`

## 🖼️ Trocar Imagem de Fundo

Em `src/App.jsx`, linha ~16, altere a URL da imagem:

```jsx
backgroundImage: `url('SUA_IMAGEM_AQUI')`,
```

**Dicas:**
- Use imagens de alta qualidade
- Tamanho recomendado: 1920x1080px ou maior
- Formato: JPG ou WebP

## 🚀 Build para Produção

Quando estiver pronto para publicar:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 📱 Testar em Dispositivos Móveis

1. Descubra seu IP local:
   ```powershell
   ipconfig
   ```

2. Inicie o servidor com host exposto:
   ```bash
   npm run dev -- --host
   ```

3. Acesse do seu celular:
   ```
   http://SEU_IP:5173
   ```

## 🎨 Recursos Visuais Implementados

✅ Background preto profundo com imagem de hambúrguer
✅ Overlay escuro (90% opacidade)
✅ Efeito Neon piscante no título "BLACK FRIDAY"
✅ Preço em dourado vibrante com efeito glow
✅ Animação de pulse no preço (chama atenção)
✅ Botão CTA amarelo ouro com efeito sheen (brilho diagonal)
✅ Animação de shake no botão a cada 5 segundos
✅ Totalmente responsivo (Mobile-First)
✅ Fontes Anton e Bebas Neue do Google Fonts
✅ Elementos decorativos com blur e animação

## 🛠️ Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Instalar dependências (se necessário)
npm install
```

## 📞 Próximos Passos

1. ✅ Personalizar o link do iFood
2. ✅ Ajustar textos e preços
3. ✅ Trocar imagem de fundo (opcional)
4. ✅ Testar em diferentes dispositivos
5. ✅ Fazer build para produção
6. ✅ Hospedar (Vercel, Netlify, etc.)

## 🌟 Dicas de Conversão

- Mantenha o design limpo e direto
- O preço é o protagonista - não mude muito o tamanho
- O botão está otimizado para conversão com animações
- Teste sempre em dispositivos móveis reais
- A oferta com prazo limitado gera urgência

---

**Desenvolvido com ❤️ para Burguersia**

🍔 Boa sorte com sua campanha de Black Friday!



