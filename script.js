const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("#year");
const revealItems = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

toggle.addEventListener("click", () => {
  const isOpen = toggle.classList.toggle("is-open");
  navLinks.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  toggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// ─── Social Section ────────────────────────────────────────────
const socialOverlay = document.getElementById("social-section");
const openSocialBtns = document.querySelectorAll("[data-open-social]");
const closeSocialBtn = document.querySelector("[data-close-social]");

let socialLang = "es";

const socialTranslations = {
  es: {
    title: "🚀 Únete a la Comunidad",
    papiTitle: "Papi Launcher",
    papiSub: "Servidor Oficial de Discord",
    papiBtn: "Unirse al Servidor de Discord",
    hmclTitle: "Chat de Grupo HMCL",
    hmclSub: "Foro / Grupo en Bilibili",
    hmclBtn: "Entrar al Chat de HMCL",
    copy: "Copiar Link",
    footer: "Haz clic en los botones para unirte directamente<br>o copia los enlaces para compartirlos.",
  },
  en: {
    title: "🚀 Join the Community",
    papiTitle: "Papi Launcher",
    papiSub: "Official Discord Server",
    papiBtn: "Join Discord Server",
    hmclTitle: "HMCL Group Chat",
    hmclSub: "Forum / Group on Bilibili",
    hmclBtn: "Enter HMCL Chat",
    copy: "Copy Link",
    footer: "Click the buttons to join directly<br>or copy the links to share them.",
  },
};

function actualizarSocial(lang) {
  socialLang = lang;
  const t = socialTranslations[lang];

  document.getElementById("s-title").innerHTML = t.title;
  document.getElementById("s-papi-title").textContent = t.papiTitle;
  document.getElementById("s-papi-sub").textContent = t.papiSub;
  document.getElementById("s-papi-btn").textContent = t.papiBtn;
  document.getElementById("s-hmcl-title").textContent = t.hmclTitle;
  document.getElementById("s-hmcl-sub").textContent = t.hmclSub;
  document.getElementById("s-hmcl-btn").textContent = t.hmclBtn;
  document.getElementById("s-copy1").innerHTML = "📋 " + t.copy;
  document.getElementById("s-copy2").innerHTML = "📋 " + t.copy;
  document.getElementById("s-footer").innerHTML = t.footer;

  document
    .getElementById("s-btn-es")
    .classList.toggle("active", lang === "es");
  document
    .getElementById("s-btn-en")
    .classList.toggle("active", lang === "en");
}

function socialIdioma(lang) {
  actualizarSocial(lang);
}

function copiarSocialLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    const toast = document.createElement("div");
    toast.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#22c55e;color:white;padding:12px 24px;border-radius:9999px;font-weight:600;z-index:200;";
    toast.textContent = socialLang === "es" ? "✅ Link copiado!" : "✅ Link copied!";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  });
}

function abrirSocial() {
  socialOverlay.classList.add("is-open");
  socialOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  actualizarSocial(socialLang);
}

function cerrarSocial() {
  socialOverlay.classList.remove("is-open");
  socialOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openSocialBtns.forEach((btn) => btn.addEventListener("click", (e) => {
  e.preventDefault();
  // close mobile nav if open
  toggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  abrirSocial();
}));

closeSocialBtn.addEventListener("click", cerrarSocial);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && socialOverlay.classList.contains("is-open")) {
    cerrarSocial();
  }
});

socialOverlay.addEventListener("click", (e) => {
  if (e.target === socialOverlay) cerrarSocial();
});
