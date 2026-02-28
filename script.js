// ===== CONFIGURAÇÃO CENTRAL =====
const WHATSAPP_NUMBER = "5516992752424";
const WHATSAPP_MESSAGE = "Ol%C3%A1%2C+gostaria+de+saber+um+pouco+mais+sobre+a+terapia.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Aplica URL centralizada em todos os links de WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.href = WHATSAPP_URL;
    if (!link.getAttribute("rel")) {
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

// ===== GA4 – função auxiliar =====
function sendGAEvent(eventName, params) {
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  } else {
    console.log("gtag ainda não carregou:", eventName, params);
  }
}

// Menu mobile
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    mobileMenu?.classList.remove("show");
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Animações de scroll (inclui reveal-up)
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.80;

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("show");
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ---- GA4: cliques em WhatsApp ----
  document.querySelectorAll('a[data-ga-click="whatsapp"]').forEach(link => {
    link.addEventListener("click", () => {
      const section = link.closest("section");
      sendGAEvent("whatsapp_click", {
        button_location: link.dataset.gaLocation || "",
        page_section: section ? section.id : "none"
      });
    });
  });

  // ---- GA4: cliques em Instagram ----
  document.querySelectorAll('a[data-ga-click="instagram"]').forEach(link => {
    link.addEventListener("click", () => {
      const section = link.closest("section");
      sendGAEvent("instagram_click", {
        button_location: link.dataset.gaLocation || "",
        page_section: section ? section.id : "none"
      });
    });
  });

  // ---- GA4: cliques no menu (desktop + mobile) ----
  document
    .querySelectorAll('.nav-links a[href^="#"], .nav-links-mobile a[href^="#"]')
    .forEach(link => {
      link.addEventListener("click", () => {
        const item = link.textContent.trim();
        const menuType = link.closest(".nav-links-mobile") ? "mobile" : "desktop";
        sendGAEvent("menu_click", {
          menu_item: item,
          menu_type: menuType
        });
      });
    });


});

// FAQ (Dúvidas) - abre/fecha respostas com acessibilidade
const faqButtons = document.querySelectorAll(".faq-question-btn");

faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const alreadyOpen = btn.classList.contains("open");

    // fecha tudo
    faqButtons.forEach((b) => {
      b.classList.remove("open");
      b.setAttribute("aria-expanded", "false");
      const ans = b.nextElementSibling;
      if (ans && ans.classList.contains("faq-answer")) {
        ans.classList.remove("open");
        ans.style.maxHeight = null;
        const icon = b.querySelector(".faq-icon");
        if (icon) icon.textContent = "+";
      }
    });

    // se o clicado não estava aberto, abre
    if (!alreadyOpen) {
      btn.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      const answer = btn.nextElementSibling;
      if (answer && answer.classList.contains("faq-answer")) {
        answer.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        const icon = btn.querySelector(".faq-icon");
        if (icon) icon.textContent = "–";
      }
    }
  });
});

// Recalcula altura das respostas abertas ao redimensionar
window.addEventListener("resize", () => {
  document.querySelectorAll(".faq-answer.open").forEach((ans) => {
    ans.style.maxHeight = ans.scrollHeight + "px";
  });
});
