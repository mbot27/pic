// =======================
// MENU TOGGLE FUNCTIONALITY
// =======================
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Abre o menu ao clicar no botão
menuBtn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full"); // Remove a classe que esconde o menu
  menu.classList.add("translate-x-0"); // Adiciona a classe que mostra o menu
  overlay.classList.remove("hidden"); // Exibe o overlay escuro no fundo
  menuBtn.setAttribute("aria-expanded", "true"); // Acessibilidade: indica que o menu está aberto
});

// Fecha o menu ao clicar no botão de fechar ou no overlay
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-full"); // Esconde o menu novamente
  overlay.classList.add("hidden"); // Esconde o overlay
  menuBtn.setAttribute("aria-expanded", "false"); // Acessibilidade: indica que o menu está fechado
}

// =======================
// SWIPER CAROUSEL CONFIGURATION
// =======================
var swiper = new Swiper(".multiple-slide-carousel", {
  loop: true, // Faz o carrossel rodar em loop infinito
  slidesPerView: 2, // Exibe 2 slides por vez (em telas grandes)
  spaceBetween: 20, // Espaçamento entre os slides
  centeredSlides: true, // Mantém os slides centralizados
  speed: 10000, // Velocidade da rotação do carrossel (muito lenta)
  autoplay: {
    delay: 0, // Nenhuma pausa entre as transições
    disableOnInteraction: false, // Continua rodando mesmo se o usuário interagir
  },
  freeMode: true, // Permite rolagem livre do carrossel sem travar em um slide específico
  preloadImages: true,
  lazy: false, // Carrega todas as imagens imediatamente
  loopAdditionalSlides: 2, // Mantém 2 slides extras carregados para um loop mais suave
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  breakpoints: {
    1920: { slidesPerView: 2, spaceBetween: 10 }, // Configuração para telas grandes
    1028: { slidesPerView: 2, spaceBetween: 10 }, // Configuração para telas médias
    990: { slidesPerView: 1, spaceBetween: 0 }, // Em telas menores, mostra 1 slide por vez
  },
});

// =======================
// ACCORDION FUNCTIONALITY
// =======================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hs-accordion-toggle").forEach((button) => {
    const content = button.nextElementSibling; // Seleciona o conteúdo logo abaixo do botão
    button.setAttribute("aria-expanded", "false"); // Acessibilidade: inicia como fechado
    content.classList.add("hidden"); // Esconde o conteúdo do acordeão por padrão

    button.addEventListener("click", function () {
      const isOpen = this.getAttribute("aria-expanded") === "true";

      // Fecha todos os outros acordeões antes de abrir o clicado
      document.querySelectorAll(".hs-accordion-content").forEach((item) => {
        item.classList.add("hidden");
        item.previousElementSibling.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        this.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden"); // Exibe o conteúdo do acordeão clicado
      }
    });
  });
});
//FAQS
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  // Função para alternar os ícones e estados
  const toggleFaq = (item, isActive) => {
    const button = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");

    // Fecha todos os itens antes de abrir o clicado
    faqItems.forEach((el) => {
      el.classList.remove("active", "bg-[#42FD64]"); // Remove destaque
      el.classList.add("bg-[#333333]"); // Volta ao fundo padrão
      el.querySelector(".faq-toggle").classList.replace("text-black", "text-white");
      el.querySelector(".faq-content").classList.replace("text-black", "text-white");
      el.querySelector(".faq-content").classList.add("hidden"); // Esconde o conteúdo
      
    });

    if (!isActive) {
      item.classList.add("active", "bg-[#42FD64]"); // Destaca o item
      item.classList.remove("bg-[#333333]");
      button.classList.replace("text-white", "text-black");
      content.classList.replace("text-white", "text-black");
      content.classList.remove("hidden"); // Exibe o conteúdo
    }
  };

  // Aplica o evento de clique a cada FAQ
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-toggle");
    button.addEventListener("click", function () {
      const isActive = item.classList.contains("active");
      toggleFaq(item, isActive);
    });
  });

  // =======================
  // VISIBILITY ON SCROLL PARA OS ITENS DA FAQ
  // =======================
  const faqObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("faq-visible", entry.isIntersecting);
      entry.target.classList.toggle("faq-hidden", !entry.isIntersecting);
    });
  }, { threshold: 0.1 }); 

  faqItems.forEach((item) => faqObserver.observe(item));

  // =======================
  // VISIBILITY ON SCROLL PARA O TÍTULO
  // =======================
  const faqTitle = document.querySelector(".faq-title");

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("faq-title-visible", entry.isIntersecting);
      entry.target.classList.toggle("faq-title-hidden", !entry.isIntersecting);
    });
  }, { threshold: 0.1 }); 

  if (faqTitle) {
    titleObserver.observe(faqTitle); // Observa o título separadamente
  }
});

// =======================
// ABOUT SECTION VISIBILITY ON SCROLL
// =======================
document.addEventListener("DOMContentLoaded", function () {
  const featureSections = document.querySelectorAll(".about-feature-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("about-visible", entry.isIntersecting);
        entry.target.classList.toggle("about-hidden", !entry.isIntersecting);
      });
    },
    { threshold: 0.1 } // O efeito é ativado quando 70% do elemento está visível
  );

  featureSections.forEach((section) => observer.observe(section));
});

const scrollButton = document.getElementById("scroll-btn");
const buttonPath = document.getElementById("button-path");

// Função para rolar até o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Função para rolar até o fundo
function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
}

// Função para verificar se estamos no topo
function isAtTop() {
  return window.scrollY === 0; // Verifica se a posição do scroll é 0
}

// Função para verificar se estamos no fundo
function isAtBottom() {
  return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight; // Verifica se estamos no fundo
}

// Função para alternar entre rolar para o topo e para o fundo
function toggleScroll() {
  if (isAtBottom()) {
    scrollToTop();
    buttonPath.setAttribute("d", "M4 10l4 4-4 4m12-12l-4 4 4 4"); // Seta para cima
  } else {
    scrollToBottom();
    buttonPath.setAttribute("d", "M12 4v16m8-8H4"); // Seta para baixo
  }
}

// Função para atualizar o ícone do botão conforme o estado do scroll
function updateButtonIcon() {
  if (isAtTop()) {
    buttonPath.setAttribute("d", "M12 4v16m8-8H4"); // Seta para baixo
  } else if (isAtBottom()) {
    buttonPath.setAttribute("d", "M4 10l4 4-4 4m12-12l-4 4 4 4"); // Seta para cima
  }
}

// Adiciona evento de clique no botão
scrollButton.addEventListener("click", toggleScroll);

// Verifica o estado do scroll sempre que o usuário rolar
window.addEventListener("scroll", updateButtonIcon);

// Inicializa o estado do botão ao carregar a página
updateButtonIcon();
