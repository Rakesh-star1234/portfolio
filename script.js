
/* ========================================
   Portfolio JavaScript
   ======================================== */

// 1. Typing animation
const typingElement = document.getElementById("typing-text");

const roles = [
  "Software Developer",
  "C++ & DSA Learner",
  "Python Programmer",
  "AI/ML Enthusiast",
  "Web Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  characterIndex += deleting ? -1 : 1;
  typingElement.textContent = currentRole.substring(0, characterIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && characterIndex === currentRole.length) {
    deleting = true;
    delay = 1300;
  } else if (deleting && characterIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }

  setTimeout(typeRole, delay);
}

if (typingElement) {
  typeRole();
}


// 2. Dark / Light theme toggle
const themeToggle = document.getElementById("theme-toggle");

function updateThemeButton() {
  if (!themeToggle) return;

  const isLight = document.body.classList.contains("light-mode");

  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    updateThemeButton();
  });

  updateThemeButton();
}


// 3. Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.textContent = "☰";
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}


// 4. Automatically update the footer year
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
