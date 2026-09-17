(() => {
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

  const projects = [
    { meta: "JavaScript", name: "LocalCast", description: "Aplicação web para espelhar a tela do notebook no navegador de uma Smart TV pela rede local.", url: "https://github.com/mvk999/localcast" },
    { meta: "Jupyter Notebook", name: "ProjetoGrafos", description: "Trabalho final de Algoritmos em Grafos que explora roteamento sob restrições de capacidade no problema CARP.", url: "https://github.com/mvk999/ProjetoGrafos" },
    { meta: "JavaScript", name: "Vought Tech", description: "E-commerce de produtos tecnológicos desenvolvido como parte do projeto EngSoftware.", url: "https://github.com/mvk999/EngSoftware" },
    { meta: "JavaScript", name: "API Rhaegal", description: "API backend criada para o desafio da Comp Júnior 2025.1, voltada ao gerenciamento de membros, orçamentos e clientes.", url: "https://github.com/mvk999/zeus-backend" },
    { meta: "HTML · CSS · JavaScript", name: "Code Snake", description: "Jogo de cobrinha desenvolvido para a disciplina GAC116 — Programação Web, com interface e mecânicas próprias.", url: "https://github.com/mvk999/progWebJogo" }
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
      dot.setAttribute("aria-label", `Ver projeto ${projectIndex + 1}: ${project.name}`);
      dot.addEventListener("click", () => render(projectIndex));
      dots.append(dot);
    });

    function render(nextIndex) {
      current = (nextIndex + projects.length) % projects.length;
      const project = projects[current];
      card.innerHTML = `<p class="project-meta">${project.meta}</p><h3>${project.name}</h3><p>${project.description}</p><a href="${project.url}" target="_blank" rel="noopener noreferrer">Ver repositório <span aria-hidden="true">↗</span></a>`;
      index.textContent = `${String(current + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
      dots.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === current));
    }

    carousel.querySelector("[data-project-prev]").addEventListener("click", () => render(current - 1));
    carousel.querySelector("[data-project-next]").addEventListener("click", () => render(current + 1));
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

  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", () => {
    setupProjectCarousel();
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
