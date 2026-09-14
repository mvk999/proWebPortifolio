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

  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.bsTheme === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
      });
    });
  });
})();
