# SDMD S/A – Arquitetura Híbrida (Web Deck)

Deck de slides (estilo PPT, SPA) apresentando a proposta arquitetural do estudo de caso **SDMD S/A** — abertura de contas 100% digital — disciplina *Fundamentos de Redes de Computadores e Cloud Computing* (Prof. Rodrigo Petcov).

Desenvolvido com **React + Vite + TypeScript**, bilíngue (PT-BR / en-US) e publicado via **GitHub Pages**.

🔗 **Deck publicado:** <https://chrissperb.github.io/4P-Redes-de-Computadores-e-Cloud/#/1>

---

## Conteúdo do deck

28 slides cobrindo, em ordem:

| Fase | Tema | Slides |
|---|---|---|
| 1 — Contexto | Negócio, desafio, escopo, requisitos e rastreabilidade | 01–07 |
| 2 — Solução | Cloud híbrida + AWS + Direct Connect, diagrama e zonas | 08–19 |
| 3 — Segurança & Conformidade | Responsabilidade compartilhada, IAM/MFA, criptografia, auditoria, LGPD | 20–24 |
| 4 — Encerramento | Benefícios, aspectos econômicos, conclusão e referências | 25–28 |

## Tecnologias

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/) – `HashRouter` (deep-links `#/1..#/28` sem 404 no Pages)
- CSS puro (16:9, print-friendly via `print.css`, temas claro/escuro, alto contraste)
- SVG inline hand-authored (diagrama de arquitetura, logos, ícones, bandeiras)
- Speech Synthesis API (leitura em voz alta, voz segue o idioma ativo)

## Arquitetura de Pastas (MVC pragmático)

```
site/
  src/
    models/        # Tipagens (ISlide, IZone, BilingualText)
    data/          # Dados puros (slidesData, architectureZones)
    i18n/          # Contexto/idioma + dicionário UI (pt/en)
    views/         # Apresentação (Layout, Slides, SVG, Common)
    controllers/   # Orquestração/estado (DeckController)
    hooks/         # Lógica reutilizável (useHashSync, useKeyboardNav, TTS…)
    routes/        # Roteamento (AppRoutes com HashRouter)
    styles/        # deck.css + print.css
    components/    # Ícones, ilustrações, logos de marcas
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
npm run build   # tsc + vite build → dist/
npm run preview
```

## Navegação e Atalhos

| Tecla/Ação | Função |
|---|---|
| `→`, `Espaço`, `PgDn` | Próximo slide |
| `←`, `PgUp` | Slide anterior |
| `Home` / `End` | Primeiro / Último |
| `O` | Alternar Visão Geral (mapa de slides) |
| `F` | Tela cheia |
| `T` | Alternar tema claro/escuro |
| `L` | Alternar idioma PT-BR / en-US |
| `A` | Painel de acessibilidade |
| `R` / `S` | Ler / parar leitura do slide |
| `?`, `H` | Ajuda e atalhos |
| `Esc` | Fechar painéis |

Barra de navegação inferior: `Início · Anterior · Visão geral · Próximo · Tela cheia · Tema · Idioma · Acessibilidade · Ajuda`.

## Acessibilidade

- Alto contraste (fundo preto, texto branco, destaques amarelos)
- Escala de texto (100% / 125% / 150%) via `container query` sem quebrar layout
- Redução de movimento (desativa animações)
- Leitura em voz alta (TTS) com voz compatível com o idioma ativo; modo "ler ao navegar"
- Navegação completa por teclado (`aria-expanded`, `aria-pressed`, `aria-live`, `role="dialog"`)
- Preferências persistidas em `localStorage` (`sdmd-theme`, `sdmd-hc`, `sdmd-text-scale`, `sdmd-motion`, `sdmd-lang`) com script FOUC no `index.html` (sem flash no carregamento)

## Deploy (GitHub Pages)

Repo: `https://github.com/chrissperb/4P-Redes-de-Computadores-e-Cloud`

- Build estático em `dist/` com `base: '/4P-Redes-de-Computadores-e-Cloud/'`
- Workflow: `.github/workflows/pages.yml` (Vite → upload artifact → Pages)
- Push em `main` dispara o deploy automaticamente

## Mapeamento: Entregáveis × Slides

| Entregável | Slides |
|---|---|
| 1. Requisitos da solução | 06 |
| 2. Descrição da solução proposta | 19 |
| 3. Diagrama de arquitetura | 11–12 |
| 4. Componentes + funcionalidades | 13–18 |
| 5. Principais benefícios | 25 |

Critérios de avaliação cobertos em 01, 03–04, 07–09, 12, 20–24, 27.

## Material de apoio (raiz do repo)

- `Avaliação Final.docx` – enunciado do estudo de caso
- `redes_de_computadores_e_cloud_unidade_{i,ii,iii,iv}.pdf` – material didático da disciplina

## Observação

Proposta **arquitetural/conceitual**. Serviços AWS citados como **exemplos de implementação** dos conceitos das Unidades I–IV (fundamentação vendor-agnóstica). Sem implantação em produção.