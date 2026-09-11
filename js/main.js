// Executech Interiors — site interactions
(function () {
  "use strict";

  // Header background on scroll
  var header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");
  menuToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Reveal-on-scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (front-end only — wire up to a form backend, see README)
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      note.hidden = false;
      form.reset();
    });
  }
})();
