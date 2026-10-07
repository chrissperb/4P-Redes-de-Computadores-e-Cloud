# SDMD S/A – Arquitetura (Web Deck)

SPA no formato slide deck (estilo PPT) para a solução arquitetural do estudo de caso **SDMD S/A** (abertura de contas 100% digital). Projeto desenvolvido com **React + Vite + TypeScript** e publicado via **GitHub Pages**.

## Tecnologias

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/) – `HashRouter`
- CSS puro (16:9, print-friendly, acessível)
- SVG inline hand-authored

## Arquitetura de Pastas (MVC pragmático)

```
src/
  models/        # Tipagens (ISlide, ZoneId)
  data/          # Dados puros (ordem canônica + zonas)
  views/         # Apresentação (Layout, Slides, SVG, Common)
  controllers/   # Orquestração/estado (DeckController)
  hooks/         # Lógica reutilizável (useHashSync, useKeyboardNav)
  routes/        # Roteamento (AppRoutes com HashRouter)
  styles/        # deck.css + print.css
  utils/         # Helpers
```

## Desenvolvimento Local

```bash
cd site
npm install
npm run dev
```

Acesse [http://localhost:5173/4P-Redes-de-Computadores-e-Cloud/](http://localhost:5173/4P-Redes-de-Computadores-e-Cloud/)

## Build + Preview

```bash
npm run build
npm run preview
```

## Navegação

| Tecla/Ação | Função |
|---|---|
| `→`, `Espaço`, `PageDown` | Próximo slide |
| `←`, `PageUp` | Slide anterior |
| `Home` / `End` | Primeiro / Último |
| `O` | Alternar Visão Geral (Overview) |
| `F` | Tela cheia |
| `?` | Ajuda |
| Clique/Tap + Swipe | Navegação natural |

## Deploy (GitHub Pages)

Repo: `https://github.com/chrissperb/4P-Redes-de-Computadores-e-Cloud`

Build estático em `dist/` com `base: '/4P-Redes-de-Computadores-e-Cloud/'`. HashRouter garante deep-links `#/1..#/28` sem 404 no Pages.

## Mapeamento: Entregáveis × Slides

| Entregável | Slides |
|---|---|
| 1. Requisitos da solução | 06 |
| 2. Descrição da solução proposta | 19 |
| 3. Diagrama de arquitetura | 11–12 |
| 4. Componentes + funcionalidades | 13–18 |
| 5. Principais benefícios | 25 |

Critérios de avaliação cobertos em 01,03–04,07–09,12,20–24,27.

## Observação

Proposta **arquitetural/conceitual**. Serviços AWS citados como **exemplos de implementação** dos conceitos dos Unidades I–IV (vendor-agnóstico na fundamentação). Sem implantação em produção.
