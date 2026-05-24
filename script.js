document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const targets = document.querySelectorAll(".section, .card, .module");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  targets.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Nav background on scroll
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? "rgba(255,255,255,0.1)"
      : "rgba(255,255,255,0.07)";
  });

  // Form submit handler
  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      const btn = form.querySelector("button[type=submit]");
      const action = form.getAttribute("action");

      // If Formspree endpoint isn't configured yet — show alert
      if (action.includes("ВАША_ФОРМА")) {
        e.preventDefault();
        alert("Форма пока не подключена. Настройте Formspree-эндпоинт в index.html.");
        return;
      }

      btn.textContent = "Отправляем…";
      btn.disabled = true;
    });
  }
});
