# 🌴 Bossa Eco Luxury Villas – Landing Page

![Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Landing page institucional para o empreendimento **Bossa Eco Luxury Villas**, localizada em Milagres - AL.

<br/>

## 🛠️ Configuração de Variáveis de Ambiente

Este projeto usa variáveis de ambiente para proteger informações sensíveis.

### 📁 Arquivos `.env`

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

2. Edite o arquivo `.env.local` com suas configurações específicas.

```bash
REACT_APP_MAKE_WEBHOOK=https://seu-webhook.aqui
```
<br/>

## 🚧 Próximas atualizações

### 🔍 Otimização de Performance

- [ ] Converter imagens para WebP com compressão eficiente
 - [x] Aplicar lazy loading nas imagens (`loading="lazy"`)
- [x] Revisar uso de fontes externas
- [x] Minificar e limpar arquivos CSS/JS não utilizados
- [x] Ativar cache e compressão na hospedagem

### 🧠 Acessibilidade e SEO

- [x] Atualizar `title`, `meta description` e tags de redes sociais
 - [x] Atualizar tags `alt` nas imagens
- [ ] Revisar estrutura HTML para melhorar acessibilidade
- [ ] Otimizar estrutura de arquivos para melhor SEO

### 📦 Tamanho do Bundle

- [x] Analisar tamanho do build com `rollup-plugin-visualizer`
- [ ] Verificar importações parciais de componentes/pacotes

### 🌐 Responsividade

- [x] Revisar quebras de layout e fontes pequenas em telas menores

### 🧪 Testes e Manutenção

- [ ] Desenvolver testes unitários para componentes
- [ ] Incluir testes básicos de acessibilidade (Lighthouse)
- [x] Automatizar build para Netlify
- [x] Monitorar desempenho pós-deploy com Netlify Analytics
