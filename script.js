// ─── Translation System ────────────────────────────────────────
const translations = {
  es: {
    // Navegación
    navDownload: "Descargar",
    navFeatures: "Características",
    navDocs: "Docs",
    navSocial: "Sociales",
    
    // Hero
    heroBadge: "Fork open-source de HMCL",
    heroDesc: "Un launcher de Minecraft moderno, hermoso y potente.<br>Fork open-source de HMCL con interfaz renovada, sistema de temas neón y contenedores inteligentes.",
    heroPill1: "🎮 Juega sin cuenta Microsoft",
    heroPill2: "🌙 Tema oscuro glassmorphism",
    heroPill3: "📦 Contenedores",
    downloadBtn: "Descargar",
    githubBtn: "GitHub",
    docsBtn: "Ver Documentación",
    
    // Java warning
    javaWarningTitle: "IMPORTANTE",
    javaWarningDesc: "Se necesita Java 11+ para abrir el launcher.",
    javaInstallBtn: "Instalar Java 11+ (.msi)",
    
    // Vista previa
    previewEyebrow: "Vista previa del Launcher",
    previewTitle: "Así se ve PapiLauncher",
    previewDesc: "Interfaz moderna, intuitiva y diseñada para que pases menos tiempo configurando y más tiempo jugando.",
    previewPill1: "⚡ Inicio rápido",
    previewPill2: "📦 Gestión de instancias",
    previewPill3: "📂 Sistema de contenedores",
    previewPill4: "🧩 Soporte para mods",
    
    // Descripción
    descEyebrow: "Acerca de PAPI LAUNCHER",
    descTitle: "Un fork con identidad propia",
    descText: 'PAPI LAUNCHER es un launcher de Minecraft de <strong>código abierto (GPL v3)</strong> basado en <strong>Hello Minecraft! Launcher (HMCL)</strong> creado por <strong>huangyuhui</strong>. Mantenido por <strong>endersan17</strong>, este fork se enfoca en:',
    descItem1: "🎨 Interfaz moderna con <strong>6 temas neón</strong> personalizables",
    descItem2: "📦 Sistema de <strong>contenedores</strong> para organizar mods, resource packs, shaders y mundos",
    descItem3: "🚀 Modo <strong>offline</strong> activado por defecto (sin registros)",
    descItem4: "🔄 <strong>Actualizaciones automáticas</strong> desde GitHub",
    descItem5: "🎮 <strong>Discord Rich Presence</strong> integrado",
    
    // Características
    featuresEyebrow: "Características",
    featuresTitle: "Todo lo que necesitas en un solo launcher",
    featuresDesc: "PAPI LAUNCHER incluye todo lo esencial para una experiencia Minecraft completa, sin publicidad, sin telemetría y con total transparencia.",
    
    // Arquitectura
    archEyebrow: "Arquitectura Técnica",
    archTitle: "Cómo está construido",
    
    // Actualizaciones
    updateEyebrow: "Desarrollo",
    updateTitle: "Novedades del desarrollo",
    
    // FAQ
    faqEyebrow: "FAQ",
    faqTitle: "Preguntas frecuentes",
    
    // Especificaciones
    specsEyebrow: "Especificaciones Técnicas",
    specsTitle: "Requisitos y Build",
    
    // Enlaces
    linksEyebrow: "Enlaces",
    linksTitle: "Conéctate con la comunidad",
    
    // Créditos
    creditsEyebrow: "Agradecimientos",
    creditsTitle: "Hecho gracias a",
    
    // Footer
    footerText: "Código abierto.",
    footerCredits: "<strong>endersan17</strong> (creador del fork) · <strong>huanghongxun</strong> (creador de HMCL)",
    
    // Social
    socialTitle: "🚀 Únete a la Comunidad",
    sPapiTitle: "Papi Launcher",
    sPapiSub: "Servidor Oficial de Discord",
    sPapiBtn: "Unirse al Servidor de Discord",
    sHmclTitle: "Chat de Grupo HMCL",
    sHmclSub: "Foro / Grupo en Bilibili",
    sHmclBtn: "Entrar al Chat de HMCL",
    sCopy: "📋 Copiar Link",
    sFooter: "Haz clic en los botones para unirte directamente<br>o copia los enlaces para compartirlos.",
    
    // Descargas
    downloadEyebrow: "Selecciona tu plataforma",
    downloadTitle: "Descargar PAPI LAUNCHER",
    downloadDesc: "Elige la versión que corresponde a tu sistema operativo.",
    dlWindowsTitle: "Windows",
    dlWindowsSub: "Ejecutable .exe",
    dlWindowsBtn: "Descargar .exe",
    dlLinuxMacTitle: "Linux / macOS",
    dlLinuxMacSub: "Script .sh",
    dlLinuxMacBtn: "Descargar .sh",
    dlJarTitle: "Global",
    dlJarSub: "Universal .jar (Java)",
    dlJarBtn: "Descargar .jar",
    downloadFooter: "¿No sabes cuál elegir? Si tienes Java instalado, el .jar funciona en cualquier sistema operativo.",
    
    // Docs - Guías
    docsDesc: "Bienvenido a la documentación de PAPI LAUNCHER, un launcher de Minecraft moderno, hermoso y potente basado en HMCL.",
    docsVerGuias: "Ver Guías",
    docsHmclHelp: "Documentación HMCL",
    docsIndex: "📑 Índice",
    docsPrimerosPasos: "Primeros Pasos",
    docsComienza: "Comienza con PAPI LAUNCHER",
    docsStep1Title: "Descarga",
    docsStep1Desc: "Descarga la última versión desde <a href=\"https://github.com/endersan17/papi-launcher/releases\" target=\"_blank\">GitHub Releases</a> — elige <strong>.jar</strong>, <strong>.exe</strong> o <strong>.sh</strong> según tu sistema operativo.",
    docsStep2Title: "Ejecuta",
    docsStep2Desc: "Ejecuta el <strong>.jar</strong> (requiere Java 11+), el <strong>.exe</strong> en Windows o el <strong>.sh</strong> en Linux/macOS.",
    docsStep3Title: "Juega",
    docsStep3Desc: "Crea una cuenta offline y ¡a jugar!",
    docsTutorialCuenta: "Crear una cuenta sin conexión",
    docsTutorialCuentaDesc: "Sigue estos pasos para crear una cuenta offline y empezar a jugar sin necesidad de registrarte.",
    docsTutorialCuentaStep1: "Accede a Cuentas",
    docsTutorialCuentaStep1Desc: "Haz clic en la sección <strong>Cuentas</strong> en el menú lateral izquierdo.",
    docsTutorialCuentaStep2: "Selecciona Sin conexión",
    docsTutorialCuentaStep2Desc: "Selecciona <strong>Añadir cuenta</strong> y elige la opción <strong>Sin conexión</strong>.",
    docsTutorialCuentaStep3: "Escribe tu nombre",
    docsTutorialCuentaStep3Desc: "Ingresa tu nombre de usuario (máximo 16 caracteres, solo letras, números y guiones bajos).",
    docsTutorialCuentaStep4: "¡Listo!",
    docsTutorialCuentaStep4Desc: "Haz clic en <strong>Iniciar sesión</strong> y disfruta.",
    docsTutorialDescargar: "Descargar Minecraft",
    docsTutorialDescargarDesc: "Instala el juego en un solo clic",
    docsTutorialDescargarStep1: "Ve a Descargar",
    docsTutorialDescargarStep1Desc: "Haz clic en <strong>Descargar</strong> en el menú lateral izquierdo.",
    docsTutorialDescargarStep2: "Elige una versión",
    docsTutorialDescargarStep2Desc: "Busca la versión de Minecraft que quieres instalar. Todas las versiones están disponibles.",
    docsTutorialDescargarStep3: "Descarga automática",
    docsTutorialDescargarStep3Desc: "Selecciona la versión y el launcher la descargará automáticamente. Una vez lista, haz clic en <strong>Jugar</strong>.",
    docsTutorialTemas: "Cambiar tema y apariencia",
    docsTutorialTemasDesc: "Personaliza el launcher con uno de los 6 temas neón disponibles.",
    docsTutorialTemasStep1: "Ve a Configuración",
    docsTutorialTemasStep1Desc: "Haz clic en <strong>Configuración</strong> en el menú lateral izquierdo.",
    docsTutorialTemasStep2: "Configuración Global",
    docsTutorialTemasStep2Desc: "Explora las opciones de <strong>Configuración Global</strong> como Java, memoria y resolución de ventana.",
    docsTutorialTemasStep3: "Entra en Apariencia",
    docsTutorialTemasStep3Desc: "Haz clic en <strong>Apariencia</strong> para ver los temas disponibles.",
    docsTutorialTemasStep4: "Selecciona tu tema",
    docsTutorialTemasStep4Desc: "Elige entre Void Green, Blue Launcher, Cyan Pulse, Electric Purple, Magenta Glow o Acid Lime.",
    docsTutorialTemasStep5: "¡Tema aplicado!",
    docsTutorialTemasStep5Desc: "Así se ve el launcher con el tema aplicado.",
    docsContenedores: "Sistema de Contenedores",
    docsContenedoresDesc: "Organiza tu contenido de Minecraft",
    docsContenedoresCard1: "Crear un Contenedor",
    docsContenedoresCard1Desc: "Haz clic en 'Crear Contenedor', asigna un nombre y descripción, selecciona la versión de Minecraft, agrega mods, resource packs, shaders o mundos.",
    docsContenedoresCard2: "Gestión de Contenido",
    docsContenedoresCard2Desc: "Mods, Resource Packs con validación automática de pack.mcmeta, Shader Packs y Mundos: todo organizado en un solo lugar.",
    docsContenedoresCard3: "Perfiles de Lanzamiento",
    docsContenedoresCard3Desc: "Cada contenedor puede tener su propio perfil con versión específica, argumentos JVM, resolución, memoria máxima/mínima e IP de servidor.",
    docsMods: "Instalar Mods",
    docsModsDesc: "Añade mods fácilmente",
    docsModsCard1: "Elige un Modloader",
    docsModsCard1Desc: "Selecciona Forge, Fabric o NeoForge al crear un contenedor o perfil. El launcher descargará el modloader automáticamente.",
    docsModsCard2: "Agrega tus Mods",
    docsModsCard2Desc: "Coloca los archivos .jar en la carpeta de mods de tu contenedor, o usa la opción 'Agregar Mod' desde el launcher.",
    docsModsCard3: "Importa Modpacks",
    docsModsCard3Desc: "Soporta importación de modpacks desde CurseForge (.zip), Modrinth (.mrpack) y MultiMC.",
    docsTemas: "Sistema de Temas",
    docsTemasDesc: "6 temas neón con glassmorphism",
    docsTemasNote: "Opacidad del fondo ajustable, imagen de fondo personalizada (local o URL) y fondo por tema. CSS personalizado próximamente.",
    docsCssLayers: "6 capas del sistema de temas",
    docsActualizaciones: "Canales de actualización",
    docsActualizacionesStable: "Recomendado",
    docsActualizacionesStableDesc: "Versiones estables para uso diario.",
    docsActualizacionesBeta: "Experimental",
    docsActualizacionesBetaDesc: "Funciones experimentales antes del lanzamiento estable.",
    docsActualizacionesNightly: "Inestable",
    docsActualizacionesNightlyDesc: "Versión más reciente, puede ser inestable.",
    docsModpacks: "Importación y Exportación",
    docsModpacksImport: "Importar",
    docsModpacksImportDesc: "Desde archivo (.zip / .mrpack) o desde un modpack ya instalado. Soporta: CurseForge, Modrinth, MultiMC.",
    docsModpacksExport: "Exportar",
    docsModpacksExportDesc: "Exporta tu contenedor como archivo .mrpack incluyendo nombre, versión y autor.",
    docsCuentas: "Modos de inicio de sesión",
    docsCuentasOffline: "Offline — Recomendado",
    docsCuentasOfflineDesc: "Crea una cuenta con cualquier nickname. No requiere registro. Activado por defecto.",
    docsCuentasMicrosoft: "Microsoft — Próximamente",
    docsCuentasMicrosoftDesc: "Soporte para cuentas Microsoft en desarrollo.",
    docsPlataformas: "Plataformas compatibles",
    docsPlataformasTitle: "Compatibilidad",
  },
  en: {
    // Navigation
    navDownload: "Download",
    navFeatures: "Features",
    navDocs: "Docs",
    navSocial: "Social",
    
    // Hero
    heroBadge: "Open-source fork of HMCL",
    heroDesc: "A modern, beautiful and powerful Minecraft launcher.<br>Open-source fork of HMCL with a renewed interface, neon theme system and smart containers.",
    heroPill1: "🎮 Play without Microsoft account",
    heroPill2: "🌙 Dark glassmorphism theme",
    heroPill3: "📦 Containers",
    downloadBtn: "Download",
    githubBtn: "GitHub",
    docsBtn: "View Documentation",
    
    // Java warning
    javaWarningTitle: "IMPORTANT",
    javaWarningDesc: "Java 11+ is required to open the launcher.",
    javaInstallBtn: "Install Java 11+ (.msi)",
    
    // Preview
    previewEyebrow: "Launcher Preview",
    previewTitle: "This is PapiLauncher",
    previewDesc: "Modern, intuitive interface designed so you spend less time configuring and more time playing.",
    previewPill1: "⚡ Fast startup",
    previewPill2: "📦 Instance management",
    previewPill3: "📂 Container system",
    previewPill4: "🧩 Mod support",
    
    // Description
    descEyebrow: "About PAPI LAUNCHER",
    descTitle: "A fork with its own identity",
    descText: 'PAPI LAUNCHER is an <strong>open-source (GPL v3)</strong> Minecraft launcher based on <strong>Hello Minecraft! Launcher (HMCL)</strong> created by <strong>huangyuhui</strong>. Maintained by <strong>endersan17</strong>, this fork focuses on:',
    descItem1: "🎨 Modern interface with <strong>6 neon themes</strong> customizable",
    descItem2: "📦 <strong>Container</strong> system to organize mods, resource packs, shaders and worlds",
    descItem3: "🚀 <strong>Offline</strong> mode enabled by default (no registration)",
    descItem4: "🔄 <strong>Automatic updates</strong> from GitHub",
    descItem5: "🎮 <strong>Discord Rich Presence</strong> integrated",
    
    // Features
    featuresEyebrow: "Features",
    featuresTitle: "Everything you need in one launcher",
    featuresDesc: "PAPI LAUNCHER includes everything essential for a complete Minecraft experience, no ads, no telemetry and total transparency.",
    
    // Architecture
    archEyebrow: "Technical Architecture",
    archTitle: "How it's built",
    
    // Updates
    updateEyebrow: "Development",
    updateTitle: "Development news",
    
    // FAQ
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    
    // Specifications
    specsEyebrow: "Technical Specifications",
    specsTitle: "Requirements and Build",
    
    // Links
    linksEyebrow: "Links",
    linksTitle: "Connect with the community",
    
    // Credits
    creditsEyebrow: "Credits",
    creditsTitle: "Made possible by",
    
    // Footer
    footerText: "Open-source.",
    footerCredits: "<strong>endersan17</strong> (fork creator) · <strong>huanghongxun</strong> (HMCL creator)",
    
    // Social
    socialTitle: "🚀 Join the Community",
    sPapiTitle: "Papi Launcher",
    sPapiSub: "Official Discord Server",
    sPapiBtn: "Join Discord Server",
    sHmclTitle: "HMCL Group Chat",
    sHmclSub: "Forum / Group on Bilibili",
    sHmclBtn: "Enter HMCL Chat",
    sCopy: "📋 Copy Link",
    sFooter: "Click the buttons to join directly<br>or copy the links to share them.",
    
    // Downloads
    downloadEyebrow: "Select your platform",
    downloadTitle: "Download PAPI LAUNCHER",
    downloadDesc: "Choose the version that matches your operating system.",
    dlWindowsTitle: "Windows",
    dlWindowsSub: ".exe Executable",
    dlWindowsBtn: "Download .exe",
    dlLinuxMacTitle: "Linux / macOS",
    dlLinuxMacSub: ".sh Script",
    dlLinuxMacBtn: "Download .sh",
    dlJarTitle: "Global",
    dlJarSub: "Universal .jar (Java)",
    dlJarBtn: "Download .jar",
    downloadFooter: "Not sure which to pick? If you have Java installed, the .jar works on any operating system.",
    
    // Docs - Guides
    docsDesc: "Welcome to the PAPI LAUNCHER documentation, a modern, beautiful and powerful Minecraft launcher based on HMCL.",
    docsVerGuias: "View Guides",
    docsHmclHelp: "HMCL Documentation",
    docsIndex: "📑 Index",
    docsPrimerosPasos: "Getting Started",
    docsComienza: "Get started with PAPI LAUNCHER",
    docsStep1Title: "Download",
    docsStep1Desc: "Download the latest version from <a href=\"https://github.com/endersan17/papi-launcher/releases\" target=\"_blank\">GitHub Releases</a> — choose <strong>.jar</strong>, <strong>.exe</strong> or <strong>.sh</strong> according to your operating system.",
    docsStep2Title: "Run",
    docsStep2Desc: "Run the <strong>.jar</strong> (requires Java 11+), the <strong>.exe</strong> on Windows or the <strong>.sh</strong> on Linux/macOS.",
    docsStep3Title: "Play",
    docsStep3Desc: "Create an offline account and start playing!",
    docsTutorialCuenta: "Create an offline account",
    docsTutorialCuentaDesc: "Follow these steps to create an offline account and start playing without registration.",
    docsTutorialCuentaStep1: "Go to Accounts",
    docsTutorialCuentaStep1Desc: "Click on <strong>Accounts</strong> in the left sidebar menu.",
    docsTutorialCuentaStep2: "Select Offline",
    docsTutorialCuentaStep2Desc: "Select <strong>Add account</strong> and choose the <strong>Offline</strong> option.",
    docsTutorialCuentaStep3: "Enter your name",
    docsTutorialCuentaStep3Desc: "Enter your username (max 16 characters, only letters, numbers and underscores).",
    docsTutorialCuentaStep4: "Ready!",
    docsTutorialCuentaStep4Desc: "Click <strong>Login</strong> and enjoy.",
    docsTutorialDescargar: "Download Minecraft",
    docsTutorialDescargarDesc: "Install the game with one click",
    docsTutorialDescargarStep1: "Go to Download",
    docsTutorialDescargarStep1Desc: "Click on <strong>Download</strong> in the left sidebar menu.",
    docsTutorialDescargarStep2: "Choose a version",
    docsTutorialDescargarStep2Desc: "Browse the Minecraft version you want to install. All versions are available.",
    docsTutorialDescargarStep3: "Automatic download",
    docsTutorialDescargarStep3Desc: "Select the version and the launcher will download it automatically. Once ready, click <strong>Play</strong>.",
    docsTutorialTemas: "Change theme and appearance",
    docsTutorialTemasDesc: "Customize the launcher with one of the 6 available neon themes.",
    docsTutorialTemasStep1: "Go to Settings",
    docsTutorialTemasStep1Desc: "Click on <strong>Settings</strong> in the left sidebar menu.",
    docsTutorialTemasStep2: "Global Settings",
    docsTutorialTemasStep2Desc: "Explore the <strong>Global Settings</strong> options like Java, memory and window resolution.",
    docsTutorialTemasStep3: "Go to Appearance",
    docsTutorialTemasStep3Desc: "Click on <strong>Appearance</strong> to see the available themes.",
    docsTutorialTemasStep4: "Select your theme",
    docsTutorialTemasStep4Desc: "Choose between Void Green, Blue Launcher, Cyan Pulse, Electric Purple, Magenta Glow or Acid Lime.",
    docsTutorialTemasStep5: "Theme applied!",
    docsTutorialTemasStep5Desc: "This is how the launcher looks with the theme applied.",
    docsContenedores: "Container System",
    docsContenedoresDesc: "Organize your Minecraft content",
    docsContenedoresCard1: "Create a Container",
    docsContenedoresCard1Desc: "Click 'Create Container', assign a name and description, select the Minecraft version, add mods, resource packs, shaders or worlds.",
    docsContenedoresCard2: "Content Management",
    docsContenedoresCard2Desc: "Mods, Resource Packs with automatic pack.mcmeta validation, Shader Packs and Worlds: all organized in one place.",
    docsContenedoresCard3: "Launch Profiles",
    docsContenedoresCard3Desc: "Each container can have its own profile with specific version, JVM arguments, resolution, max/min memory and server IP.",
    docsMods: "Install Mods",
    docsModsDesc: "Add mods easily",
    docsModsCard1: "Choose a Modloader",
    docsModsCard1Desc: "Select Forge, Fabric or NeoForge when creating a container or profile. The launcher will download the modloader automatically.",
    docsModsCard2: "Add your Mods",
    docsModsCard2Desc: "Place the .jar files in your container's mods folder, or use the 'Add Mod' option from the launcher.",
    docsModsCard3: "Import Modpacks",
    docsModsCard3Desc: "Supports importing modpacks from CurseForge (.zip), Modrinth (.mrpack) and MultiMC.",
    docsTemas: "Theme System",
    docsTemasDesc: "6 neon themes with glassmorphism",
    docsTemasNote: "Adjustable background opacity, custom background image (local or URL) and per-theme background. Custom CSS coming soon.",
    docsCssLayers: "6 layers of the theme system",
    docsActualizaciones: "Update channels",
    docsActualizacionesStable: "Recommended",
    docsActualizacionesStableDesc: "Stable versions for daily use.",
    docsActualizacionesBeta: "Experimental",
    docsActualizacionesBetaDesc: "Experimental features before stable release.",
    docsActualizacionesNightly: "Unstable",
    docsActualizacionesNightlyDesc: "Latest version, may be unstable.",
    docsModpacks: "Import and Export",
    docsModpacksImport: "Import",
    docsModpacksImportDesc: "From file (.zip / .mrpack) or from an already installed modpack. Supports: CurseForge, Modrinth, MultiMC.",
    docsModpacksExport: "Export",
    docsModpacksExportDesc: "Export your container as a .mrpack file including name, version and author.",
    docsCuentas: "Login modes",
    docsCuentasOffline: "Offline — Recommended",
    docsCuentasOfflineDesc: "Create an account with any nickname. No registration required. Enabled by default.",
    docsCuentasMicrosoft: "Microsoft — Coming soon",
    docsCuentasMicrosoftDesc: "Support for Microsoft accounts in development.",
    docsPlataformas: "Supported platforms",
    docsPlataformasTitle: "Compatibility",
  }
};

let lang = "es";

function detectLanguage() {
  const saved = localStorage.getItem("papi-launcher-lang");
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith("en") ? "en" : "es";
}

function applyLanguage(l) {
  lang = l;
  localStorage.setItem("papi-launcher-lang", l);

  document.getElementById("lang-code").textContent = l === "es" ? "ES" : "EN";

  const t = translations[l];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

lang = detectLanguage();

// ─── Main Page ─────────────────────────────────────────────────
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("#year");
const revealItems = document.querySelectorAll(".reveal");

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  applyLanguage(lang === "es" ? "en" : "es");
});

applyLanguage(lang);

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

// ─── Download Modal ────────────────────────────────────────────
const downloadOverlay = document.getElementById("download-section");
const openDownloadBtns = document.querySelectorAll("[data-open-download]");
const closeDownloadBtn = document.querySelector("[data-close-download]");

function abrirDescargas() {
  downloadOverlay.classList.add("is-open");
  downloadOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarDescargas() {
  downloadOverlay.classList.remove("is-open");
  downloadOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openDownloadBtns.forEach((btn) => btn.addEventListener("click", (e) => {
  e.preventDefault();
  toggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  abrirDescargas();
}));

closeDownloadBtn.addEventListener("click", cerrarDescargas);

downloadOverlay.addEventListener("click", (e) => {
  if (e.target === downloadOverlay) cerrarDescargas();
});

// ─── Social Section ────────────────────────────────────────────
const socialOverlay = document.getElementById("social-section");
const openSocialBtns = document.querySelectorAll("[data-open-social]");
const closeSocialBtn = document.querySelector("[data-close-social]");

function copiarSocialLink(link) {
  navigator.clipboard.writeText(link).then(() => {
    const toast = document.createElement("div");
    toast.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#22c55e;color:white;padding:12px 24px;border-radius:9999px;font-weight:600;z-index:200;";
    toast.textContent = lang === "es" ? "✅ Link copiado!" : "✅ Link copied!";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  });
}

function abrirSocial() {
  socialOverlay.classList.add("is-open");
  socialOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarSocial() {
  socialOverlay.classList.remove("is-open");
  socialOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openSocialBtns.forEach((btn) => btn.addEventListener("click", (e) => {
  e.preventDefault();
  toggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  abrirSocial();
}));

closeSocialBtn.addEventListener("click", cerrarSocial);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (downloadOverlay.classList.contains("is-open")) cerrarDescargas();
    if (socialOverlay.classList.contains("is-open")) cerrarSocial();
    if (docsOverlay.classList.contains("is-open")) cerrarDocs();
  }
});

socialOverlay.addEventListener("click", (e) => {
  if (e.target === socialOverlay) cerrarSocial();
});

// ─── Docs Section ──────────────────────────────────────────────
const docsOverlay = document.getElementById("docs-section");
const openDocsBtns = document.querySelectorAll("[data-open-docs]");
const closeDocsBtn = document.querySelector("[data-close-docs]");

function abrirDocs() {
  docsOverlay.classList.add("is-open");
  docsOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const docsReveal = docsOverlay.querySelectorAll(".reveal");
  const docsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          docsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  docsReveal.forEach((item) => docsObserver.observe(item));
}

function cerrarDocs() {
  docsOverlay.classList.remove("is-open");
  docsOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openDocsBtns.forEach((btn) => btn.addEventListener("click", (e) => {
  e.preventDefault();
  toggle.classList.remove("is-open");
  navLinks.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  abrirDocs();
}));

closeDocsBtn.addEventListener("click", cerrarDocs);

docsOverlay.addEventListener("click", (e) => {
  if (e.target === docsOverlay) cerrarDocs();
});

document.querySelector("[data-scroll-guias]")?.addEventListener("click", (e) => {
  e.preventDefault();
  scrollDocsTo("guias");
});

docsOverlay.querySelectorAll(".docs-index-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").slice(1);
    scrollDocsTo(id);
  });
});

function scrollDocsTo(id) {
  const target = document.getElementById(id);
  if (target && docsOverlay.contains(target)) {
    const top = target.getBoundingClientRect().top + docsOverlay.scrollTop - 20;
    docsOverlay.scrollTo({ top, behavior: "smooth" });
  }
}