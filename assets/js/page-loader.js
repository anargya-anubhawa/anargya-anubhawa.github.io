'use strict';

window.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content-inner");
  const navButtons = document.querySelectorAll("[data-nav-link]");

  function activateNav(page) {
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === page);
    });
  }

  function loadPage(page) {
    if (!mainContent) return;

    fetch(`./pages/${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error(`Halaman ${page} tidak ditemukan`);
        return response.text();
      })
      .then(html => {
        mainContent.innerHTML = html;
        window.history.pushState({ page }, "", `#${page}`);
        activateNav(page);
        Promise.resolve().then(() => {
          if (typeof window.reInitAll === "function") {
            window.reInitAll();
          }
        });
      })
      .catch(error => {
        mainContent.innerHTML = `
        <div class="error-container">
        Gagal memuat halaman: ${error.message}
        </div>`;
        console.error(error);
      });
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      loadPage(page);
    });
  });

  window.addEventListener("popstate", () => {
    const page = location.hash.substring(1) || "about";
    loadPage(page);
  });

  const initialPage = location.hash.substring(1) || "about";
  loadPage(initialPage);
});
