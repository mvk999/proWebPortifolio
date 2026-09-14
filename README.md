# Página Pessoal — GAC116

Projeto desenvolvido para a Atividade Prática 2 da disciplina GAC116 — Programação Web, da Universidade Federal de Lavras.

## Autor

Marcos Vinícius Pereira<br>
Ciência da Computação — UFLA

## Versões

- Bootstrap
- Tailwind CSS

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Tailwind CSS

## Estrutura

- `index.html`: página de entrada com links para as duas versões.
- `bootstrap/`: versão construída com Bootstrap 5.3.
- `tailwind/`: versão construída com Tailwind CSS 4, incluindo o CSS compilado.
- `assets/`: estilos da página de entrada.

## Executando

Para abrir a versão Bootstrap, abra `bootstrap/index.html` no navegador ou acesse a versão correspondente pela página inicial.

Para visualizar a versão Tailwind, abra `tailwind/index.html` no navegador ou acesse a versão correspondente pela página inicial. O arquivo `tailwind/assets/css/style.css` já está incluído no repositório.

Para gerar novamente o CSS do Tailwind, instale as dependências e execute:

```bash
npm install
npm run build:tailwind
```

Durante o desenvolvimento, o modo de observação pode ser iniciado com `npm run dev:tailwind`.

## GitHub Pages

O projeto utiliza apenas arquivos estáticos, caminhos relativos e dependências de execução disponíveis no navegador. Por isso, está preparado para publicação pelo GitHub Pages.
