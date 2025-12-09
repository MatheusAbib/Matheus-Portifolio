/**
* Template Name: Invent
* Template URL: https://bootstrapmade.com/invent-bootstrap-business-template/
* Updated: May 12 2025 with Bootstrap v5.3.6
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


// VERSÃO SIMPLES E DIRETA
document.addEventListener('DOMContentLoaded', function() {  
  // Criar modal
  const modal = document.createElement('div');
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.95);
    justify-content: center;
    align-items: center;
  `;
  modal.innerHTML = `
    <span style="
      position: absolute;
      top: 20px;
      right: 30px;
      color: white;
      font-size: 40px;
      cursor: pointer;
    " onclick="this.parentElement.style.display='none'; document.body.style.overflow='auto'">&times;</span>
    <img style="
      max-width: 90%;
      max-height: 90%;
      border-radius: 8px;
      box-shadow: 0 0 30px rgba(93,87,244,0.5);
    ">
  `;
  document.body.appendChild(modal);
  const modalImg = modal.querySelector('img');
  
  // Aplicar a todas as imagens dos certificados
  const images = document.querySelectorAll('.service-details img.img-fluid.rounded-4');
  
  images.forEach(img => {
    // Adicionar wrapper
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      cursor: pointer;
      display: block;
    `;
    
    // Inserir wrapper
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    
    // Adicionar efeito hover
    wrapper.onmouseenter = () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease';
    };
    wrapper.onmouseleave = () => {
      img.style.transform = 'scale(1)';
    };
    
    // Adicionar clique
    wrapper.onclick = () => {
      console.log('Abrindo:', img.src);
      modal.style.display = 'flex';
      modalImg.src = img.src;
      document.body.style.overflow = 'hidden';
    };
  });
  
  // Fechar ao clicar fora
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  
});


// Configuração das traduções
const translations = {
  pt: {
    // Menu
    menu_about: "Sobre mim",
    menu_methodologies: "Metodologias",
    menu_certificates: "Certificados",
    menu_services: "Serviços",
    menu_projects: "Projetos",
    menu_contact: "Contato",
    btn_translate: "PT/EN",
    
    // Hero Section
    hero_badge: "Inovação & Tecnologia",
    hero_title: "Bem-vindo!",
    hero_desc_1: "Sou um <strong>desenvolvedor web</strong> atuando com <strong>tecnologias front-end e back-end</strong>, focado em melhorar a experiência do usuário e funcionalidade dos sistemas.",
    hero_desc_2: "Atualmente curso Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de Mogi das Cruzes (FATEC-MC).",
    hero_desc_3: "Tenho habilidades em <strong>UI/UX Design, criação de protótipos, análise de requisitos, controle de qualidade, engenharia de software</strong>, além de <strong>visualização de dados com Power BI</strong> e domínio em <strong>Word, Excel, PowerPoint.</strong>",
    cv_button: "Download CV",
    photo_overlay: "Esse sou eu!",
    cv_portuguese: "Português (Brasil)",
    cv_english: "English",
    
    // Features
    feature_1_title: "Entusiasta de Tecnologia",
    feature_1_text: "Pronto para aplicar meus conhecimentos e colaborar para o crescimento da empresa.",
    feature_2_title: "Excelência Técnica",
    feature_2_text: "Foco em interfaces intuitivas, design responsivo e atenção aos detalhes para melhor experiência do usuário.",
    feature_3_title: "Comunicação em Equipe",
    feature_3_text: "Habilidade em trabalhar em equipe, ouvir ativamente e contribuir de forma produtiva.",
    
    // Metodologias
    methodologies_title: "Como eu trabalho",
    method_1_title: "Engenharia de Software",
    method_1_text: "Planejo e organizo cada etapa do projeto utilizando modelagem UML, metodologias ágeis, Kanban, controle de versões com Git e testes contínuos.",
    method_2_title: "Análise de Dados",
    method_2_text: "Estruturo as informações de maneira clara e organizada, utilizando ferramentas como Power BI e Excel para gerar insights estratégicos.",
    method_3_title: "Controle de Qualidade e Gestão de Produto",
    method_3_text: "Garanto que o produto atenda às necessidades exigidas, com testes, análise de requisitos e entrega de soluções de valor.",
    method_4_title: "Comunicação e Colaboração",
    method_4_text: "Priorizo comunicação clara, escuta ativa e colaboração, mesmo remotamente, sempre agindo com ética e responsabilidade.",
    
    // Certificados
    certificates_title: "Certificados",
    cert_powerbi: "Power BI",
    cert_webdev: "Web Development",
    cert_database: "Banco de dados",
    cert_logic: "Lógica de programação",
    cert_ai: "Inteligência Artificial",
    cert_java: "Java",
    competencias: "Competências",
    sobre_curso: "Sobre o curso",
    
    // Conteúdo específico dos certificados (não traduzir nomes de cursos)
    cert_powerbi_desc: "Microsoft Power BI Para Business Intelligence e Data Science",
    cert_webdev_desc: "HTML, CSS and Javascript for web Developers - Coursera",
    cert_database_desc: "Banco de Dados - Plataforma Mundi - IFSul",
    cert_logic_desc: "GFT start #6 - Lógica de programação - DIO",
    cert_ai_desc: "Imersão inteligencia artificial 2° edição - Alura",
    cert_java_desc: "Especialização em Minicurso de Java",
    
    // Skills dos certificados
    cert_powerbi_skills: "Microsoft Power BI · Microsoft Excel · Dashboards · Análise de dados · Gerenciamento de planilhas",
    cert_webdev_skills: "CSS · Bootstrap · JavaScript · HTML5 · AJAX",
    cert_database_skills: "Banco de dados · SQL · Gerenciamento de planilhas · Analise de dados",
    cert_logic_skills: "Java script · Git · GitHub · lógica",
    cert_ai_skills: "Fundamentos de Inteligência Artificial · Aprendizado Supervisionado e Não Supervisionado · Pré-processamento de Dados · Desenvolvimento com Python",
    cert_java_skills: "Java · Spring Boot · API Rest · Database · Lombok",
    
    // Services
    services_title: "Serviços",
    service_1_title: "Desenvolvimento Front-End",
    service_1_text: "Crio interfaces funcionais com HTML, CSS, JavaScript, TypeScript, Angular, e frameworks como Bootstrap e PrimeNG.",
    service_2_title: "Desenvolvimento Back-End",
    service_2_text: "Desenvolvo sistemas robustos usando Java Spring, PHP e MySQL, garantindo segurança na manipulação de dados.",
    service_3_title: "UI/UX Design e Protótipos",
    service_3_text: "Crio layouts funcionais e intuitivos para o usuário, utilizando Figma, Canva e boas práticas de design UI/UX.",
    service_4_title: "Controle de Qualidade e Testes",
    service_4_text: "Realizo testes contínuos e avaliações para garantir que os sistemas funcionem conforme especificações e atendam aos padrões de qualidade.",
    service_5_title: "Análise de Requisitos",
    service_5_text: "Transformo necessidades do cliente em especificações técnicas claras, garantindo que o desenvolvimento siga objetivos estratégicos.",
    service_6_title: "Power BI e Análise de Dados",
    service_6_text: "Estruturo informações complexas em dashboards interativos, facilitando análise e tomada de decisões estratégicas.",
    see_button: "Veja",
    
    // Soft Skills
    softskills_title: "Soft Skills",
    skill_1: "Proatividade",
    skill_2: "Resolução ágil de problemas",
    skill_3: "Atendimento ao cliente",
    skill_4: "Aprendizado contínuo",
    skill_5: "Trabalho em equipe",
    skill_6: "Adaptabilidade",
    skill_7: "Raciocínio lógico",
    skill_8: "Organização e gestão do tempo",
    
    // Portfolio
    portfolio_title: "Meus Projetos",
    filter_all: "Todos",
    filter_websites: "Sites",
    filter_links: "Tela de Links",
    filter_tools: "Ferramentas",
    filter_fun: "Diversão",


    // Portfolio Projects
      project_floricultura: "Floricultura Web",
      project_receitas: "Jornal de Receitas",
      project_dashboard: "Dashboard de Vendas",
      project_forca: "Jogo da Forca",
      project_crud: "CRUD - Formulário de Cadastro",
      project_dashboards: "Meus Dashboards Power BI",
      project_tarefas: "Gerenciador de Tarefas",
      project_uno: "UNO",
      project_editor: "Editor de Imagem",
      project_todolist: "To Do List",
      project_sucos: "Dona Sucos - Loja de Sucos",
      project_musica: "Tocador de Música",
      project_livros: "E-Commerce - Livros Online",
      project_notas: "Bloco de Notas",
      project_personagens: "Diário de Personagens",
      project_moveis: "Casa Confortável - Loja de Móveis",
      project_figma_links: "Meus Projetos Figma",
      project_conversor: "Conversor de Moedas",
      project_lamen: "Yummy Lamen - Restaurante de Lamen",
      project_tarot: "Cartas do Destino - Tarot Online",
      project_login: "Página de Login",
          
    // Technologies
    tech_title: "Tecnologias que domino",
    
    // Contact
    contact_title: "Contato",
    contact_desc: "Quer falar comigo? É só clicar no meu e-mail abaixo para enviar uma mensagem!",
    location_title: "Localização",
    location_text: "Mogi das Cruzes, São Paulo",
    contact_title_2: "Formas de contato",
    contact_phone: "Celular: (11) 97507-2008",
    contact_email: "Email: matheus.abib.ma@gmail.com",
    availability_title: "Disponibilidade",
    availability_text: "Segunda - Domingo: 8:00 - 20:00",
    
    // Footer
    footer_links: "Links",
    footer_services: "Meus Serviços",
    service_webdesign: "Web Design",
    service_webdev: "Desenvolvimento web",
    service_datamgmt: "Gerenciamento de dados",
    service_support: "Suporte",
    footer_tools: "Ferramentas",
    footer_projects: "Projetos",
    project_figma: "Designe UI/UX - Figma",
    project_powerbi: "Dashboards - Power BI",
    project_websites: "Web Sites",
    copyright: "© Copyright",
    rights: "Todos os direitos reservados",
    designed_by: "Designed by"
  },
  
  en: {
    // Menu
    menu_about: "About Me",
    menu_methodologies: "Methodologies",
    menu_certificates: "Certificates",
    menu_services: "Services",
    menu_projects: "Projects",
    menu_contact: "Contact",
    btn_translate: "EN/PT",
    
    // Hero Section
    hero_badge: "Innovation & Technology",
    hero_title: "Welcome!",
    hero_desc_1: "I'm a <strong>web developer</strong> working with <strong>front-end and back-end technologies</strong>, focused on improving user experience and system functionality.",
    hero_desc_2: "Currently studying Systems Analysis and Development at Mogi das Cruzes Technology College (FATEC-MC).",
    hero_desc_3: "I have skills in <strong>UI/UX Design, prototyping, requirements analysis, quality control, software engineering</strong>, as well as <strong>data visualization with Power BI</strong> and proficiency in <strong>Word, Excel, PowerPoint.</strong>",
    cv_button: "Download CV",
    photo_overlay: "That's me!",
    cv_portuguese: "Portuguese (Brazil)",
    cv_english: "English",
    
    // Features
    feature_1_title: "Technology Enthusiast",
    feature_1_text: "Ready to apply my knowledge and collaborate for the company's growth.",
    feature_2_title: "Technical Excellence",
    feature_2_text: "Focus on intuitive interfaces, responsive design, and attention to detail for better user experience.",
    feature_3_title: "Team Communication",
    feature_3_text: "Ability to work in teams, listen actively, and contribute productively.",
    
    // Metodologias
    methodologies_title: "How I Work",
    method_1_title: "Software Engineering",
    method_1_text: "I plan and organize each project stage using UML modeling, agile methodologies, Kanban, version control with Git, and continuous testing.",
    method_2_title: "Data Analysis",
    method_2_text: "I structure information clearly and organized, using tools like Power BI and Excel to generate strategic insights.",
    method_3_title: "Quality Control and Product Management",
    method_3_text: "I ensure the product meets required needs, with testing, requirements analysis, and delivery of valuable solutions.",
    method_4_title: "Communication and Collaboration",
    method_4_text: "I prioritize clear communication, active listening, and collaboration, even remotely, always acting with ethics and responsibility.",
    
    // Certificados
    certificates_title: "Certificates",
    cert_powerbi: "Power BI",
    cert_webdev: "Web Development",
    cert_database: "Database",
    cert_logic: "Programming Logic",
    cert_ai: "Artificial Intelligence",
    cert_java: "Java",
    competencias: "Skills",
    sobre_curso: "About the course",
    
    // Conteúdo específico dos certificados (não traduzir nomes de cursos)
    cert_powerbi_desc: "Microsoft Power BI Para Business Intelligence e Data Science",
    cert_webdev_desc: "HTML, CSS and Javascript for web Developers - Coursera",
    cert_database_desc: "Banco de Dados - Plataforma Mundi - IFSul",
    cert_logic_desc: "GFT start #6 - Lógica de programação - DIO",
    cert_ai_desc: "Imersão inteligencia artificial 2° edição - Alura",
    cert_java_desc: "Especialização em Minicurso de Java",
    
    // Skills dos certificados
    cert_powerbi_skills: "Microsoft Power BI · Microsoft Excel · Dashboards · Data Analysis · Spreadsheet Management",
    cert_webdev_skills: "CSS · Bootstrap · JavaScript · HTML5 · AJAX",
    cert_database_skills: "Database · SQL · Spreadsheet Management · Data Analysis",
    cert_logic_skills: "Java script · Git · GitHub · Logic",
    cert_ai_skills: "Artificial Intelligence Fundamentals · Supervised and Unsupervised Learning · Data Preprocessing · Python Development",
    cert_java_skills: "Java · Spring Boot · API Rest · Database · Lombok",
    
    // Services
    services_title: "Services",
    service_1_title: "Front-End Development",
    service_1_text: "I create functional interfaces with HTML, CSS, JavaScript, TypeScript, Angular, and frameworks like Bootstrap and PrimeNG.",
    service_2_title: "Back-End Development",
    service_2_text: "I develop robust systems using Java Spring, PHP and MySQL, ensuring data manipulation security.",
    service_3_title: "UI/UX Design and Prototypes",
    service_3_text: "I create functional and intuitive layouts for users, using Figma, Canva and good UI/UX design practices.",
    service_4_title: "Quality Control and Testing",
    service_4_text: "I perform continuous testing and evaluations to ensure systems function according to specifications and meet quality standards.",
    service_5_title: "Requirements Analysis",
    service_5_text: "I transform client needs into clear technical specifications, ensuring development follows strategic objectives.",
    service_6_title: "Power BI and Data Analysis",
    service_6_text: "I structure complex information in interactive dashboards, facilitating analysis and strategic decision making.",
    see_button: "See",
    
    // Soft Skills
    softskills_title: "Soft Skills",
    skill_1: "Proactivity",
    skill_2: "Agile problem solving",
    skill_3: "Customer service",
    skill_4: "Continuous learning",
    skill_5: "Teamwork",
    skill_6: "Adaptability",
    skill_7: "Logical reasoning",
    skill_8: "Organization and time management",
    
    // Portfolio
    portfolio_title: "My Projects",
    filter_all: "All",
    filter_websites: "Websites",
    filter_links: "Links Page",
    filter_tools: "Tools",
    filter_fun: "Fun",


    // Portfolio Projects
      project_floricultura: "Floriculture Web",
      project_receitas: "Recipe Journal",
      project_dashboard: "Sales Dashboard",
      project_forca: "Hangman Game",
      project_crud: "CRUD - Registration Form",
      project_dashboards: "My Power BI Dashboards",
      project_tarefas: "Task Manager",
      project_uno: "UNO",
      project_editor: "Image Editor",
      project_todolist: "To Do List",
      project_sucos: "Dona Sucos - Juice Shop",
      project_musica: "Music Player",
      project_livros: "E-Commerce - Online Books",
      project_notas: "Notepad",
      project_personagens: "Characters Diary",
      project_moveis: "Comfortable Home - Furniture Store",
      project_figma_links: "My Figma Projects",
      project_conversor: "Currency Converter",
      project_lamen: "Yummy Lamen - Ramen Restaurant",
      project_tarot: "Destiny Cards - Online Tarot",
      project_login: "Login Page",
          
    // Technologies
    tech_title: "Technologies I Master",
    
    // Contact
    contact_title: "Contact",
    contact_desc: "Want to talk to me? Just click on my email below to send a message!",
    location_title: "Location",
    location_text: "Mogi das Cruzes, São Paulo",
    contact_title_2: "Contact Methods",
    contact_phone: "Phone: (11) 97507-2008",
    contact_email: "Email: matheus.abib.ma@gmail.com",
    availability_title: "Availability",
    availability_text: "Monday - Sunday: 8:00 AM - 8:00 PM",
    
    // Footer
    footer_links: "Links",
    footer_services: "My Services",
    service_webdesign: "Web Design",
    service_webdev: "Web Development",
    service_datamgmt: "Data Management",
    service_support: "Support",
    footer_tools: "Tools",
    footer_projects: "Projects",
    project_figma: "UI/UX Design - Figma",
    project_powerbi: "Dashboards - Power BI",
    project_websites: "Websites",
    copyright: "© Copyright",
    rights: "All rights reserved",
    designed_by: "Designed by"
  }
};

// Sistema de tradução completo
class Translator {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio_lang') || 'pt';
    this.init();
  }
  
// No método init() do Translator
init() {
  // Configurar TODOS os botões de tradução
  const translateBtns = document.querySelectorAll(
    '#translateBtn, #translateBtnMobileHeader, #translateBtnMobileHero'
  );
  
  translateBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    }
  });
  
  this.updateButton();
  this.translatePage();
}

// No método updateButton()
updateButton() {
  const translateBtns = document.querySelectorAll(
    '#translateBtn, #translateBtnMobileHeader, #translateBtnMobileHero'
  );
  
  translateBtns.forEach(btn => {
    if (btn) {
      btn.setAttribute('data-lang', this.currentLang);
      const span = btn.querySelector('span[data-translate="btn_translate"]');
      if (span) {
        span.textContent = this.currentLang === 'pt' ? 'PT/EN' : 'EN/PT';
      }
    }
  });
}
  
  toggleLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('portfolio_lang', this.currentLang);
    this.updateButton();
    this.translatePage();
  }
  
  updateButton() {
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
      translateBtn.setAttribute('data-lang', this.currentLang);
      const span = translateBtn.querySelector('span[data-translate="btn_translate"]');
      if (span) {
        span.textContent = this.currentLang === 'pt' ? 'PT/EN' : 'EN/PT';
      }
    }
  }
  
  translatePage() {
    // Método 1: Traduzir elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[this.currentLang][key]) {
        if (element.tagName === 'A' || element.tagName === 'SPAN' || element.tagName === 'LI' || element.tagName === 'H4') {
          element.textContent = translations[this.currentLang][key];
        } else if (element.hasAttribute('data-html')) {
          element.innerHTML = translations[this.currentLang][key];
        } else {
          element.textContent = translations[this.currentLang][key];
        }
      }
    });
    
    // Método 2: Tradução por seletores
    this.translateBySelectors();
    
    // Atualizar meta tags para SEO
    this.updateMetaTags();
  }
  
  translateBySelectors() {
    console.log(`Traduzindo para: ${this.currentLang}`);
    
    // Hero Section
    this.updateText('.badge-text', 'hero_badge');
    this.updateText('.hero-title', 'hero_title');
    this.updateHTML('.hero-description p:nth-child(1)', 'hero_desc_1');
    this.updateText('.hero-description p:nth-child(2)', 'hero_desc_2');
    this.updateHTML('.hero-description p:nth-child(3)', 'hero_desc_3');
    this.updateText('.read-more span', 'cv_button');
    
    // Features
    this.updateText('.feature-box:nth-child(1) .feature-title', 'feature_1_title');
    this.updateText('.feature-box:nth-child(1) .feature-text', 'feature_1_text');
    this.updateText('.feature-box:nth-child(2) .feature-title', 'feature_2_title');
    this.updateText('.feature-box:nth-child(2) .feature-text', 'feature_2_text');
    this.updateText('.feature-box:nth-child(3) .feature-title', 'feature_3_title');
    this.updateText('.feature-box:nth-child(3) .feature-text', 'feature_3_text');
    
    // Section Titles
    this.updateText('#metodologias .section-title h2', 'methodologies_title');
    this.updateText('#service-details .section-title h2', 'certificates_title');
    this.updateText('#services .section-title h2', 'services_title');
    this.updateText('#services-alt .section-title h2', 'softskills_title');
    this.updateText('#portfolio .section-title h2', 'portfolio_title');
    this.updateText('#testimonials .section-title h2', 'tech_title');
    this.updateText('#contact .section-title h2', 'contact_title');
    this.updateText('#contact .section-title p', 'contact_desc');
    
    // Metodologias
    this.updateText('.process-item:nth-child(1) h3', 'method_1_title');
    this.updateText('.process-item:nth-child(1) p', 'method_1_text');
    this.updateText('.process-item:nth-child(2) h3', 'method_2_title');
    this.updateText('.process-item:nth-child(2) p', 'method_2_text');
    this.updateText('.process-item:nth-child(3) h3', 'method_3_title');
    this.updateText('.process-item:nth-child(3) p', 'method_3_text');
    this.updateText('.process-item:nth-child(4) h3', 'method_4_title');
    this.updateText('.process-item:nth-child(4) p', 'method_4_text');
    
    // Certificados tabs
    this.updateText('#service-details-tab-1-tab', 'cert_powerbi');
    this.updateText('#service-details-tab-2-tab', 'cert_webdev');
    this.updateText('#service-details-tab-3-tab', 'cert_database');
    this.updateText('#service-details-tab-4-tab', 'cert_logic');
    this.updateText('#service-details-tab-5-tab', 'cert_ai');
    this.updateText('#service-details-tab-6-tab', 'cert_java');
    
    // Conteúdo dos certificados
    this.translateCertificatesContent();
    
    // Services
    const serviceTitles = document.querySelectorAll('.service-content h3');
    const serviceTexts = document.querySelectorAll('.service-content p');
    const serviceButtons = document.querySelectorAll('.service-link span');
    
    if (serviceTitles.length >= 6) {
      serviceTitles[0].textContent = translations[this.currentLang]['service_1_title'];
      serviceTitles[1].textContent = translations[this.currentLang]['service_2_title'];
      serviceTitles[2].textContent = translations[this.currentLang]['service_3_title'];
      serviceTitles[3].textContent = translations[this.currentLang]['service_4_title'];
      serviceTitles[4].textContent = translations[this.currentLang]['service_5_title'];
      serviceTitles[5].textContent = translations[this.currentLang]['service_6_title'];
    }
    
    if (serviceTexts.length >= 6) {
      serviceTexts[0].textContent = translations[this.currentLang]['service_1_text'];
      serviceTexts[1].textContent = translations[this.currentLang]['service_2_text'];
      serviceTexts[2].textContent = translations[this.currentLang]['service_3_text'];
      serviceTexts[3].textContent = translations[this.currentLang]['service_4_text'];
      serviceTexts[4].textContent = translations[this.currentLang]['service_5_text'];
      serviceTexts[5].textContent = translations[this.currentLang]['service_6_text'];
    }
    
    serviceButtons.forEach(btn => {
      btn.textContent = translations[this.currentLang]['see_button'];
    });
    
    // Soft Skills
    const skillSpans = document.querySelectorAll('.softskills span');
    if (skillSpans.length >= 8) {
      skillSpans[0].textContent = translations[this.currentLang]['skill_1'];
      skillSpans[1].textContent = translations[this.currentLang]['skill_2'];
      skillSpans[2].textContent = translations[this.currentLang]['skill_3'];
      skillSpans[3].textContent = translations[this.currentLang]['skill_4'];
      skillSpans[4].textContent = translations[this.currentLang]['skill_5'];
      skillSpans[5].textContent = translations[this.currentLang]['skill_6'];
      skillSpans[6].textContent = translations[this.currentLang]['skill_7'];
      skillSpans[7].textContent = translations[this.currentLang]['skill_8'];
    }
    
    // Portfolio filters
    const filters = document.querySelectorAll('.portfolio-filters li');
    if (filters.length >= 5) {
      filters[0].textContent = translations[this.currentLang]['filter_all'];
      filters[1].textContent = translations[this.currentLang]['filter_websites'];
      filters[2].textContent = translations[this.currentLang]['filter_links'];
      filters[3].textContent = translations[this.currentLang]['filter_tools'];
      filters[4].textContent = translations[this.currentLang]['filter_fun'];
    }

    this.translatePortfolioProjects();

    
    // Contact
    this.updateText('.info-card:nth-child(1) h3', 'location_title');
    this.updateText('.info-card:nth-child(2) h3', 'contact_title_2');
    this.updateText('.info-card:nth-child(3) h3', 'availability_title');
    this.updateText('.info-card:nth-child(1) p', 'location_text');
    
    // Contato - informações específicas
    const contactInfo = document.querySelector('.info-card:nth-child(2) p');
    if (contactInfo) {
      const phoneText = translations[this.currentLang]['contact_phone'];
      const emailHtml = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=matheus.abib.ma@gmail.com" target="_blank">${translations[this.currentLang]['contact_email']}</a>`;
      contactInfo.innerHTML = `${phoneText}<br>${emailHtml}`;
    }
    
    this.updateText('.info-card:nth-child(3) p', 'availability_text');
    
    // Footer já é traduzido via data-translate, mas fazemos uma verificação extra
    this.translateFooterExtra();
  }
  
  translateCertificatesContent() {
    // Traduzir "Competências" e "Sobre o curso" em todos os certificados
    const skillsHeaders = document.querySelectorAll('#service-details h3');
    skillsHeaders.forEach(header => {
      if (header.textContent.includes('Competências') || header.textContent.includes('Skills')) {
        header.textContent = translations[this.currentLang]['competencias'];
      }
    });
    
    const courseHeaders = document.querySelectorAll('#service-details h4');
    courseHeaders.forEach(header => {
      if (header.textContent.includes('Sobre o curso') || header.textContent.includes('About the course')) {
        header.textContent = translations[this.currentLang]['sobre_curso'];
      }
    });
    
    // Traduzir skills específicas de cada certificado
    this.translateCertificateSkills();
  }
  
  translateCertificateSkills() {
    // Power BI
    const powerbiSkills = document.querySelector('#service-details-tab-1 p');
    if (powerbiSkills && powerbiSkills.textContent.includes('Microsoft Power BI')) {
      powerbiSkills.textContent = translations[this.currentLang]['cert_powerbi_skills'];
    }
    
    // Web Development
    const webdevSkills = document.querySelector('#service-details-tab-2 p');
    if (webdevSkills && webdevSkills.textContent.includes('CSS')) {
      webdevSkills.textContent = translations[this.currentLang]['cert_webdev_skills'];
    }
    
    // Database
    const dbSkills = document.querySelector('#service-details-tab-3 p');
    if (dbSkills && dbSkills.textContent.includes('Banco de dados')) {
      dbSkills.textContent = translations[this.currentLang]['cert_database_skills'];
    }
    
    // Logic
    const logicSkills = document.querySelector('#service-details-tab-4 p');
    if (logicSkills && logicSkills.textContent.includes('Java script')) {
      logicSkills.textContent = translations[this.currentLang]['cert_logic_skills'];
    }
    
    // AI
    const aiSkills = document.querySelector('#service-details-tab-5 p');
    if (aiSkills && aiSkills.textContent.includes('Fundamentos')) {
      aiSkills.textContent = translations[this.currentLang]['cert_ai_skills'];
    }
    
    // Java
    const javaSkills = document.querySelector('#service-details-tab-6 p');
    if (javaSkills && javaSkills.textContent.includes('Java · Spring Boot')) {
      javaSkills.textContent = translations[this.currentLang]['cert_java_skills'];
    }
  }
  
  translateFooterExtra() {
    // Verificar se os títulos do footer foram traduzidos
    const footerTitles = document.querySelectorAll('.footer-links h4');
    if (footerTitles.length >= 4) {
      if (!footerTitles[0].textContent.includes('Links') && !footerTitles[0].textContent.includes('Links')) {
        footerTitles[0].textContent = translations[this.currentLang]['footer_links'];
      }
      if (!footerTitles[1].textContent.includes('Serviços') && !footerTitles[1].textContent.includes('Services')) {
        footerTitles[1].textContent = translations[this.currentLang]['footer_services'];
      }
      if (!footerTitles[2].textContent.includes('Ferramentas') && !footerTitles[2].textContent.includes('Tools')) {
        footerTitles[2].textContent = translations[this.currentLang]['footer_tools'];
      }
      if (!footerTitles[3].textContent.includes('Projetos') && !footerTitles[3].textContent.includes('Projects')) {
        footerTitles[3].textContent = translations[this.currentLang]['footer_projects'];
      }
    }
    
    // Verificar copyright
    const copyrightText = `${translations[this.currentLang]['copyright']} <strong class="px-1 sitename">Matheus Abib.</strong><span> ${translations[this.currentLang]['rights']}</span>`;
    const copyrightElement = document.querySelector('.copyright p');
    if (copyrightElement && !copyrightElement.innerHTML.includes('Copyright')) {
      copyrightElement.innerHTML = copyrightText;
    }
  }
  
  updateText(selector, translationKey) {
    try {
      const element = document.querySelector(selector);
      if (element && translations[this.currentLang][translationKey]) {
        element.textContent = translations[this.currentLang][translationKey];
      }
    } catch (e) {
      console.log(`Erro ao traduzir ${selector}: ${e.message}`);
    }
  }
  
  updateHTML(selector, translationKey) {
    try {
      const element = document.querySelector(selector);
      if (element && translations[this.currentLang][translationKey]) {
        element.innerHTML = translations[this.currentLang][translationKey];
      }
    } catch (e) {
      console.log(`Erro ao traduzir HTML ${selector}: ${e.message}`);
    }
  }
  
  updateMetaTags() {
    // Atualizar lang do HTML
    document.documentElement.lang = this.currentLang;
    
    // Atualizar meta description baseado no idioma
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = this.currentLang === 'pt' 
        ? "Portfólio de Matheus Abib - Desenvolvedor Web Full Stack"
        : "Matheus Abib Portfolio - Full Stack Web Developer";
    }
  }

translatePortfolioProjects() {
  
  // Mapeamento dos seletores para as chaves de tradução
  const projectMap = [
    { selector: '.portfolio-item:nth-child(1) h3', key: 'project_floricultura' },
    { selector: '.portfolio-item:nth-child(2) h3', key: 'project_receitas' },
    { selector: '.portfolio-item:nth-child(3) h3', key: 'project_dashboard' },
    { selector: '.portfolio-item:nth-child(4) h3', key: 'project_forca' },
    { selector: '.portfolio-item:nth-child(5) h3', key: 'project_crud' },
    { selector: '.portfolio-item:nth-child(6) h3', key: 'project_dashboards' },
    { selector: '.portfolio-item:nth-child(7) h3', key: 'project_tarefas' },
    { selector: '.portfolio-item:nth-child(8) h3', key: 'project_uno' },
    { selector: '.portfolio-item:nth-child(9) h3', key: 'project_editor' },
    { selector: '.portfolio-item:nth-child(10) h3', key: 'project_todolist' },
    { selector: '.portfolio-item:nth-child(11) h3', key: 'project_sucos' },
    { selector: '.portfolio-item:nth-child(12) h3', key: 'project_musica' },
    { selector: '.portfolio-item:nth-child(13) h3', key: 'project_livros' },
    { selector: '.portfolio-item:nth-child(14) h3', key: 'project_notas' },
    { selector: '.portfolio-item:nth-child(15) h3', key: 'project_personagens' },
    { selector: '.portfolio-item:nth-child(16) h3', key: 'project_moveis' },
    { selector: '.portfolio-item:nth-child(17) h3', key: 'project_figma_links' },
    { selector: '.portfolio-item:nth-child(18) h3', key: 'project_conversor' },
    { selector: '.portfolio-item:nth-child(19) h3', key: 'project_lamen' },
    { selector: '.portfolio-item:nth-child(20) h3', key: 'project_tarot' },
    { selector: '.portfolio-item:nth-child(21) h3', key: 'project_login' }
  ];
  
  // Traduzir cada projeto
  projectMap.forEach(({ selector, key }) => {
    const element = document.querySelector(selector);
    if (element && translations[this.currentLang][key]) {
      element.textContent = translations[this.currentLang][key];
    }
  });
  
  // Método alternativo: traduzir todos os títulos h3 dentro de .portfolio-content
  const allProjectTitles = document.querySelectorAll('.portfolio-content h3');
  allProjectTitles.forEach((title, index) => {
    if (index < projectMap.length && translations[this.currentLang][projectMap[index].key]) {
      title.textContent = translations[this.currentLang][projectMap[index].key];
    }
  });
}

}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const translator = new Translator();
});


})();

 document.querySelector('.php-email-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Reset e mostra loading
    document.querySelector('.loading').style.display = 'flex';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.sent-message').style.display = 'none';
    document.querySelector('.error-message').innerHTML = '';

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = await response.json();

        document.querySelector('.loading').style.display = 'none';

        if (result.status === 'success') {
            document.querySelector('.sent-message').style.display = 'block';
            form.reset();
            
            // Opcional: Esconde a mensagem após 5 segundos
            setTimeout(() => {
                document.querySelector('.sent-message').style.display = 'none';
            }, 5000);
            
        } else {
            throw new Error(result.message || 'Erro ao enviar mensagem. Tente novamente.');
        }
    } catch (error) {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.error-message').innerHTML = `
            <i class="bi bi-exclamation-triangle-fill"></i>
            <span>${error.message}</span>
        `;
        document.querySelector('.error-message').style.display = 'block';
    }
});


