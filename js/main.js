    
(function() {
  "use strict";

  // ===================== FUNÇÕES GLOBAIS =====================
  
  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  /**
   * Mobile nav toggle
   */
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  function toggleMobileDropdown(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  }

  /**
   * Preloader
   */
  function removePreloader() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  }

  /**
   * Scroll top button
   */
  function toggleScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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

  /**
   * Navmenu Scrollspy
   */
  function navmenuScrollspy() {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

  // ===================== SISTEMA DE TRADUÇÃO =====================
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
      hero_desc_1: "Sou <strong>desenvolvedor web</strong> atuando com <strong>tecnologias front-end e back-end</strong>, focado em melhorar a experiência do usuário e a funcionalidade dos sistemas.",
      hero_desc_2: "Atualmente estou no último semestre de Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de Mogi das Cruzes e no primeiro semestre de Engenharia de Software na Universidade de Mogi das Cruzes.",
      hero_desc_3: "Possuo habilidades em <strong>UI/UX Design, criação de protótipos, análise de requisitos, controle de qualidade e engenharia de software</strong>, além de <strong>visualização de dados com Power BI</strong> e domínio em <strong>Word, Excel e PowerPoint</strong>.",
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
      cert_database: "Banco de Dados",
      cert_logic: "Lógica de Programação",
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
    project_calendario: "Calendário",
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
      designed_by: "Designed by Matheus Abib"
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
      hero_desc_2: "Currently in the final semester of Systems Analysis and Development at Mogi das Cruzes Technology College (FATEC-MC) and in the first semester of Software Engineering at the University of Mogi das Cruzes (UMC).",
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
    project_floricultura: "Floriculture Website",
    project_receitas: "Recipe Journal",
    project_dashboard: "Sales Dashboard",
    project_calendario: "Calendar",
    project_forca: "Hangman Game",
    project_crud: "CRUD - Registration Form",
    project_dashboards: "My Power BI Dashboards",
    project_tarefas: "Task Manager",
    project_uno: "UNO Card Game",
    project_editor: "Image Editor",
    project_todolist: "To Do List",
    project_sucos: "Dona Sucos - Juice Store",
    project_musica: "Music Player",
    project_livros: "E-Commerce - Online Books",
    project_notas: "Notepad",
    project_personagens: "Characters Diary",
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
      designed_by: "Designed by Matheus Abib"
    }
  };

  // Sistema de tradução completo
  class Translator {
    constructor() {
      this.currentLang = localStorage.getItem('portfolio_lang') || 'pt';
      this.init();
    }
    
    init() {
      // Configurar TODOS os botões de tradução
      const translateBtns = document.querySelectorAll(
        '#translateBtnDesktop, #translateBtnMobile'
      );
      
      translateBtns.forEach(btn => {
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            this.toggleLanguage();
          });
        }
      });
      
      this.updateButton();
      this.translatePage();
    }

    updateButton() {
      const translateBtns = document.querySelectorAll(
        '#translateBtnDesktop, #translateBtnMobile'
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
  { selector: '.portfolio-item:nth-child(4) h3', key: 'project_livros' },
  { selector: '.portfolio-item:nth-child(5) h3', key: 'project_calendario' },
  { selector: '.portfolio-item:nth-child(6) h3', key: 'project_forca' },
  { selector: '.portfolio-item:nth-child(7) h3', key: 'project_crud' },
  { selector: '.portfolio-item:nth-child(8) h3', key: 'project_dashboards' },
  { selector: '.portfolio-item:nth-child(9) h3', key: 'project_tarefas' },
  { selector: '.portfolio-item:nth-child(10) h3', key: 'project_uno' },
  { selector: '.portfolio-item:nth-child(11) h3', key: 'project_editor' },
  { selector: '.portfolio-item:nth-child(12) h3', key: 'project_notas' },  
  { selector: '.portfolio-item:nth-child(13) h3', key: 'project_sucos' },
  { selector: '.portfolio-item:nth-child(14) h3', key: 'project_musica' },
  { selector: '.portfolio-item:nth-child(15) h3', key: 'project_todolist' },
  { selector: '.portfolio-item:nth-child(16) h3', key: 'project_personagens' },
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

  // ===================== MODAL PARA IMAGENS DOS CERTIFICADOS =====================
  function setupCertificateModal() {
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
  }

  // ===================== SISTEMA DE MEDIA QUERIES DINÂMICAS =====================
  class DynamicMediaQueries {
    constructor() {
      this.styles = document.createElement('style');
      this.styles.id = 'dynamic-media-queries';
      document.head.appendChild(this.styles);
      
      this.breakpoints = {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 575.98
      };
      
      this.init();
    }
    
    init() {
      // Observar mudanças no tamanho da tela
      this.handleResize();
      window.addEventListener('resize', () => this.handleResize());
      
      // Aplicar estilos iniciais
      this.applyAllMediaQueries();
    }
    
    handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Adicionar/remover classes baseado no tamanho da tela
      this.updateBodyClasses(width, height);
    }
    
    updateBodyClasses(width, height) {
      const body = document.body;
      
      // Remover classes antigas
      body.classList.remove(
        'is-xl', 'is-lg', 'is-md', 'is-sm', 'is-xs',
        'is-mobile', 'is-desktop', 'is-tablet',
        'is-touch', 'is-hover'
      );
      
      // Adicionar classes baseadas na largura
      if (width >= this.breakpoints.xl) {
        body.classList.add('is-xl', 'is-desktop');
      } else if (width >= this.breakpoints.lg) {
        body.classList.add('is-lg', 'is-desktop');
      } else if (width >= this.breakpoints.md) {
        body.classList.add('is-md', 'is-tablet');
      } else if (width >= this.breakpoints.sm) {
        body.classList.add('is-sm', 'is-mobile');
      } else {
        body.classList.add('is-xs', 'is-mobile');
      }
      
      // Detectar touch/hover
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        body.classList.add('is-touch');
      } else {
        body.classList.add('is-hover');
      }
      
      // Detectar altura pequena
      if (height <= 480) {
        body.classList.add('is-short-height');
      }
    }
    
    applyAllMediaQueries() {
      const css = `
        /* === Navmenu Desktop (min-width: 1200px) === */
        @media (min-width: 1200px) {
          .navmenu {
            padding: 0;
          }
          .navmenu ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
            align-items: center;
          }
          .navmenu li {
            position: relative;
          }
          .navmenu a,
          .navmenu a:focus {
            color: var(--nav-color);
            padding: 18px 15px;
            font-size: 16px;
            font-family: var(--nav-font);
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;
            transition: 0.3s;
          }
          .navmenu a i,
          .navmenu a:focus i {
            font-size: 12px;
            line-height: 0;
            margin-left: 5px;
            transition: 0.3s;
          }
          .navmenu li:last-child a {
            padding-right: 0;
          }
          .navmenu li:hover>a,
          .navmenu .active,
          .navmenu .active:focus {
            color: var(--nav-hover-color);
          }
          .navmenu .dropdown ul {
            margin: 0;
            padding: 10px 0;
            background: var(--nav-dropdown-background-color);
            display: block;
            position: absolute;
            visibility: hidden;
            left: 14px;
            top: 130%;
            opacity: 0;
            transition: 0.3s;
            border-radius: 4px;
            z-index: 99;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
          }
          .navmenu .dropdown ul li {
            min-width: 200px;
          }
          .navmenu .dropdown ul a {
            padding: 10px 20px;
            font-size: 15px;
            text-transform: none;
            color: var(--nav-dropdown-color);
          }
          .navmenu .dropdown ul a i {
            font-size: 12px;
          }
          .navmenu .dropdown ul a:hover,
          .navmenu .dropdown ul .active:hover,
          .navmenu .dropdown ul li:hover>a {
            color: var(--nav-dropdown-hover-color);
          }
          .navmenu .dropdown:hover>ul {
            opacity: 1;
            top: 100%;
            visibility: visible;
          }
          .navmenu .dropdown .dropdown ul {
            top: 0;
            left: -90%;
            visibility: hidden;
          }
          .navmenu .dropdown .dropdown:hover>ul {
            opacity: 1;
            top: 0;
            left: -100%;
            visibility: visible;
          }
        }
        
        /* === Navmenu Mobile (max-width: 1199px) === */
        @media (max-width: 1199px) {
          .mobile-nav-toggle {
            color: var(--nav-color);
            font-size: 28px;
            line-height: 0;
            margin-right: 10px;
            cursor: pointer;
            transition: color 0.3s;
          }
          .navmenu {
            padding: 0;
            z-index: 9997;
          }
          .navmenu ul {
            display: none;
            list-style: none;
            position: absolute;
            inset: 60px 20px 20px 20px;
            padding: 10px 0;
            margin: 0;
            border-radius: 6px;
            background-color: var(--nav-mobile-background-color);
            overflow-y: auto;
            transition: 0.3s;
            z-index: 9998;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
          }
          .navmenu a,
          .navmenu a:focus {
            color: var(--nav-dropdown-color);
            padding: 10px 20px;
            font-family: var(--nav-font);
            font-size: 17px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;
            transition: 0.3s;
          }
          .navmenu a i,
          .navmenu a:focus i {
            font-size: 12px;
            line-height: 0;
            margin-left: 5px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: 0.3s;
            background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
          }
          .navmenu a i:hover,
          .navmenu a:focus i:hover {
            background-color: var(--accent-color);
            color: var(--contrast-color);
          }
          .navmenu a:hover,
          .navmenu .active,
          .navmenu .active:focus {
            color: var(--nav-dropdown-hover-color);
          }
          .navmenu .active i,
          .navmenu .active:focus i {
            background-color: var(--accent-color);
            color: var(--contrast-color);
            transform: rotate(180deg);
          }
          .navmenu .dropdown ul {
            position: static;
            display: none;
            z-index: 99;
            padding: 10px 0;
            margin: 10px 20px;
            background-color: var(--nav-dropdown-background-color);
            border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
            box-shadow: none;
            transition: all 0.5s ease-in-out;
          }
          .navmenu .dropdown ul ul {
            background-color: rgba(33, 37, 41, 0.1);
          }
          .navmenu .dropdown>.dropdown-active {
            display: block;
            background-color: rgba(33, 37, 41, 0.03);
          }
          .mobile-nav-active {
            overflow: hidden;
          }
          .mobile-nav-active .mobile-nav-toggle {
            color: #fff;
            position: absolute;
            font-size: 32px;
            top: 15px;
            right: 15px;
            margin-right: 0;
            z-index: 9999;
          }
          .mobile-nav-active .navmenu {
            position: fixed;
            overflow: hidden;
            inset: 0;
            background: rgba(33, 37, 41, 0.8);
            transition: 0.3s;
          }
          .mobile-nav-active .navmenu>ul {
            display: block;
          }
          section,
          .section {
            scroll-margin-top: 64px;
          }
          .hero .content .translate-and-download {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .hero .content .translate-and-download .dropdown-curriculo {
            order: 1;
          }
          .hero .content .translate-and-download .translate-mobile-hero {
            order: 2;
          }
          .translate-mobile-hero .btn-translate {
            margin: 0;
            padding: 8px 16px;
            background: rgba(93, 87, 244, 0.1);
            border: 1px solid rgba(93, 87, 244, 0.3);
            color: var(--accent-color);
            border-radius: 50px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
          }
          .translate-mobile-hero .btn-translate:hover {
            background: rgba(93, 87, 244, 0.2);
            border-color: var(--accent-color);
            transform: translateY(-2px);
          }
        }
        
        /* === Ajuste de delay mobile (max-width: 768px) === */
        @media (max-width: 768px) {
          [data-aos-delay] {
            transition-delay: 0 !important;
          }

            .tech-tags {
            gap: 4px;
          }
          
          .tech-tags .tag {
            font-size: 0.65rem;
            padding: 2px 8px;
          }
          
          .stack-badge {
            font-size: 0.7rem;
            padding: 3px 10px;
          }

          section,
          .section {
            padding: 18% 0 0;
       
          }

          .hero-highlight {
          padding: 2.5rem 2rem;
          margin-bottom: 3rem;
          border-radius: 24px;
          background-size: 
            cover, cover, cover,
            30px 30px, 30px 30px,
            150px 150px,
            cover;
        }
        
        .hero-highlight::before,
        .hero-highlight::after {
          filter: blur(30px);
        }
        
        .hero-highlight .hero-title {
          font-size: 2.2rem;
        }
        
        .hero-highlight .social-icon {
          width: 44px;
          height: 44px;
          font-size: 1.1rem;
        }
        }
        
        /* === Hero Title (max-width: 991.98px) === */
        @media (max-width: 991.98px) {
          .hero .hero-title {
            font-size: 2rem;
          }
        }
        
        /* === Feature Boxes (min-width: 576px) === */
        @media (min-width: 576px) {
          .hero .feature-boxes .feature-box {
            flex-direction: row;
            align-items: flex-start;
            text-align: left;
          }
        }
        
        /* === Services & How We Work (max-width: 767.98px) === */
        @media (max-width: 767.98px) {

          .header .logo h1{
          font-size: 24px;
          }
          .header .logo span{
          font-size: 24px;
          }
        
          .services .service-item {
            padding: 1.5rem;
            margin-bottom: 1rem;
          }
          .services .service-icon {
            width: 60px;
            height: 60px;
            margin-right: 1rem;
          }
          .services .service-icon i {
            font-size: 1.5rem;
          }
          .services .service-content h3 {
            font-size: 1.2rem;
            margin-bottom: 0.75rem;
          }
          .services .service-content p {
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }
          .how-we-work .process-container {
            padding: 1rem 0;
          }
          .how-we-work .process-item {
            padding-bottom: 2rem;
          }
          .how-we-work .process-item .content {
            border-width: 1px;
          }
          .how-we-work .process-item .content:hover {
            transform: translateY(-5px);
          }
          .how-we-work .process-item .step-number {
            font-size: 3rem;
            left: 50%;
            top: -1.5rem;
            transform: translateX(-50%);
          }
          .how-we-work .process-item .step-number:hover {
            transform: translateX(-50%);
          }
          .how-we-work .process-item .card-body {
            padding: 2rem 1.5rem 1.5rem;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }
          .how-we-work .process-item .step-icon {
            width: 60px;
            height: 60px;
            border-radius: 12px;
          }
          .how-we-work .process-item .step-icon i {
            font-size: 1.75rem;
          }
          .how-we-work .process-item .step-content h3 {
            font-size: 1.25rem;
          }
          .how-we-work .process-item .arrow {
            height: 60px;
            margin: 0.5rem 0;
          }
          .hero .feature-boxes .feature-box {
            padding: 1.25rem;
          }
          .hero .feature-boxes .feature-box .feature-icon {
            width: 50px;
            height: 50px;
          }
          .hero .feature-boxes .feature-box .feature-icon i {
            font-size: 1.5rem;
          }
          .hero .feature-boxes .feature-box .feature-title {
            font-size: 1.125rem;
          }
          .hero .feature-boxes .feature-box .feature-text {
            font-size: 0.875rem;
          }
          .hero .badge-wrapper .d-inline-flex .badge-text {
            font-size: 0.75rem;
          }
          .hero .hero-title {
            font-size: 1.75rem;
          }
          .hero .hero-description {
            font-size: 1rem;
          }
        }
        
        /* === Services Mobile (max-width: 575.98px) === */
        @media (max-width: 575.98px) {
          .services .service-item {
            flex-direction: column;
            text-align: center;
          }
          .services .service-item::before {
            width: 100%;
            height: 4px;
            transform: scaleX(0);
            transform-origin: left;
          }
          .services .service-item:hover::before {
            transform: scaleX(1);
          }
          .services .service-icon {
            margin-right: 0;
            margin-bottom: 1.25rem;
          }
          .services .service-link {
            justify-content: center;
          }
        }
        
        /* === Services Alt (max-width: 992px) === */
        @media (max-width: 992px) {
          .services-alt .content-block {
            margin-right: 0;
        
          }
          .custom-box {
            width: 100%;
            margin-left: 5%;
          }

          .hero-highlight {
            padding: 3rem 2.5rem;
            border-radius: 28px;
          }
          
          .hero-highlight .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-highlight .hero-description {
            font-size: 1.15rem;
          }
        }
        
        /* === Altura curta (max-height: 480px) === */
        @media (max-height: 480px) {
          .portfolio-scroll-container {
            max-height: 60vh;
            min-height: 200px;
          }
        }


        /* === Dispositivos touch === */
        @media (hover: none) and (pointer: coarse) {
          .portfolio-scroll-container {
            overscroll-behavior: auto;
          }
        }
        
        /* === Mobile pequeno (max-width: 576px) === */
        @media (max-width: 576px) {
          .custom-box {
            width: 100% !important;
            margin: 0 auto !important;
            justify-content: center !important;
          }
        .hero .feature-boxes {
                    margin-bottom: 2rem;
            }

          .hero .content .translate-and-download {
            flex-direction: row-reverse;
            justify-content: flex-end;
          }

            .hero-highlight {
            padding: 2rem 1.2rem;
            border-radius: 12px;
          }
          
          .hero-highlight .hero-title {
            font-size: 1.4rem;
          }
          
          .hero-highlight .hero-description {
            font-size: 1rem;
            line-height: 1.7;
          }
          
          .hero-highlight .translate-and-download {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        @media (max-width: 765px) {
        .dropdown-menu {
          margin-top: -27px !important;
          margin-left: 55% !important;
          transform: none !important;
        }
      }

        @media (min-width: 992px) {
        .dropdown-curriculo.dropend .dropdown-menu {
          top: 0;
          left: 100%;
          right: auto;
          margin-top: 0;
          margin-left: 10px;
          transform: none !important;
        }
        
        .dropdown-curriculo.dropend .dropdown-menu {
          position: absolute;
          inset: 0 auto auto 0;
        }
      }
        
        /* === Tablet (min-width: 769px and max-width: 991px) === */
        @media (min-width: 769px) and (max-width: 991px) {
          .custom-box {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
          }
        }
        
        /* === Tablet pequeno (max-width: 767px and min-width: 530px) === */
        @media (max-width: 767px) and (min-width: 530px) {
          .custom-box {
            margin-top: 0;
            justify-content: center !important;
            display: flex;
          }
          .team-card {
            max-width: 100%;
          }
          #hero .col-md-7,
          #hero .col-md-5 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
        
        /* === Mobile geral (max-width: 767px) === */
        @media (max-width: 767px) {
          .service-details .service-testimonial .testimonial-card .client-info img {
            margin: 0 auto 20px;
          }
          .testimonials .testimonial-content {
            padding: 30px 20px 20px;
          }
          .testimonials .testimonial-content p {
            font-size: 15px;
          }
          .testimonials .testimonial-content .quote-icon {
            font-size: 36px;
            left: 20px;
          }
          .testimonials .testimonial-profile {
            padding: 15px 20px;
          }
          .testimonials .profile-info img {
            width: 45px;
            height: 45px;
          }
          .service-details .service-cta {
            padding: 40px 20px;
          }
          .service-details .service-cta h3 {
            font-size: 26px;
          }
          .service-details .client-info {
            flex-direction: column;
            margin-bottom: 30px;
          }
          .service-details .service-tabs .tab-content {
            padding: 30px 20px;
          }
          .hero-social {
            gap: 9px;
          }
          .social-icon {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
          .d-flex.align-items-center.justify-content-between {
            flex-direction: row;
          }
          .services-alt .services-list .service-item {
            padding: 2rem 0;
          }
          .services-alt .services-list .service-icon {
            height: 4rem;
            width: 4rem;
            margin-right: 1rem;
          }
          .services-alt .services-list .service-icon i {
            font-size: 2rem;
          }
          .services-alt .services-list .service-content h4 {
            font-size: 1.25rem;
          }
          .services-alt .services-list .service-content p {
            font-size: 0.9rem;
          }
          .portfolio .portfolio-filters li {
            font-size: 14px;
            padding: 6px 15px;
          }
          .portfolio .portfolio-card .portfolio-content {
            padding: 20px;
          }
          .portfolio .portfolio-card .portfolio-content h3 {
            font-size: 18px;
          }
          .portfolio .portfolio-card .portfolio-content p {
            font-size: 14px;
          }
          .portfolio-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .custom-box {
            width: 100% !important;
            margin: 0 auto !important;
          }
          .service-details .service-main-content .section-header h2 {
            font-size: 28px;
          }
          .service-details .service-tabs .nav-tabs {
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow-x: auto;
          }
          .service-details .service-tabs .nav-tabs::-webkit-scrollbar {
            height: 5px;
          }
          .service-details .service-tabs .nav-tabs::-webkit-scrollbar-thumb {
            background: color-mix(in srgb, var(--default-color), transparent 80%);
            border-radius: 10px;
          }
        }
        
        /* === Services Details (max-width: 991px) === */
        @media (max-width: 991px) {
          .service-details .service-main-content {
            margin-top: 30px;
          }
          .service-details .service-tabs {
            margin-top: 50px;
          }
          .service-details .service-testimonial,
          .service-details .service-cta {
            margin-top: 50px;
          }
        }
        
        /* === Desktop médio (max-width: 1200px) === */
        @media (max-width: 1200px) {
          .navmenu ul li:last-child {
            margin-left: 0;
            margin-top: 10px;
          }
          .btn-translate {
            width: 100%;
            justify-content: center;
          }
          .header .logo {
            order: 1;
          }
          .header .navmenu {
            order: 3;
          }
          .custom-box {
            width: 82%;
            margin-left: 18%;
          }
          .hero-highlight {
            padding: 2.5rem 1.5rem;
          }
        }
      `;
      
      this.styles.textContent = css;
    }
    
    // Método para atualizar estilos dinamicamente
    updateMediaQuery(breakpoint, css) {
      const existingStyle = document.getElementById(`media-${breakpoint}`);
      if (existingStyle) {
        existingStyle.textContent = css;
      } else {
        const style = document.createElement('style');
        style.id = `media-${breakpoint}`;
        style.textContent = `@media ${breakpoint} { ${css} }`;
        document.head.appendChild(style);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Event listeners básicos
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
    
    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }
    
    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
    
    // Toggle mobile nav dropdowns
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', toggleMobileDropdown);
    });
    
    // Preloader
    window.addEventListener('load', removePreloader);
    
    // Scroll top button
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      scrollTop.addEventListener('click', scrollToTop);
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
    }
    
    // Animation on scroll
    window.addEventListener('load', aosInit);
    
    // Initiate glightbox
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
    
    // Init isotope layout and filters
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
    
    // Frequently Asked Questions Toggle
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
    
    // Init swiper sliders
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        
        if (swiperElement.classList.contains("swiper-tab")) {
          // Função para swiper com paginação customizada se necessário
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
    window.addEventListener("load", initSwiper);
    
    // Correct scrolling position upon page load for URLs containing hash links
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
    
    // Navmenu Scrollspy
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
    
    // Setup certificate modal
    setupCertificateModal();
    
    // Inicializar tradutor
    const translator = new Translator();
    
    // Inicializar media queries dinâmicas
    const dynamicMedia = new DynamicMediaQueries();
    
    // Expor para uso global se necessário
    window.dynamicMedia = dynamicMedia;
    
    // Event listener para formulário de contato (se existir)
    const contactForm = document.querySelector('.php-email-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async function (e) {
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
    }
    
  });
  
})();

// Adicione após o código do Isotope existente
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.portfolio-filters li');
  let activeFilters = new Set();
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const filter = this.getAttribute('data-filter');
      
      if (filter === '*') {
        // Reset para todos
        activeFilters.clear();
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');
        
        // Mostra todos os projetos
        document.querySelectorAll('.portfolio-item').forEach(item => {
          item.style.display = 'block';
        });
      } else {
        // Alterna o filtro
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
          this.classList.remove('filter-active');
        } else {
          // Remove o filtro "Todos" se estiver ativo
          const allFilter = document.querySelector('[data-filter="*"]');
          if (allFilter && allFilter.classList.contains('filter-active')) {
            allFilter.classList.remove('filter-active');
            activeFilters.delete('*');
          }
          
          activeFilters.add(filter);
          this.classList.add('filter-active');
        }
        
        // Aplica filtros combinados
        applyCombinedFilters();
      }
    });
  });
  
  function applyCombinedFilters() {
    const items = document.querySelectorAll('.portfolio-item');
    
    if (activeFilters.size === 0) {
      // Mostra todos
      items.forEach(item => {
        item.style.display = 'block';
      });
      return;
    }
    
    items.forEach(item => {
      const itemClasses = Array.from(item.classList);
      
      // Verifica se o item tem TODAS as classes de filtro ativas
      let shouldShow = true;
      activeFilters.forEach(filter => {
        const className = filter.replace('.', '');
        if (!itemClasses.includes(className)) {
          shouldShow = false;
        }
      });
      
      if (shouldShow) {
        item.style.display = 'block';
        // Efeito visual
        item.style.opacity = '0';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transition = 'opacity 0.3s ease';
        }, 10);
      } else {
        item.style.display = 'none';
      }
    });
  }
}

