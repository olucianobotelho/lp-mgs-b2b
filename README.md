# MGS Personalizados - Landing Page

Landing page desenvolvida para MGS Personalizados, seguindo rigorosamente o design especificado no Figma com abordagem mobile first.

## 🎨 Design

O projeto foi desenvolvido com base no design do Figma: [MGS - B2C](https://www.figma.com/design/EhmpXXA9p1xsPqXpqKMyqR/MGS---B2C?node-id=0-1&t=yP7fRicx3e5IAp6c-1)

### Características do Design:
- **Abordagem Mobile First**: Prioriza dispositivos móveis
- **Fidelidade Visual**: 100% fiel ao design original
- **Cores Extraídas**: Todas as cores foram extraídas diretamente do Figma
- **Tipografias**: Montserrat e Poppins conforme especificado
- **Responsivo**: Adaptável para tablet e desktop

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com variáveis CSS e Flexbox/Grid
- **JavaScript**: Interatividade e animações
- **Fontes**: Google Fonts (Montserrat e Poppins)

## 📱 Seções da Landing Page

1. **Header**: Logo e banner de oferta especial
2. **Hero**: Badge de desconto e CTA principal
3. **Clientes**: Logos dos clientes
4. **Caneca**: Produto principal com características
5. **Canetas**: Produto secundário com descrição
6. **Kits de Preços**: Kit em Dobro e Super Kit
7. **FAQ**: Dúvidas frequentes com accordion
8. **Redes Sociais**: Links para redes sociais
9. **Footer**: Direitos reservados

## 🎯 Funcionalidades

- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Accordion interativo para FAQ
- ✅ Animações suaves ao scroll
- ✅ Efeitos hover nos elementos
- ✅ Botões com gradientes e sombras
- ✅ Otimizado para conversão

## 🛠️ Como Executar

1. Clone ou baixe o projeto
2. Abra o terminal na pasta do projeto
3. Execute um servidor local:
   ```bash
   python -m http.server 8000
   ```
4. Acesse: `http://localhost:8000`

## 📂 Estrutura de Arquivos

```
mgs-landingpage/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS com variáveis
├── script.js           # JavaScript para interatividade
├── README.md           # Documentação do projeto
└── assets/
    └── images/         # Imagens extraídas do Figma
        ├── logo-mgs.png
        ├── caneca-produto.png
        ├── canetas-produto.png
        ├── kit-dobro.png
        ├── super-kit.png
        ├── cliente-*.png
        ├── social-*.png
        └── icon-*.png
```

## 🎨 Paleta de Cores

- **Background Principal**: #0F0F10
- **Texto Principal**: #FFFFFF
- **Texto Secundário**: #A2A6A9
- **Botões**: #FF6B35 → #FF8A5B (gradiente)
- **Desconto**: #FFD700 → #FFA500 (gradiente)

## 📱 Responsividade

### Mobile (até 767px)
- Layout em coluna única
- Imagens otimizadas para tela pequena
- Navegação touch-friendly

### Tablet (768px - 1023px)
- Grid de 2 colunas para produtos
- Logos de clientes em linha
- Espaçamentos aumentados

### Desktop (1024px+)
- Layout completo com 4 colunas
- Imagens em tamanho original
- Efeitos hover aprimorados

## 🔧 Customização

Para personalizar o projeto:

1. **Cores**: Modifique as variáveis CSS em `:root`
2. **Fontes**: Altere as importações do Google Fonts
3. **Imagens**: Substitua os arquivos na pasta `assets/images/`
4. **Conteúdo**: Edite o HTML conforme necessário

## 📞 Integração WhatsApp

O projeto está preparado para integração com WhatsApp. Para ativar:

1. Edite o arquivo `script.js`
2. Substitua o número de telefone na função `openWhatsApp()`
3. Personalize as mensagens padrão

## ✅ Checklist de Qualidade

- [x] Design 100% fiel ao Figma
- [x] Mobile First implementado
- [x] Todas as imagens otimizadas
- [x] Código semântico e acessível
- [x] Performance otimizada
- [x] Cross-browser compatibility
- [x] SEO básico implementado

---

**Desenvolvido com fidelidade total ao design original do Figma**