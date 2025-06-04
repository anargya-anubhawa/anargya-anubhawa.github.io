'use strict';

window.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const navButtons = document.querySelectorAll("[data-nav-link]");

  function activateNav(page) {
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === page);
    });
  }

function loadPage(page) {
  if (!mainContent) return;

  fetch(`./pages/${page}.html`) // Ensure this path is correct
    .then(response => {
      if (!response.ok) throw new Error(`Halaman ${page} tidak ditemukan`);
      return response.text();
    })
    .then(html => {
      mainContent.innerHTML = html;
      window.history.pushState({ page }, "", `#${page}`);
      activateNav(page);
    })
    .catch(error => {
      mainContent.innerHTML = `<p style="color: red;">Gagal memuat halaman: ${error.message}</p>`;
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
    const page = location.hash.substring(1) || "blog";
    loadPage(page);
  });

  // Load halaman awal berdasarkan hash atau default about
  const initialPage = location.hash.substring(1) || "blog";
  loadPage(initialPage);
});
