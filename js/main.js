// Namu Legacy Schools — shared site behavior

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navCta = document.querySelector(".nav-cta");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(expanded));
      // Show/hide nav-cta in mobile menu
      if (navCta) {
        navCta.style.display = expanded ? "flex" : "none";
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (nav && nav.classList.contains("open")) {
      // If click is outside the nav, close it
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
        if (navCta) {
          navCta.style.display = "none";
        }
      }
    }
  });
  
  // Close mobile menu when a link is clicked (only on mobile)
  const navLinks = document.querySelectorAll(".nav-links a, .nav-cta a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Only close menu if it's actually open (mobile only)
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
        if (navCta) {
          navCta.style.display = "none";
        }
      }
    });
  });

  // Generic form "submission" handling.
  // NOTE: These forms are not wired to a backend yet — this is a
  // static site. Swap this handler out once the management webapp
  // (or a form service like Formspree) is ready to receive real
  // admissions applications and contact messages.
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const successBox = form.parentElement.querySelector(".form-success");
      if (successBox) {
        successBox.style.display = "block";
        successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      form.reset();
    });
  });

  // Footer year
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
