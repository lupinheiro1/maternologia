
# Plano: Hero Section com Foto de Fundo + Tipografia Sans-Serif + Lazy Loading

## Resumo

Vou transformar a Hero Section para usar as suas fotos como fundo (uma para desktop, outra para mobile), trocar a tipografia para sans-serif em todo o site, e configurar lazy loading inteligente para otimizar a performance.

---

## 1. Copiar as Imagens para o Projeto

- Copiar `hero-section-maternologia-mae-bebe.webp` para `src/assets/hero-desktop.webp`
- Copiar `hero-section-maternologia-mae-bebe-mobile.webp` para `src/assets/hero-mobile.webp`

---

## 2. Nova Hero Section

### Layout Desktop
- Foto paisagem cobrindo toda a tela
- Texto posicionado a esquerda (50-60% da largura)
- Overlay gradiente da esquerda para direita (mais escuro onde fica o texto)
- Imagem posicionada para preservar voce e o bebe (`object-position: right center`)

### Layout Mobile
- Foto retrato cobrindo toda a tela
- Texto centralizado na parte inferior
- Overlay gradiente de baixo para cima

### Carregamento
- Ambas as imagens com `loading="eager"` e `fetchpriority="high"` para carregar imediatamente
- Alternancia entre imagens via CSS (`hidden md:block` / `block md:hidden`)

---

## 3. Tipografia Sans-Serif

### Alteracoes no CSS Global (`src/index.css`)
- Remover importacao da fonte Playfair Display
- Manter apenas Inter como fonte principal

### Alteracoes no Tailwind (`tailwind.config.ts`)
- Atualizar `font-display` para usar Inter ou criar uma variacao bold
- Manter consistencia com o estilo Big Little Feelings

---

## 4. Lazy Loading em Todo o Site

### Imagens que carregam imediatamente (Hero)
```
loading="eager"
fetchpriority="high"
```

### Imagens com Lazy Loading (resto do site)
```
loading="lazy"
```

### Componentes afetados
- **BlogSection**: Imagens dos artigos (quando forem adicionadas)
- **AboutSection**: Foto da Luiza (quando for adicionada)
- **CoursesSection**: Imagens dos cursos (se adicionadas futuramente)

---

## Arquivos a Serem Modificados

| Arquivo | Alteracao |
|---------|-----------|
| `src/assets/` | Adicionar 2 imagens da hero |
| `src/index.css` | Remover Playfair Display, ajustar tipografia |
| `tailwind.config.ts` | Atualizar font-display para sans-serif |
| `src/components/HeroSection.tsx` | Reestruturar com foto de fundo e layout novo |
| `src/components/Header.tsx` | Ajustar cores do texto para contraste com a imagem |
| `src/components/AboutSection.tsx` | Adicionar lazy loading nas imagens |
| `src/components/BlogSection.tsx` | Adicionar lazy loading nas imagens |
| `src/components/CoursesSection.tsx` | Remover font-display dos titulos |

---

## Estrutura da Nova HeroSection

```text
<section> (relative, min-h-screen)
  |
  |-- <img> desktop (hidden em mobile, object-cover, eager loading)
  |-- <img> mobile (hidden em desktop, object-cover, eager loading)
  |
  |-- <div> overlay (gradiente para legibilidade)
  |
  |-- <div> container (relative, z-10)
        |-- <h1> headline (texto claro, sombra sutil)
        |-- <p> subheadline
        |-- <Button> CTA
        |-- <a> seta para baixo
```

---

## Resultado Esperado

- Hero com visual impactante igual ao Big Little Feelings
- Foto preservada corretamente em ambos os tamanhos de tela
- Tipografia moderna e limpa (sans-serif)
- Site otimizado com lazy loading (apenas hero carrega imediatamente)
- Header continua transparente no topo e fixo ao rolar
