function initRouter() {
    const pages = document.querySelectorAll("[data-page]");
    const routeLinks = document.querySelectorAll("[data-route]");
    const nav = document.querySelector("[data-nav]");
    const menuToggle = document.querySelector("[data-menu-toggle]");
  
    function showPage(pageName) {
      pages.forEach((page) => {
        page.classList.toggle("active-page", page.dataset.page === pageName);
      });
  
      routeLinks.forEach((link) => {
        link.classList.toggle("active-link", link.dataset.route === pageName);
      });
  
      if (nav) {
        nav.classList.remove("nav-open");
      }
  
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
  
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    routeLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const pageName = link.dataset.route;
  
        if (!pageName) {
          return;
        }
  
        event.preventDefault();
        history.pushState(null, "", `#${pageName}`);
        showPage(pageName);
      });
    });
  
    window.addEventListener("popstate", () => {
      const pageName = location.hash.replace("#", "") || "home";
      showPage(pageName);
    });
  
    const initialPage = location.hash.replace("#", "") || "home";
    showPage(initialPage);
  
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });
    }
  
    window.SoundWaveRouter = {
      showPage
    };
  }