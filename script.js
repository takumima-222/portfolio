function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements["email"].value.trim();

    if (isValidEmail(email)) {
      message.textContent = "送信しました。ありがとうございます。";
    } else {
      message.textContent = "メールアドレスの形式が正しくありません。";
    }
  });
}

function initWorksTabs() {
  const tabs = document.querySelectorAll(".work-tab");
  const cards = document.querySelectorAll(".work-card");
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initNavToggle();
    initContactForm();
    initWorksTabs();
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { isValidEmail };
}
