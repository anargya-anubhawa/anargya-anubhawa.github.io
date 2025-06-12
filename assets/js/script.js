'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // element toggle function
  const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  // sidebar toggle
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  sidebarBtn?.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });

  // custom select
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  select?.addEventListener("click", function () {
    elementToggleFunc(this);
  });

  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }

  const filterItems = document.querySelectorAll("[data-filter-item]");
  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  };

  let lastClickedBtn = filterBtn[0];
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }

  // contact form
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // static nav (jika pakai section scrolling)
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      for (let i = 0; i < pages.length; i++) {
        if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    });
  }

  // === INIT TESTIMONIAL ===

  window.initTestimonials = function () {
    const items = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    if (!items.length || !modalContainer) return;

    const toggleModal = () => {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    items.forEach(item => {
      if (item.dataset.initialized) return;
      item.dataset.initialized = "true";

      item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        toggleModal();
      });
    });

    modalCloseBtn?.addEventListener("click", toggleModal);
    overlay?.addEventListener("click", toggleModal);
  };

// == INIT PORTFOLIO

window.initPortfolioFilter = function () {
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (!select || !selectItems.length || !filterItems.length) return;

  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  };

  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }

  let lastClickedBtn = filterBtn[0];
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn?.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
};


// == CERTIF

  window.initCertificatePopup = function () {
    const buttons = document.querySelectorAll(".btn-cert");
    const popup = document.getElementById("certificatePopup");
    const iframe = document.getElementById("certificateIframe");
    const img = document.getElementById("certificateImg");

    if (!popup || (!iframe && !img)) return;

    window.showCertificate = function (url) {
      if (url.toLowerCase().endsWith(".pdf")) {
        iframe.src = url;
        iframe.style.display = "block";
        img.style.display = "none";
      } else {
        img.src = url;
        img.style.display = "block";
        iframe.style.display = "none";
      }
      popup.classList.add("show");
    };

    window.hideCertificate = function () {
      popup.classList.remove("show");
      setTimeout(() => {
        iframe.src = "";
        img.src = "";
      }, 300);
    };

    buttons.forEach(btn => {
      if (!btn.dataset.initialized) {
        btn.dataset.initialized = "true";
        btn.addEventListener("click", () => {
          const url = btn.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];
          if (url) window.showCertificate(url);
        });
      }
    });
  };


   // == SHOW PRODUCT

window.initProductPopup = function () {
  const buttons = document.querySelectorAll(".btn-product");
  const popup = document.getElementById("productPopup");
  const iframe = document.getElementById("productIframe");
  const img = document.getElementById("productImg");
  const buttonContainer = document.getElementById("productButtons");

  if (!popup || !iframe || !img || !buttonContainer) return;

window.showProduct = function ({ link, skema1, skema2, gambar }) {
  // Reset display
  iframe.style.display = "none";
  img.style.display = "none";
  iframe.src = "";
  img.src = "";
  buttonContainer.innerHTML = "";

  if (link) {
    const linkBtn = document.createElement("button");
    linkBtn.textContent = "Visit Product Link";
    linkBtn.onclick = () => window.open(link, "_blank");
    buttonContainer.appendChild(linkBtn);
  }

  if (skema1) {
    const skemaBtn1 = document.createElement("button");
    skemaBtn1.textContent = "Show Skema 1";
    skemaBtn1.onclick = () => {
      if (skema1.endsWith(".pdf")) {
        iframe.src = skema1;
        iframe.style.display = "block";
        img.style.display = "none";
      } else {
        img.src = skema1;
        img.style.display = "block";
        iframe.style.display = "none";
      }
    };
    buttonContainer.appendChild(skemaBtn1);
  }

  if (skema2) {
    const skemaBtn2 = document.createElement("button");
    skemaBtn2.textContent = "Show Skema 2";
    skemaBtn2.onclick = () => {
      if (skema2.endsWith(".pdf")) {
        iframe.src = skema2;
        iframe.style.display = "block";
        img.style.display = "none";
      } else {
        img.src = skema2;
        img.style.display = "block";
        iframe.style.display = "none";
      }
    };
    buttonContainer.appendChild(skemaBtn2);
  }

  if (gambar) {
    const gambarBtn = document.createElement("button");
    gambarBtn.textContent = "Show Product Image";
    gambarBtn.onclick = () => {
      img.src = gambar;
      img.style.display = "block";
      iframe.style.display = "none";
    };
    buttonContainer.appendChild(gambarBtn);
  }

  popup.classList.add("show");
};

  window.hideProduct = function () {
    popup.classList.remove("show");
    setTimeout(() => {
      iframe.src = "";
      img.src = "";
    }, 300);
  };

  buttons.forEach(btn => {
    if (!btn.dataset.initialized) {
      btn.dataset.initialized = "true";
      btn.addEventListener("click", () => {
        const data = {
          link: btn.dataset.link,
          skema1: btn.dataset.skema1,
          skema2: btn.dataset.skema2,
          gambar: btn.dataset.gambar,
        };
        window.showProduct(data);
      });
    }
  });
};

  // === RE INIT ===

  window.reInitAll = function () {
    window.initTestimonials();
    window.initPortfolioFilter();
    window.initCertificatePopup();
    window.initLinkPopup?.();
    window.initProductPopup();
  };

});
