// Main UI script: mobile menu, dropdown, form handler
(function () {
  /* ---------------------------------------
     DROPDOWN (Desktop)
  --------------------------------------- */
  document.querySelectorAll(".dropdown").forEach((dd) => {
    const btn = dd.querySelector(".drop-btn");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dd.classList.toggle("open");
      const expanded = dd.classList.contains("open");
      btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown.open").forEach((dd) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        const btn = dd.querySelector(".drop-btn");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ---------------------------------------
     MOBILE MENU TOGGLE
  --------------------------------------- */
  document.querySelectorAll(".mobile-toggle").forEach((btn) => {
    btn.addEventListener("click", function () {
      const nav = btn.closest(".nav");
      const menu = nav.querySelector(".menu");
      if (!menu) return;

      const opened = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", opened ? "true" : "false");

      // lock body scroll when open
      document.body.style.overflow = opened ? "hidden" : "";
    });
  });

  // Close mobile menu if clicking outside the nav
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".menu.open").forEach((menu) => {
      const nav = menu.closest(".nav");
      if (!nav.contains(e.target)) {
        menu.classList.remove("open");
        const btn = nav.querySelector(".mobile-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  });

  // Close mobile menu on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    document.querySelectorAll(".menu.open").forEach((menu) => {
      menu.classList.remove("open");
      const nav = menu.closest(".nav");
      const btn = nav.querySelector(".mobile-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });

    // also close dropdowns
    document.querySelectorAll(".dropdown.open").forEach((dd) => {
      dd.classList.remove("open");
      const btn = dd.querySelector(".drop-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------
     SIMPLE CONTACT FORM HANDLER
  --------------------------------------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih! Pesanmu telah diterima. (Demo — belum ada backend)");
      form.reset();
    });
  }
})();
