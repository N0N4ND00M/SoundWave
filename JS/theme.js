function initTheme() {
    const toggle = document.querySelector("[data-theme-toggle]");
    const label = document.querySelector("[data-theme-label]");
    const savedTheme = localStorage.getItem("soundwave-theme");
  
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }
  
    updateThemeLabel();
  
    if (toggle) {
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
  
        const theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
  
        localStorage.setItem("soundwave-theme", theme);
        updateThemeLabel();
      });
    }
  
    function updateThemeLabel() {
      if (!label) {
        return;
      }
  
      label.textContent = document.body.classList.contains("light-theme")
        ? "Dark mode"
        : "Light mode";
    }
  }