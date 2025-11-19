// Basic behavior: dropdown and mobile menu toggle + simple form handler
(function () {
    // Dropdown (both nav instances)
    document.querySelectorAll(".dropdown").forEach((dd) => {
      const btn = dd.querySelector(".drop-btn");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        dd.classList.toggle("open");
        const expanded = dd.classList.contains("open");
        btn.setAttribute("aria-expanded", expanded);
      });
    });
  
    // Close dropdown when click outside
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".dropdown").forEach((dd) => {
        if (!dd.contains(e.target)) {
          dd.classList.remove("open");
          const btn = dd.querySelector(".drop-btn");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  
    // Mobile toggle: show/hide .menu by toggling class .open
// NAV: mobile toggle + dropdown accessibility
(function(){
    // mobile toggle — toggle .open on .menu
    document.querySelectorAll('.mobile-toggle').forEach(btn=>{
      btn.addEventListener('click', function(e){
        const nav = btn.closest('.nav');
        const menu = nav.querySelector('.menu');
        if(!menu) return;
        const opened = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
        // if opened, lock body scroll on mobile
        if(opened) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
      });
    });
  
    // dropdowns: toggle panel inside centered menu
    document.querySelectorAll('.dropdown').forEach(dd=>{
      const btn = dd.querySelector('.drop-btn');
      const panel = dd.querySelector('.drop-panel');
      if(!btn || !panel) return;
      btn.addEventListener('click', (ev)=>{
        ev.stopPropagation();
        dd.classList.toggle('open');
        btn.setAttribute('aria-expanded', dd.classList.contains('open') ? 'true' : 'false');
      });
    });
  
    // close dropdown or mobile menu when clicking outside
    document.addEventListener('click', (e)=>{
      // close any open dropdown
      document.querySelectorAll('.dropdown.open').forEach(dd=>{
        if(!dd.contains(e.target)) dd.classList.remove('open');
      });
      // close mobile menu if clicking outside it (on small screens)
      document.querySelectorAll('.menu.open').forEach(menu=>{
        const parentNav = menu.closest('.nav');
        if(parentNav && !parentNav.contains(e.target)){
          menu.classList.remove('open');
          const btn = parentNav.querySelector('.mobile-toggle');
          if(btn) btn.setAttribute('aria-expanded','false');
          document.body.style.overflow = '';
        }
      });
    });
  
    // Simple contact form handler (no backend) — show alert and reset
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert(
          "Terima kasih! Pesanmu telah diterima. (ini demo, belum ada backend)"
        );
        form.reset();
      });
    }
  })();
  