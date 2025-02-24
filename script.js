// =======================
// MENU TOGGLE FUNCTIONALITY
// =======================
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    if (menuBtn && window.getComputedStyle(menuBtn).display !== 'none') {
        menuBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        overlay.addEventListener("click", closeMenu);
    }

    function openMenu() {
        menu.classList.remove("translate-x-full");
        menu.classList.add("translate-x-0");
        overlay.classList.remove("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

// =======================
// ACCORDION FUNCTIONALITY
// =======================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hs-accordion-toggle").forEach((button) => {
    const content = button.nextElementSibling;
    button.setAttribute("aria-expanded", "false");
    content.classList.add("hidden");

    button.addEventListener("click", function () {
      const isOpen = this.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".hs-accordion-content").forEach((item) => {
        item.classList.add("hidden");
        item.previousElementSibling.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        this.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden");
      }
    });
  });
});

// =======================
// FAQ FUNCTIONALITY
// =======================
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  function toggleFaq(item, isActive) {
    const button = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    faqItems.forEach((el) => {
      el.classList.remove("active", "bg-cyan-500");
      el.classList.add("bg-cyan-600");
      el.querySelector(".faq-toggle").classList.replace("text-black", "text-white");
      el.querySelector(".faq-content").classList.replace("text-black", "text-white");
      el.querySelector(".faq-content").classList.add("hidden");
    });
    if (!isActive) {
      item.classList.add("active", "bg-cyan-500");
      item.classList.remove("bg-cyan-600");
      button.classList.replace("text-white", "text-gray-100");
      content.classList.replace("text-white", "text-gray-100");
      content.classList.remove("hidden");
    }
  }

  faqItems.forEach((item) => {
    item.querySelector(".faq-toggle").addEventListener("click", function () {
      toggleFaq(item, item.classList.contains("active"));
    });
  });
});

// =======================
// VISIBILITY ON SCROLL
// =======================
function setupIntersectionObserver(selector, visibleClass, hiddenClass) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(visibleClass, entry.isIntersecting);
      entry.target.classList.toggle(hiddenClass, !entry.isIntersecting);
    });
  }, { threshold: 0.1 });
  elements.forEach((el) => observer.observe(el));
}

setupIntersectionObserver(".faq-item", "faq-visible", "faq-hidden");
setupIntersectionObserver(".faq-title", "faq-title-visible", "faq-title-hidden");
setupIntersectionObserver(".about-feature-section", "about-visible", "about-hidden");



document.getElementById("scroll-btn").addEventListener("click", function () {
  const arrow = document.getElementById("arrow-icon");

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      arrow.classList.remove("rotate-180");
  } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      arrow.classList.add("rotate-180");
  }
});

window.addEventListener("scroll", function () {
  const arrow = document.getElementById("arrow-icon");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
      arrow.classList.add("rotate-180");
  } else {
      arrow.classList.remove("rotate-180");
  }
});