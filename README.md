# Página Pessoal — GAC116

Portfólio pessoal desenvolvido para a **Atividade Prática 2** da disciplina
**GAC116 — Programação Web**, da Universidade Federal de Lavras (UFLA).

O projeto apresenta o mesmo conteúdo em duas implementações: uma construída
com Bootstrap e outra com Tailwind CSS. A proposta é permitir a comparação
entre os frameworks sem alterar as informações ou as funcionalidades da página.

## Demonstração

- [Página inicial](https://mvk999.github.io/proWebPortifolio/)
- [Versão Bootstrap](https://mvk999.github.io/proWebPortifolio/bootstrap/)
- [Versão Tailwind CSS](https://mvk999.github.io/proWebPortifolio/tailwind/)

## Funcionalidades

- layout responsivo para celulares, tablets e computadores;
- temas claro e escuro com preferência salva no navegador;
- apresentação pessoal com foto, formação e canais de contato;
- seção de experiências profissionais;
- carrossel interativo de projetos;
- navegação por âncoras e menu adaptado para dispositivos móveis;
- links externos para GitHub, LinkedIn e repositórios dos projetos;
- recursos básicos de acessibilidade, como link para pular ao conteúdo,
  descrições de controles e suporte à preferência de movimento reduzido.

## Tecnologias

### Base do projeto

- HTML5;
- CSS3;
- JavaScript;
- Git e GitHub Pages.

### Frameworks

- [Bootstrap 5.3](https://getbootstrap.com/);
- [Tailwind CSS 4](https://tailwindcss.com/).

## Estrutura do repositório

```text
proWebPortifolio/
├── assets/
│   └── css/
│       └── style.css              # Estilos da página de entrada
├── bootstrap/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── img/
│   │   │   └── favicon.svg
│   │   └── js/
│   │       └── main.js
│   └── index.html                 # Versão Bootstrap
├── tailwind/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── input.css         # Código-fonte dos estilos Tailwind
│   │   │   └── style.css         # CSS compilado
│   │   ├── img/
│   │   │   └── favicon.svg
│   │   └── js/
│   │       └── main.js
│   └── index.html                 # Versão Tailwind CSS
├── index.html                     # Seletor entre as duas versões
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Conteúdo das páginas

As duas versões possuem as mesmas seções:

1. apresentação;
2. sobre;
3. experiências profissionais;
4. projetos;
5. formação;
6. contato.

As diferenças estão apenas na construção visual e nas classes fornecidas por
cada framework.

## Executando localmente

Como o projeto é composto por arquivos estáticos, é possível abrir o
`index.html` diretamente no navegador. Para uma experiência mais próxima da
publicação, também é possível utilizar qualquer servidor HTTP local.

Exemplo com a extensão **Live Server** do Visual Studio Code:

1. abra a pasta do projeto no editor;
2. clique com o botão direito sobre `index.html`;
3. selecione **Open with Live Server**.

## Desenvolvimento com Tailwind CSS

O CSS compilado já está versionado, portanto não é necessário instalar
dependências apenas para visualizar o site.

Para modificar os estilos Tailwind, instale as dependências:

```bash
npm install
```

Gere novamente o arquivo CSS:

```bash
npm run build:tailwind
```

Durante o desenvolvimento, utilize o modo de observação:

```bash
npm run dev:tailwind
```

## Publicação

O projeto está publicado pelo GitHub Pages a partir da branch `main`:

<https://mvk999.github.io/proWebPortifolio/>

## Autor

**Marcos Vinícius Pereira**  
Estudante de Ciência da Computação na Universidade Federal de Lavras

- [GitHub](https://github.com/mvk999)
- [LinkedIn](https://www.linkedin.com/in/mvpereira2006/)

## Licença

Este projeto está disponível sob a [licença MIT](LICENSE).
