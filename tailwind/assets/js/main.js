(() => {
  document.documentElement.classList.remove("no-js");

  const storageKey = "mvp-theme";
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function getTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : (mediaQuery.matches ? "dark" : "light");
  }

  function applyTheme(theme) {
    document.documentElement.dataset.bsTheme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextTheme = theme === "dark" ? "claro" : "escuro";
      button.setAttribute("aria-label", `Ativar tema ${nextTheme}`);
      button.setAttribute("title", `Ativar tema ${nextTheme}`);
    });
  }

  const languageStorageKey = "mvp-language";
  const translations = {
    "Página pessoal": "Personal page", "Olá, meu nome é": "Hello, my name is", "Estudante de Ciência da Computação": "Computer Science student", "Formação atual": "Current education", "6º período": "6th semester", "Início": "Home", "Sobre": "About", "Trajetória acadêmica e prática aplicada ao desenvolvimento de software": "Academic path and hands-on software development", "Atuação": "Focus", "Desenvolvimento de software": "Software development", "Backend, APIs REST e integração entre módulos.": "Backend, REST APIs, and module integration.", "Projetos aplicados": "Applied projects", "Soluções para Web, dados e aplicações práticas.": "Solutions for Web, data, and practical applications.", "Tecnologias em uso": "Technologies in use", "Java, Python, JavaScript, SQL e PostgreSQL.": "Java, Python, JavaScript, SQL, and PostgreSQL.", "Projetos": "Projects", "APIs · Dados · Web": "APIs · Data · Web", "Experiências": "Experience", "Experiências profissionais": "Professional experience", "Tecnologias": "Technologies", "Formação": "Education", "Contato": "Contact", "Escolher versão": "Choose version", "Conheça os projetos": "Explore the projects", "Linguagens": "Languages", "Desenvolvimento": "Development", "E-mail": "Email", "Ciência da Computação": "Computer Science", "Técnico em Informática Integrado ao Ensino Médio": "Technical Degree in Informatics Integrated with High School", "Universidade Federal de Lavras — UFLA": "Federal University of Lavras — UFLA", "IFSULDEMINAS — Campus Machado": "IFSULDEMINAS — Machado Campus", "Ver repositório": "View repository", "Pular para o conteúdo": "Skip to content",
    "Tecnologias presentes na minha formação e nos projetos reunidos neste portfólio.": "Technologies present in my education and in the projects featured in this portfolio.", "Desenvolvedor de Sistemas I": "Systems Developer I", "Bolsista em Qualidade de Software e Automação de Testes": "Software Quality and Test Automation Scholarship Holder", "Gerente de Projetos e Qualidade": "Project and Quality Manager", "ago. 2026 — atual": "Aug. 2026 — present", "jun. 2025 — jul. 2026": "Jun. 2025 — Jul. 2026", "fev. 2025 — jan. 2026": "Feb. 2025 — Jan. 2026", "Vamos conversar sobre projetos, tecnologia ou oportunidades de colaboração.": "Let's talk about projects, technology, or collaboration opportunities.", "Canal direto para contato.": "Direct contact channel.", "Perfil profissional e trajetória acadêmica.": "Professional profile and academic background.", "Repositórios e projetos públicos.": "Public repositories and projects.",
    "Sou Marcos Vinícius Pereira, estudante do 6º período de Ciência da Computação na Universidade Federal de Lavras (UFLA). Nesta página, apresento minha formação, alguns projetos disponíveis no GitHub e meus principais canais de contato. Entre os projetos estão trabalhos de Programação Web e Algoritmos em Grafos, além de aplicações como LocalCast, Vought Tech e API Rhaegal.": "I am Marcos Vinícius Pereira, a sixth-semester Computer Science student at the Federal University of Lavras (UFLA). This page presents my education, selected projects available on GitHub, and main contact channels. The projects include Web Programming and Graph Algorithms assignments, as well as applications such as LocalCast, Vought Tech, and API Rhaegal.", "Sou Marcos Vinícius Pereira, estudante de Ciência da Computação na Universidade Federal de Lavras (UFLA). Neste portfólio, reúno experiências, projetos e tecnologias que fazem parte da minha trajetória de desenvolvimento.": "I am Marcos Vinícius Pereira, a Computer Science student at the Federal University of Lavras (UFLA). This portfolio brings together the experiences, projects, and technologies that are part of my development journey.",
    "Ferramenta de espelhamento em rede local que usa WebRTC e pareamento por PIN para transmitir a tela do notebook ao navegador de uma Smart TV.": "A local-network screen mirroring tool using WebRTC and PIN pairing to stream a laptop screen to a Smart TV browser.", "Projeto de ciência de dados que prepara, valida e explora 1.900 partidas do Campeonato Brasileiro entre 2020 e 2024.": "A data science project that prepares, validates, and explores 1,900 Brazilian Championship matches from 2020 to 2024.", "Aplicação Java web de gestão com operações CRUD, persistência em MySQL e implantação em servidor GlassFish.": "A Java web management application with CRUD operations, MySQL persistence, and deployment on a GlassFish server.", "API backend desenvolvida para o desafio da Comp Júnior 2025.1, reunindo o gerenciamento de membros, orçamentos e clientes.": "A backend API developed for the Comp Júnior 2025.1 challenge, bringing together member, budget, and client management.", "Jogo de cobrinha para a disciplina GAC116 — Programação Web, com controles por teclado, pausas, colisões e reinício de partida.": "A snake game for the GAC116 — Web Programming course, with keyboard controls, pausing, collisions, and game restart.",
    "Desenvolvimento e evolução de um módulo de framework em Java, com integração aos componentes existentes e manutenção do código com foco em reutilização, legibilidade e evolução do sistema.": "Development and evolution of a Java framework module, integrating existing components and maintaining the code with a focus on reuse, readability, and system evolution.", "Desenvolvimento backend em Java, APIs REST e integrações entre módulos, além de testes automatizados com Zettalenium e atuação com Git, code review e integração contínua.": "Backend development in Java, REST APIs, and module integrations, along with automated testing using Zettalenium, Git, code review, and continuous integration.", "Atuação em projetos backend, acompanhando demandas e validações técnicas, com contribuição em revisão de código, documentação e padronização de processos.": "Work on backend projects, following requirements and technical validations while contributing to code review, documentation, and process standardization.", "Sou Marcos Vinícius Pereira, estudante do 6º período de Ciência da Computação na Universidade Federal de Lavras (UFLA). Nesta página, apresento minha formação, alguns projetos disponíveis no GitHub e meus principais canais de contato. Entre os projetos estão trabalhos de Programação Web e Algoritmos em Grafos, além de aplicações como LocalCast, Vought Tech e API Rhaegal.": "I am Marcos Vinícius Pereira, a sixth-semester Computer Science student at the Federal University of Lavras (UFLA). This page presents my education, selected projects available on GitHub, and main contact channels. The projects include Web Programming and Graph Algorithms assignments, as well as applications such as LocalCast, Vought Tech, and API Rhaegal."
  };

  function setupLanguage() {
    const toggle = document.querySelector("[data-language-toggle]");
    if (!toggle) return;
    const candidates = [...document.querySelectorAll("body *")].filter((element) => element.children.length === 0 && translations[element.textContent.trim()]);
    candidates.forEach((element) => { element.dataset.languageKey = element.textContent.trim(); });
    const compound = [...document.querySelectorAll(".about-link, .version-switch, .legacy-projects .project-card > a")];
    compound.forEach((element) => { element.dataset.languageKey = element.textContent.trim().replace(/\s*→|\s*↗/g, "").trim(); });
    let language = localStorage.getItem(languageStorageKey) === "en" ? "en" : "pt";
    const applyLanguage = (nextLanguage) => {
      language = nextLanguage;
      document.documentElement.lang = language === "en" ? "en" : "pt-BR";
      candidates.forEach((element) => { const key = element.dataset.languageKey; element.textContent = language === "en" ? translations[key] : key; });
      compound.forEach((element) => { const key = element.dataset.languageKey; const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE); if (textNode) textNode.nodeValue = `${language === "en" ? translations[key] : key} `; });
      document.title = language === "en" ? "Marcos Vinícius Pereira | Personal Page" : "Marcos Vinícius Pereira | Página Pessoal";
      toggle.textContent = language === "en" ? "PT" : "EN";
      toggle.setAttribute("aria-label", language === "en" ? "Mudar idioma para português" : "Mudar idioma para inglês");
      toggle.setAttribute("title", toggle.getAttribute("aria-label"));
      localStorage.setItem(languageStorageKey, language);
    };
    toggle.addEventListener("click", () => applyLanguage(language === "en" ? "pt" : "en"));
    applyLanguage(language);
  }

  const projects = [
    { meta: "JavaScript · WebRTC", name: "LocalCast", description: "Ferramenta de espelhamento em rede local que usa WebRTC e pareamento por PIN para transmitir a tela do notebook ao navegador de uma Smart TV.", url: "https://github.com/mvk999/localcast" },
    { meta: "Python · Jupyter Notebook", name: "Brasileirão Predictor", description: "Projeto de ciência de dados que prepara, valida e explora 1.900 partidas do Campeonato Brasileiro entre 2020 e 2024.", url: "https://github.com/mvk999/brasileirao-predictor" },
    { meta: "Java EE · MySQL", name: "Projeto Final Java Web", description: "Aplicação Java web de gestão com operações CRUD, persistência em MySQL e implantação em servidor GlassFish.", url: "https://github.com/mvk999/Projeto-Final-Java" },
    { meta: "JavaScript · Backend", name: "API Rhaegal", description: "API backend desenvolvida para o desafio da Comp Júnior 2025.1, reunindo o gerenciamento de membros, orçamentos e clientes.", url: "https://github.com/mvk999/zeus-backend" },
    { meta: "HTML · CSS · JavaScript", name: "Code Snake", description: "Jogo de cobrinha para a disciplina GAC116 — Programação Web, com controles por teclado, pausas, colisões e reinício de partida.", url: "https://github.com/mvk999/progWebJogo" }
  ];

  function setupProjectCarousel() {
    const carousel = document.querySelector("[data-project-carousel]");
    if (!carousel) return;
    const card = carousel.querySelector("[data-project-card]");
    const index = carousel.querySelector("[data-project-index]");
    const dots = carousel.querySelector("[data-project-dots]");
    let current = 0;

    projects.forEach((project, projectIndex) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.type = "button";
      dot.setAttribute("aria-pressed", "false");
      dot.setAttribute("aria-label", `Ver projeto ${projectIndex + 1}: ${project.name}`);
      dot.addEventListener("click", () => render(projectIndex));
      dots.append(dot);
    });

    function render(nextIndex) {
      current = (nextIndex + projects.length) % projects.length;
      const project = projects[current];
      card.innerHTML = `<p class="project-meta">${project.meta}</p><h3>${project.name}</h3><p>${project.description}</p><a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver repositório <span aria-hidden="true">↗</span></a>`;
      index.textContent = `${String(current + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
      dots.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
        const isActive = dotIndex === current;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });
    }

    carousel.querySelector("[data-project-prev]").addEventListener("click", () => render(current - 1));
    carousel.querySelector("[data-project-next]").addEventListener("click", () => render(current + 1));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        render(current - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        render(current + 1);
      }
    });
    render(0);
  }

  function setupMobileMenu() {
    const menuButton = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-menu-toggle] + [id]");

    if (!menuButton || !menu) return;

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      menu.classList.toggle("hidden", isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menu");
        menu.classList.add("hidden");
      });
    });
  }

  function setupActiveNavigation() {
    const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!links.length || !sections.length) return;

    function setActive(sectionId) {
      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${sectionId}`;
        link.classList.toggle("is-active", isActive);
        link.toggleAttribute("aria-current", isActive);
      });
    }

    function updateActiveNavigation() {
      const referencePoint = window.scrollY + window.innerHeight * 0.6;
      const activeSection = sections
        .filter((section) => section.offsetTop <= referencePoint)
        .at(-1) || sections[0];
      setActive(activeSection.id);
    }

    window.addEventListener("scroll", updateActiveNavigation, { passive: true });
    window.addEventListener("resize", updateActiveNavigation);
    updateActiveNavigation();
  }

  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", () => {
    setupProjectCarousel();
    setupActiveNavigation();
    setupLanguage();
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      });
    });
    setupMobileMenu();
  });
})();
