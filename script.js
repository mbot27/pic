/*MENU*/
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
  menu.classList.add("translate-x-0");
  overlay.classList.remove("hidden");
  menuBtn.setAttribute("aria-expanded", "true");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
}

var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true, // Mantém os slides girando infinitamente
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true, // Centraliza os slides
  speed: 10000, // Ajusta a velocidade do slide
  autoplay: {
    delay: 0, // Remove qualquer delay entre os slides
    disableOnInteraction: false, // Permite interação sem interromper o autoplay
  },
  freeMode: true, // Permite um deslizar contínuo e fluido
  preloadImages: true, // Pré-carrega todas as imagens
  lazy: false, // Desativa carregamento lento para que os slides já estejam prontos
  loopAdditionalSlides: 2, // Garante que os próximos slides já estejam prontos
  watchSlidesProgress: true, // Melhora a visibilidade dos próximos slides
  watchSlidesVisibility: true, // Previne atraso ao exibir o próximo slide
  breakpoints: {
    1920: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    990: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});

/*FAQS*/
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
document.querySelectorAll('.faq-item').forEach(item => {
  const button = item.querySelector('.faq-toggle');
  const content = item.querySelector('.faq-content');

  button.addEventListener('click', function () {
    const isActive = item.classList.contains('active');

    // Fecha todos os outros itens antes de abrir um novo
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.classList.remove('bg-[#42FD64]');
      el.classList.add('bg-[#333333]');
      el.querySelector('.faq-toggle').classList.remove('text-black');
      el.querySelector('.faq-toggle').classList.add('text-white');
      el.querySelector('.faq-content').classList.add('hidden');
      el.querySelector('.faq-content').classList.remove('text-black');
      el.querySelector('.faq-content').classList.add('text-white');
    });

    // Se já estava ativo, apenas fecha, senão abre
    if (!isActive) {
      item.classList.add('active');
      item.classList.add('bg-[#42FD64]');
      item.classList.remove('bg-[#333333]');
      button.classList.add('text-black');
      button.classList.remove('text-white');
      content.classList.remove('hidden');
      content.classList.add('text-black');
      content.classList.remove('text-white');
    }
  });
});
// Seletor de FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
       
          entry.target.classList.add("faq-visible");
          entry.target.classList.remove("faq-hidden");
        } else {
        
          entry.target.classList.remove("faq-visible");
          entry.target.classList.add("faq-hidden");
        }
      });
    },
    { threshold: 0.7 } 
  );

  faqItems.forEach((item) => observer.observe(item)); // Observa todos os itens da FAQ
});



/*title faq*/
document.addEventListener("DOMContentLoaded", function () {
  // Selecionar o título da FAQ
  const faqTitle = document.querySelector(".faq-title");

  // Função de animação para o título
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        
          entry.target.classList.add("faq-title-visible");
          entry.target.classList.remove("faq-title-hidden");
        } else {
       
          entry.target.classList.remove("faq-title-visible");
          entry.target.classList.add("faq-title-hidden");
        }
      });
    },
    { threshold: 0.3} 
  );

  
  observer.observe(faqTitle);
});


/*about*/
document.addEventListener("DOMContentLoaded", function () {
  const featureSections = document.querySelectorAll(".about-feature-section");

  // Configuração do Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quando a seção entra na tela
          entry.target.classList.add("about-visible");
          entry.target.classList.remove("about-hidden");
        } else {
          // Quando a seção sai da tela
          entry.target.classList.remove("about-visible");
          entry.target.classList.add("about-hidden");
        }
      });
    },
    { threshold: 0.7 } // Ativa quando 30% da seção está visível
  );

  featureSections.forEach((section) => observer.observe(section)); // Observa todas as seções About e Features
});