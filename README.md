# Portfólio do Matheus

Portfólio web feito com **React + Vite**, JavaScript, HTML e CSS.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
├── data/         # EDITE AQUI: profile.js, skills.js, projects.js
├── hooks/        # useReveal (animação no scroll), useTypewriter (efeito de digitação)
├── styles/       # global.css (tokens + reset) e sections.css (componentes)
├── App.jsx
└── main.jsx
```

## Como personalizar

Todo o conteúdo mora em `src/data/`. Troque nome, links, skills e projetos lá
e o site inteiro atualiza, sem precisar mexer nos componentes.

## Paleta

| Uso    | Cor       |
| ------ | --------- |
| Fundo  | `#09090F` |
| Cards  | `#171326` |
| Roxo   | `#8B5CF6` |
| Pink   | `#D946EF` |
| Texto  | `#F5F3FF` |
