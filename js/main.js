     
(function() {
  "use strict";
  
  document.documentElement.style.scrollBehavior = 'auto';
  
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  window.lenisInstance = new Lenis({
    duration: isTouchDevice ? 1.0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    smoothTouch: true,
    wheelMultiplier: isTouchDevice ? 1.2 : 0.8,
    touchMultiplier: isTouchDevice ? 1.8 : 1,
    infinite: false,
    wrapper: window,
    content: document.documentElement,
  });

  let isProgrammaticNavigation = false;
  let navigationTimeout;

  function setupPortfolioScroll() {
    const portfolioContainer = document.querySelector('.portfolio-scroll-container');
    
    if (!portfolioContainer) return;
    
    let isOverPortfolio = false;
    let portfolioScrollTimeout;
    
    portfolioContainer.addEventListener('mouseenter', function() {
      if (isProgrammaticNavigation) return;
      
      isOverPortfolio = true;
      
      if (window.lenisInstance) {
        window.lenisInstance.stop();
      }
    });
    
    portfolioContainer.addEventListener('mouseleave', function() {
      isOverPortfolio = false;
      
      clearTimeout(portfolioScrollTimeout);
      portfolioScrollTimeout = setTimeout(() => {
        if (window.lenisInstance && !isOverPortfolio && !isProgrammaticNavigation) {
          window.lenisInstance.start();
        }
      }, 50);
    });
    
    portfolioContainer.addEventListener('wheel', function(e) {
      e.stopPropagation();
      
      const currentScroll = this.scrollTop;
      const maxScroll = this.scrollHeight - this.clientHeight;
      
      if ((currentScroll <= 0 && e.deltaY < 0) || (currentScroll >= maxScroll && e.deltaY > 0)) {
        if (window.lenisInstance) {
          window.lenisInstance.start();
        }
      }
    }, { passive: false });
  }

  function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        isProgrammaticNavigation = true;
        clearTimeout(navigationTimeout);
        
        navigationTimeout = setTimeout(() => {
          isProgrammaticNavigation = false;
        }, 1500);
        
        window.addEventListener('scroll', function onScroll() {
          clearTimeout(navigationTimeout);
          navigationTimeout = setTimeout(() => {
            isProgrammaticNavigation = false;
            window.removeEventListener('scroll', onScroll);
          }, 500);
        }, { once: true });
      });
    });
  }

  function setupFooterNavigation() {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"], .footer-nav a[href^="#"]');
    
    footerLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        isProgrammaticNavigation = true;
        clearTimeout(navigationTimeout);
        
        navigationTimeout = setTimeout(() => {
          isProgrammaticNavigation = false;
        }, 1500);
        
        window.addEventListener('scroll', function onScroll() {
          clearTimeout(navigationTimeout);
          navigationTimeout = setTimeout(() => {
            isProgrammaticNavigation = false;
            window.removeEventListener('scroll', onScroll);
          }, 500);
        }, { once: true });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    setupPortfolioScroll();
    setupNavigationLinks();
    setupFooterNavigation();
    
    function raf(time) {
      if (window.lenisInstance) {
        window.lenisInstance.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    function checkAndRestartLenis() {
      if (window.lenisInstance && isProgrammaticNavigation) {
        setTimeout(() => {
          if (window.lenisInstance && isProgrammaticNavigation) {
            window.lenisInstance.start();
            isProgrammaticNavigation = false;
          }
        }, 800);
      }
    }
    
    setInterval(checkAndRestartLenis, 1000);
  });
  
  function raf(time) {
    window.lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  console.log('Lenis Smooth Scroll ativado! Dispositivo:', isTouchDevice ? 'Touch/Mobile' : 'Desktop');

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  function toggleMobileDropdown(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  }

  function removePreloader() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  }

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

  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

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
      cv_portuguese: "Português",
      cv_english: "Inglês",
      
      // Features
      feature_1_title: "Entusiasta",
      feature_1_text: "Pronto para aplicar meus conhecimentos e colaborar para o crescimento da empresa.",
      feature_2_title: "Excelência Técnica",
      feature_2_text: "Foco em interfaces intuitivas, design responsivo e atenção aos detalhes para melhor experiência do usuário.",
      feature_3_title: "Comunicação",
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
          menu_certificates: "Certificados",
    
    // Certificates Section
    webdev_tab_title: "Web Development",
    powerbi_tab_title: "Power BI",
    database_tab_title: "Banco de Dados",
    logic_tab_title: "Lógica de Programação",
    ai_tab_title: "Inteligência Artificial",
    java_tab_title: "Java",
    
    certificate_webdev_title: "HTML, CSS & JavaScript",
    certificate_webdev_desc: "Curso especializado em desenvolvimento web front-end, abordando as tecnologias fundamentais para construção de interfaces modernas e responsivas.",
    
    certificate_powerbi_title: "Microsoft Power BI",
    certificate_powerbi_desc: "Curso completo de Microsoft Power BI para Business Intelligence e Data Science, abordando desde conceitos básicos até técnicas avançadas de análise e visualização de dados.",
    
    certificate_database_title: "Banco de Dados SQL",
    certificate_database_desc: "Curso completo de banco de dados relacional, abordando desde conceitos fundamentais até consultas avançadas em SQL, modelagem de dados e otimização de queries.",
    
    certificate_logic_title: "Lógica de Programação",
    certificate_logic_desc: "Curso introdutório à lógica de programação através do programa GFT Start #6, focado em fundamentos de algoritmos e estruturas de dados utilizando JavaScript.",
    
    certificate_ai_title: "Inteligência Artificial",
    certificate_ai_desc: "Imersão em Inteligência Artificial 2ª edição, abordando desde conceitos fundamentais até técnicas avançadas de machine learning e deep learning com Python.",
    
    certificate_java_title: "Java & Spring Boot",
    certificate_java_desc: "Minicurso especializado em Java e Spring Boot, abordando desde fundamentos da linguagem até desenvolvimento de APIs RESTful com boas práticas e padrões de projeto.",
    
    certificate_skills_developed: "Competências Desenvolvidas",
    certificate_category_programming: "Programação",
    
    // Skills
    skill_dashboards: "Dashboards",
    skill_data_analysis: "Análise de Dados",
    skill_spreadsheet_management: "Gerenciamento de Planilhas",
    skill_database: "Banco de Dados",
    skill_logic: "Lógica",
    skill_ai_fundamentals: "Fundamentos de IA",
    skill_supervised_learning: "Aprendizado Supervisionado",
    skill_data_preprocessing: "Pré-processamento de Dados",
      
      // Services
      services_title: "Serviços",
      service_1_title: "Desenvolvimento Full Stack",
      service_1_text: "Eu crio interfaces web modernas, performáticas e precisas para usuários.",
      service_2_text: "Desenvolvo sistemas robustos usando Java Spring, PHP e MySQL, garantindo segurança na manipulação de dados.",
      service_3_title: "UI/UX Design e Protótipos",
      service_3_text: "Crio layouts funcionais e intuitivos para o usuário, utilizando Figma, Canva e boas práticas de design UI/UX.",
      service_4_title: "Engenharia de Software",
      service_4_text: "Análise de requisitos, metodologias ágeis, controle de qualidade e documentação para sistemas robustos e alinhados ao negócio.",
      service_5_text: "Transformo necessidades do cliente em especificações técnicas claras, garantindo que o desenvolvimento siga objetivos estratégicos.",
      service_6_title: "Power BI e Análise de Dados",
      service_6_text: "Estruturo informações complexas em dashboards interativos, facilitando análise e tomada de decisões estratégicas.",
      see_button: "Saiba mais",
      
      // Soft Skills
      softskills_title: "Soft Skills",
      softskill_level: "Nível de experiência",

      softskill_proactivity_title: "Proatividade",
      softskill_proactivity_desc: "Antecipo necessidades e busco soluções antes que se tornem problemas, sempre pensando à frente para otimizar processos.",
      softskill_proactivity_item1: "Iniciativa em novos projetos",
      softskill_proactivity_item2: "Solução antecipada de problemas",
      softskill_proactivity_item3: "Melhoria contínua de processos",

      softskill_learning_title: "Aprendizado Contínuo",
      softskill_learning_desc: "Busco constantemente atualização em tecnologias e metodologias, mantendo-me à frente das tendências do mercado.",
      softskill_learning_item1: "Curiosidade intelectual",
      softskill_learning_item2: "Adaptação a novas tecnologias",
      softskill_learning_item3: "Compartilhamento de conhecimento",

      softskill_adaptability_title: "Adaptabilidade",
      softskill_adaptability_desc: "Ajusto-me rapidamente a mudanças, ambientes dinâmicos e novas exigências, mantendo a qualidade do trabalho.",
      softskill_adaptability_item1: "Flexibilidade em diferentes cenários",
      softskill_adaptability_item2: "Resiliência frente a mudanças",
      softskill_adaptability_item3: "Capacidade de pivotar quando necessário",

      
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
      tech_title: "Stack Tecnológica",
      
      // Contact
      contact_title: "Contato",
      contact_desc: "Clique no meu e-mail abaixo para enviar uma mensagem!",
      location_title: "Localização",
      location_text: "Mogi das Cruzes, São Paulo",
      contact_title_2: "Formas de contato",
      contact_phone: "Celular: (11) 97507-2008",
      contact_email: "Email: matheus.abib.ma@gmail.com",
      availability_title: "Disponibilidade",
      availability_text: "Segunda - Domingo: 8:00 - 20:00",
      
      // Footer
      footer_bio: "Desenvolvedor Full Stack & Engenheiro de Software.",

      footer_location: "Mogi das Cruzes, São Paulo",
      footer_fullname: "Matheus Bilitardo Abib",

      footer_quick_links_title: "Links Rápidos",
      footer_link_about: "Sobre mim",
      footer_link_methodologies: "Metodologias",
      footer_link_certificates: "Certificados",
      footer_link_services: "Serviços",
      footer_link_projects: "Projetos",
      footer_link_contact: "Contato",

      footer_specialties_title: "Especialidades",
      footer_specialty_fullstack: "Desenvolvimento Full Stack",
      footer_specialty_uiux: "UI/UX Design",
      footer_specialty_software: "Engenharia de Software",
      footer_specialty_powerbi: "Power BI & Análise de Dados",

      footer_talk_title: "Vamos Conversar",
      footer_newsletter_text: "Interessado em trabalhar juntos ou tem um projeto em mente?",

      footer_cta_title: "Entre em contato",
      footer_cta_text: "Estou disponível para discutir novas oportunidades",
      footer_cta_button: "Enviar Mensagem",

      footer_copyright: "© 2024 Matheus Abib. Todos os direitos reservados.",



      // Contact Form
      contact_form_title: "Envie sua mensagem",
      form_name: "Seu Nome",
      form_email: "Seu Email",
      form_subject: "Assunto",
      form_phone: "Telefone (opcional)",
      form_message: "Sua Mensagem",
      form_submit: "Enviar Mensagem",
      form_note: "Sua mensagem será enviada diretamente para mim e responderei o mais breve possível.",
      form_placeholder_name: "Digite seu nome",
      form_placeholder_email: "seu.email@exemplo.com",
      form_placeholder_subject: "Qual o assunto da mensagem?",
      form_placeholder_phone: "(11) 99999-9999",
      form_placeholder_message: "Escreva sua mensagem...",
      form_alternative: "Entre em contato também por: ",
      form_validation_name: "Por favor, preencha seu nome",
      form_validation_email: "Por favor, insira um email válido",
      form_validation_subject: "Por favor, insira o assunto",
      form_validation_message: "Por favor, escreva sua mensagem",
      form_success: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      form_error: " Ocorreu um erro ao enviar a mensagem. Tente novamente.",
      form_loading: "Enviando...",
      form_sent: "Enviado!",

      modal_fullstack_title: "Desenvolvimento Full Stack",
      modal_tech_title: "Principais Tecnologias",
      modal_tech_web_title: "Web",
      modal_tech_web_badge: "Front-end",
      modal_tech_web_desc: "Aplicações responsivas com HTML5, CSS3, JavaScript, TypeScript, SCSS e frameworks modernos como Bootstrap, PrimeNG e Angular.",
      modal_tech_performance_title: "Performance",
      modal_tech_performance_badge: "Back-end",
      modal_tech_performance_desc: "SEO técnico, experiência do usuário, APIs escaláveis e uso de banco de dados para armazenamento, consultas e organização das informações.",
      modal_strategy_title: "Minha estratégia",
      
      // Passos do processo
      modal_step_1_title: "Análise Técnica",
      modal_step_1_badge: "Planejamento",
      modal_step_1_desc: "Definição da melhor abordagem tecnológica para cada projeto, considerando requisitos, escalabilidade e manutenibilidade.",
      modal_step_1_tag1: "Requisitos",
      modal_step_1_tag2: "Arquitetura",
      modal_step_1_tag3: "MVP",
      
      modal_step_2_title: "Desenvolvimento",
      modal_step_2_badge: "Implementação",
      modal_step_2_desc: "Codificação limpa, organizada e fiel ao design, seguindo as melhores práticas do mercado.",
      modal_step_2_tag1: "Clean Code",
      modal_step_2_tag2: "Testes",
      modal_step_2_tag3: "Versionamento",
      
      modal_step_3_title: "Integração",
      modal_step_3_badge: "Conectividade",
      modal_step_3_desc: "Conexão com APIs e serviços externos para tornar a aplicação funcional em todas as plataformas e dispositivos.",
      modal_step_3_tag1: "APIs REST",
      modal_step_3_tag2: "Microservices",
      
      modal_step_4_title: "Otimização",
      modal_step_4_badge: "Finalização",
      modal_step_4_desc: "Ajustes finais de performance, acessibilidade e SEO técnico, garantindo a melhor experiência para o usuário final.",
      modal_step_4_tag1: "Performance",
      modal_step_4_tag2: "SEO",
      modal_step_4_tag3: "UX/UI",

      modal_fullstack_experience_title: "Experiência Prática",
      modal_fullstack_experience_desc: "Atuo como <strong>Desenvolvedor de Software</strong> em projetos institucionais para a Prefeitura de Mogi das Cruzes, contribuindo para o desenvolvimento de soluções digitais.",

      // UI/UX Modal
      modal_uiux_title: "UI/UX Design e Protótipos",
      modal_uiux_specialties_title: "Minhas Especialidades",
      modal_uiux_prototyping_title: "Prototipagem",
      modal_uiux_prototyping_badge: "Validação",
      modal_uiux_prototyping_desc: "Criação de protótipos interativos para testar fluxos e validar experiências antes do desenvolvimento, garantindo usabilidade e eficiência.",
      modal_uiux_experience_title: "Experiência Prática",
      modal_uiux_experience_desc: "Atuei com <strong>UX/UI Design</strong>, criando wireframes e protótipos interativos focados em interfaces claras e visualmente atrativas, com atenção à consistência e usabilidade.",
      modal_uiux_experience_strong: "UX/UI Design",
      modal_uiux_experience_highlights: "<strong>Destaques:</strong> Sistemas de componentes reutilizáveis, controle de qualidade e validação com stakeholders.",
      modal_uiux_view_projects: "Ver meus Figmas:",
      modal_uiux_process_title: "Meu Processo",
      modal_uiux_step1_title: "Imersão & Pesquisa",
      modal_uiux_step1_badge: "Fundação",
      modal_uiux_step1_desc: "Análise do negócio e público-alvo. Definição de personas e mapeamento de necessidades para direcionar o design.",
      modal_uiux_step1_tag1: "Pesquisa de Usuário",
      modal_uiux_step1_tag2: "Definição de Personas",
      modal_uiux_step2_title: "Wireframing",
      modal_uiux_step2_badge: "Estrutura",
      modal_uiux_step2_desc: "Criação de wireframes detalhados que definem a arquitetura da informação, hierarquia visual e fluxos de navegação essenciais.",
      modal_uiux_step2_tag1: "Fluxos de Usuário",
      modal_uiux_step2_tag2: "Wireframes",
      modal_uiux_step3_title: "Design Visual",
      modal_uiux_step3_badge: "Estética",
      modal_uiux_step3_desc: "Desenvolvimento da interface visual final com atenção à acessibilidade, responsividade e princípios de UI.",
      modal_uiux_step3_tag1: "UI Design",
      modal_uiux_step3_tag2: "Identidade Visual",
      modal_uiux_step3_tag3: "Responsividade",
      modal_uiux_step4_title: "Prototipagem & Testes",
      modal_uiux_step4_badge: "Validação",
      modal_uiux_step4_desc: "Criação de protótipos interativos para testes de usabilidade, validação de fluxos e refinamento antes da implementação final.",
      modal_uiux_step4_tag1: "Testes de Usabilidade",
      modal_uiux_step4_tag2: "Validação",
      modal_uiux_step4_tag3: "Iteração",

      // Engenharia de Software Modal
      modal_software_title: "Engenharia de Software",
      modal_software_specialties_title: "Minhas Especialidades",
      modal_software_requirements_title: "Engenharia de Requisitos",
      modal_software_requirements_badge: "Análise",
      modal_software_requirements_desc: "Elicitação, análise, especificação e validação de requisitos funcionais e não funcionais, garantindo alinhamento com objetivos de negócio.",
      modal_software_agile_title: "Metodologias Ágeis",
      modal_software_agile_badge: "Processo",
      modal_software_agile_desc: "Scrum, Kanban, DevOps. Planejamento iterativo, sprints, daily meetings e retrospectivas para entrega contínua de valor.",
      modal_software_quality_title: "Controle de Qualidade",
      modal_software_quality_badge: "Testes",
      modal_software_quality_desc: "Testes unitários, integração, sistema e aceitação. Garantia de qualidade através de revisões de código, análise estática e métricas.",
      modal_software_education_title: "Formação Acadêmica",
      modal_software_education_desc: "<strong>Análise e Desenvolvimento de Sistemas</strong> na Faculdade de Tecnologia de Mogi das Cruzes e <strong>Engenharia de Software</strong> na Universidade de Mogi das Cruzes.",
      modal_software_education_strong1: "Análise e Desenvolvimento de Sistemas",
      modal_software_education_strong2: "Engenharia de Software",
      modal_software_methodology_title: "Metodologia de Trabalho",
      modal_software_step1_title: "Levantamento de Requisitos",
      modal_software_step1_badge: "Entendimento",
      modal_software_step1_desc: "Análise detalhada das necessidades do cliente, definição de escopo, regras de negócio e documentação técnica inicial.",
      modal_software_step1_tag1: "Regras de Negócio",
      modal_software_step1_tag2: "Documentação",
      modal_software_step1_tag3: "Caso de uso",
      modal_software_step2_title: "Modelagem & Planejamento",
      modal_software_step2_badge: "Estrutura",
      modal_software_step2_desc: "UML, diagramas de caso de uso, classes, sequência. Definição de arquitetura, backlog do produto e planejamento de sprints.",
      modal_software_step2_tag1: "UML",
      modal_software_step2_tag2: "Arquitetura",
      modal_software_step2_tag3: "Backlog",
      modal_software_step3_title: "Desenvolvimento Iterativo",
      modal_software_step3_badge: "Implementação",
      modal_software_step3_desc: "Codificação com práticas ágeis, versionamento (Git), pair programming quando aplicável e integração contínua.",
      modal_software_step3_tag1: "SCRUM",
      modal_software_step3_tag2: "Git",
      modal_software_step3_tag3: "CI/CD",
      modal_software_step4_title: "Qualidade & Entrega",
      modal_software_step4_badge: "Validação",
      modal_software_step4_desc: "Testes rigorosos, revisões de código, garantia de qualidade, documentação final e deploy controlado.",
      modal_software_step4_tag1: "Testes Automatizados",
      modal_software_step4_tag2: "Code Review",
      modal_software_step4_tag3: "Deploy",
      modal_software_tools_title: "Ferramentas e Práticas",
      modal_software_tools_doc: "<strong>Documentação:</strong> Notion, Draw.io (UML)",
      modal_software_tools_management: "<strong>Gestão:</strong> Trello",
      modal_software_tools_quality: "<strong>Qualidade:</strong> Cypress, Selenium, Postman",
      modal_software_tools_version: "<strong>Versionamento:</strong> Git, GitHub",

      // Power BI Modal
      modal_powerbi_title: "Power BI & Análise de Dados",
      modal_powerbi_specialties_title: "Minhas Especialidades",
      modal_powerbi_dashboard_title: "Dashboard & Dados",
      modal_powerbi_dashboard_badge: "Análise",
      modal_powerbi_dashboard_desc: "Criação de dashboards interativos com gráficos dinâmicos e conexão com diversas fontes de dados: Excel, SQL Server, Oracle e APIs.",
      modal_powerbi_integration_title: "Integração de Dados",
      modal_powerbi_integration_badge: "ETL",
      modal_powerbi_integration_desc: "Conexão com diversas fontes: Excel, SQL Server, Oracle, APIs. Limpeza, transformação e modelagem de dados para análise.",
      modal_powerbi_excel_title: "Excel Avançado",
      modal_powerbi_excel_badge: "Análise",
      modal_powerbi_excel_desc: "Fórmulas complexas, tabelas dinâmicas, Power Query, macros e integração entre Excel e Power BI para análises robustas.",
      modal_powerbi_certification_title: "Certificação Power BI",
      modal_powerbi_certification_desc: "Concluí o curso <strong>Microsoft Power BI Para Business Intelligence e Data Science</strong>, adquirindo conhecimento em:",
      modal_powerbi_certification_strong: "Microsoft Power BI Para Business Intelligence e Data Science",
      modal_powerbi_certification_item1: "DAX (Data Analysis Expressions)",
      modal_powerbi_certification_item2: "Power Query para ETL",
      modal_powerbi_certification_item3: "Modelagem de dados relacionais",
      modal_powerbi_certification_item4: "Visualizações interativas",
      modal_powerbi_view_dashboards: "Ver meus Dashboards:",
      modal_powerbi_process_title: "Meu Processo de Análise",
      modal_powerbi_step1_title: "Coleta & Preparação",
      modal_powerbi_step1_badge: "ETL",
      modal_powerbi_step1_desc: "Conecto múltiplas fontes de dados (Excel, Oracle, SQL), realizo limpeza e transformação usando Power Query para garantir qualidade.",
      modal_powerbi_step1_tag1: "Power Query",
      modal_powerbi_step1_tag2: "Limpeza de Dados",
      modal_powerbi_step1_tag3: "Oracle",
      modal_powerbi_step2_title: "Modelagem & Relacionamentos",
      modal_powerbi_step2_badge: "Estrutura",
      modal_powerbi_step2_desc: "Crio modelos de dados relacionais, estabeleço conexões entre tabelas e aplico DAX para medidas e cálculos personalizados.",
      modal_powerbi_step2_tag1: "Modelagem",
      modal_powerbi_step2_tag2: "DAX",
      modal_powerbi_step2_tag3: "Relacionamentos",
      modal_powerbi_step3_title: "Visualização",
      modal_powerbi_step3_badge: "Design",
      modal_powerbi_step3_desc: "Desenvolvo dashboards intuitivos com gráficos interativos que contam histórias claras sobre os dados para diferentes públicos.",
      modal_powerbi_step3_tag1: "Dashboard",
      modal_powerbi_step3_tag2: "Storytelling",
      modal_powerbi_step3_tag3: "UX de Dados",
      modal_powerbi_step4_title: "Análise & Insights",
      modal_powerbi_step4_badge: "Valor",
      modal_powerbi_step4_desc: "Identifico padrões, tendências e oportunidades nos dados, gerando insights acionáveis para decisões estratégicas.",
      modal_powerbi_step4_tag1: "Insights",
      modal_powerbi_step4_tag2: "Tendências",
      modal_powerbi_step4_tag3: "Decisão",
      modal_powerbi_tools_title: "Tecnologias & Ferramentas",
      modal_powerbi_tools_bi: "<strong>BI:</strong> Microsoft Power BI, Power Query, DAX",
      modal_powerbi_tools_databases: "<strong>Bancos:</strong> Oracle Database, SQL Server, MySQL",
      modal_powerbi_tools_spreadsheets: "<strong>Planilhas:</strong> Excel Avançado",
      modal_powerbi_tools_visualization: "<strong>Visualização:</strong> Gráficos interativos, mapas",

      modal_access_projects_figma: "Acessar Projetos Figma",
      modal_access_projects_dashboards: "Acessar Projetos Power BI",


      footer_contact: "Contato Rápido",
      contact_footer_text: "Entre em contato para projetos ou oportunidades.",
      availability_footer: "Disponível de Seg a Dom",
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
      cv_portuguese: "Portuguese",
      cv_english: "English",
      
      // Features
      feature_1_title: "Enthusiast",
      feature_1_text: "Ready to apply my knowledge and collaborate for the company's growth.",
      feature_2_title: "Technical Excellence",
      feature_2_text: "Focus on intuitive interfaces, responsive design, and attention to detail for better user experience.",
      feature_3_title: "Communication",
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
      menu_certificates: "Certificates",
    
    // Certificates Section
    webdev_tab_title: "Web Development",
    powerbi_tab_title: "Power BI",
    database_tab_title: "Database",
    logic_tab_title: "Programming Logic",
    ai_tab_title: "Artificial Intelligence",
    java_tab_title: "Java",
    
    certificate_webdev_title: "HTML, CSS & JavaScript",
    certificate_webdev_desc: "Specialized course in front-end web development, covering fundamental technologies for building modern and responsive interfaces.",
    
    certificate_powerbi_title: "Microsoft Power BI",
    certificate_powerbi_desc: "Complete Microsoft Power BI course for Business Intelligence and Data Science, covering from basic concepts to advanced data analysis and visualization techniques.",
    
    certificate_database_title: "SQL Database",
    certificate_database_desc: "Complete relational database course, covering from fundamental concepts to advanced SQL queries, data modeling and query optimization.",
    
    certificate_logic_title: "Programming Logic",
    certificate_logic_desc: "Introductory course to programming logic through the GFT Start #6 program, focused on algorithm fundamentals and data structures using JavaScript.",
    
    certificate_ai_title: "Artificial Intelligence",
    certificate_ai_desc: "Artificial Intelligence Immersion 2nd edition, covering from fundamental concepts to advanced machine learning and deep learning techniques with Python.",
    
    certificate_java_title: "Java & Spring Boot",
    certificate_java_desc: "Specialized mini-course in Java and Spring Boot, covering from language fundamentals to RESTful API development with best practices and design patterns.",
    
    certificate_skills_developed: "Developed Skills",
    certificate_category_programming: "Programming",
    
    // Skills
    skill_dashboards: "Dashboards",
    skill_data_analysis: "Data Analysis",
    skill_spreadsheet_management: "Spreadsheet Management",
    skill_database: "Database",
    skill_logic: "Logic",
    skill_ai_fundamentals: "AI Fundamentals",
    skill_supervised_learning: "Supervised Learning",
    skill_data_preprocessing: "Data Preprocessing",
      
      // Services
      services_title: "Services",
      service_1_title: "Full Stack Development",
      service_1_text: "I create modern, high-performance, and precise web interfaces for users.",
      service_3_title: "UI/UX Design and Prototypes",
      service_3_text: "I create functional and intuitive layouts for users, using Figma, Canva and good UI/UX design practices.",
      service_4_title: "Software Engineering",
      service_4_text: "I perform continuous testing and evaluations to ensure systems function according to specifications and meet quality standards.",
      service_6_title: "Power BI and Data Analysis",
      service_6_text: "I structure complex information in interactive dashboards, facilitating analysis and strategic decision making.",
      see_button: "Learn More",
          
      // Soft Skills
        softskills_title: "Soft Skills",
        softskill_level: "Experience level",

        softskill_proactivity_title: "Proactivity",
        softskill_proactivity_desc: "I anticipate needs and seek solutions before they become problems, always thinking ahead to optimize processes.",
        softskill_proactivity_item1: "Initiative in new projects",
        softskill_proactivity_item2: "Early problem solving",
        softskill_proactivity_item3: "Continuous process improvement",

        softskill_learning_title: "Continuous Learning",
        softskill_learning_desc: "I constantly seek updates in technologies and methodologies, staying ahead of market trends.",
        softskill_learning_item1: "Intellectual curiosity",
        softskill_learning_item2: "Adaptation to new technologies",
        softskill_learning_item3: "Knowledge sharing",

        softskill_adaptability_title: "Adaptability",
        softskill_adaptability_desc: "I quickly adapt to changes, dynamic environments and new requirements while maintaining work quality.",
        softskill_adaptability_item1: "Flexibility in different scenarios",
        softskill_adaptability_item2: "Resilience to change",
        softskill_adaptability_item3: "Ability to pivot when necessary",

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
      
      // Footer - EN
      footer_bio: "Full Stack Developer & Software Engineer.",

      footer_location: "Mogi das Cruzes, São Paulo",
      footer_fullname: "Matheus Bilitardo Abib",

      footer_quick_links_title: "Quick Links",
      footer_link_about: "About Me",
      footer_link_methodologies: "Methodologies",
      footer_link_certificates: "Certificates",
      footer_link_services: "Services",
      footer_link_projects: "Projects",
      footer_link_contact: "Contact",

      footer_specialties_title: "Specialties",
      footer_specialty_fullstack: "Full Stack Development",
      footer_specialty_uiux: "UI/UX Design",
      footer_specialty_software: "Software Engineering",
      footer_specialty_powerbi: "Power BI & Data Analysis",

      footer_talk_title: "Let's Talk",
      footer_newsletter_text: "Interested in working together or have a project in mind?",

      footer_cta_title: "Get in touch",
      footer_cta_text: "I'm available to discuss new opportunities",
      footer_cta_button: "Send Message",

      footer_copyright: "© 2024 Matheus Abib. All rights reserved.",


          // Contact Form
      contact_form_title: "Send me a message",
      form_name: "Your Name",
      form_email: "Your Email",
      form_subject: "Subject",
      form_phone: "Phone (optional)",
      form_alternative: "You can also contact me via",
      form_message: "Your Message",
      form_submit: "Send Message",
      form_note: "Your message will be sent directly to me and I'll respond as soon as possible.",
      form_placeholder_name: "Enter your name",
      form_placeholder_email: "your.email@example.com",
      form_placeholder_subject: "What would you like to talk about?",
      form_placeholder_phone: "(11) 99999-9999",
      form_placeholder_message: "Write your message here...",
      form_validation_name: "Please fill in your name",
      form_validation_email: "Please enter a valid email",
      form_validation_subject: "Please enter the subject",
      form_validation_message: "Please write your message",
      form_success: " Message sent successfully! I'll contact you soon.",
      form_error: " An error occurred while sending the message. Please try again.",
      form_loading: "Sending...",
      form_sent: "Sent!",


    modal_fullstack_title: "Full Stack Development",
    modal_tech_title: "Main Technologies",
    modal_tech_web_title: "Web",
    modal_tech_web_badge: "Front-end",
    modal_tech_web_desc: "Responsive applications with HTML5, CSS3, JavaScript, PHP, TypeScript, SCSS and modern frameworks like Bootstrap, PrimeNG and Angular.",
    modal_tech_performance_title: "Performance",
    modal_tech_performance_badge: "Back-end",
    modal_tech_performance_desc: "Technical SEO, user experience, scalable APIs and use of databases for storage, queries and information organization.",
    modal_strategy_title: "My Strategy",
    
    // Process steps
    modal_step_1_title: "Technical Analysis",
    modal_step_1_badge: "Planning",
    modal_step_1_desc: "Definition of the best technological approach for each project, considering requirements, scalability and maintainability.",
    modal_step_1_tag1: "Requirements",
    modal_step_1_tag2: "Architecture",
    modal_step_1_tag3: "MVP",
    
    modal_step_2_title: "Development",
    modal_step_2_badge: "Implementation",
    modal_step_2_desc: "Clean, organized and design-faithful coding, following market best practices.",
    modal_step_2_tag1: "Clean Code",
    modal_step_2_tag2: "Testing",
    modal_step_2_tag3: "Versioning",
    
    modal_step_3_title: "Integration",
    modal_step_3_badge: "Connectivity",
    modal_step_3_desc: "Connection with APIs and external services to make the application functional on all platforms and devices.",
    modal_step_3_tag1: "REST APIs",
    modal_step_3_tag2: "Microservices",
    
    modal_step_4_title: "Optimization",
    modal_step_4_badge: "Finalization",
    modal_step_4_desc: "Final performance, accessibility and technical SEO adjustments, ensuring the best experience for the end user.",
    modal_step_4_tag1: "Performance",
    modal_step_4_tag2: "SEO",
    modal_step_4_tag3: "UX/UI",

    modal_fullstack_experience_title: "Practical Experience",
    modal_fullstack_experience_desc: "I work as a <strong>Software Developer</strong> on institutional projects for the City Hall of Mogi das Cruzes, contributing to the development of digital solutions.",

    // UI/UX Modal 
    modal_uiux_title: "UI/UX Design and Prototypes",
    modal_uiux_specialties_title: "My Specialties",
    modal_uiux_prototyping_title: "Prototyping",
    modal_uiux_prototyping_badge: "Validation",
    modal_uiux_prototyping_desc: "Creation of interactive prototypes to test flows and validate experiences before development, ensuring usability and efficiency.",
    modal_uiux_experience_title: "Practical Experience",
    modal_uiux_experience_desc: "I worked with <strong>UX/UI Design</strong>, creating wireframes and interactive prototypes focused on clear and visually attractive interfaces, with attention to consistency and usability.",
    modal_uiux_experience_strong: "UX/UI Design",
    modal_uiux_experience_highlights: "<strong>Highlights:</strong> Reusable component systems, quality control and validation with stakeholders.",
    modal_uiux_view_projects: "View my Figmas:",
    modal_uiux_process_title: "My Process",
    modal_uiux_step1_title: "Immersion & Research",
    modal_uiux_step1_badge: "Foundation",
    modal_uiux_step1_desc: "Analysis of business and target audience. Definition of personas and mapping of needs to guide design.",
    modal_uiux_step1_tag1: "User Research",
    modal_uiux_step1_tag2: "Persona Definition",
    modal_uiux_step2_title: "Wireframing",
    modal_uiux_step2_badge: "Structure",
    modal_uiux_step2_desc: "Creation of detailed wireframes that define information architecture, visual hierarchy and essential navigation flows.",
    modal_uiux_step2_tag1: "User Flows",
    modal_uiux_step2_tag2: "Wireframes",
    modal_uiux_step3_title: "Visual Design",
    modal_uiux_step3_badge: "Aesthetics",
    modal_uiux_step3_desc: "Development of the final visual interface with attention to accessibility, responsiveness and UI principles.",
    modal_uiux_step3_tag1: "UI Design",
    modal_uiux_step3_tag2: "Visual Identity",
    modal_uiux_step3_tag3: "Responsiveness",
    modal_uiux_step4_title: "Prototyping & Testing",
    modal_uiux_step4_badge: "Validation",
    modal_uiux_step4_desc: "Creation of interactive prototypes for usability tests, flow validation and refinement before final implementation.",
    modal_uiux_step4_tag1: "Usability Testing",
    modal_uiux_step4_tag2: "Validation",
    modal_uiux_step4_tag3: "Iteration",

    // Software Engineering Modal (English)
    modal_software_title: "Software Engineering",
    modal_software_specialties_title: "My Specialties",
    modal_software_requirements_title: "Requirements Engineering",
    modal_software_requirements_badge: "Analysis",
    modal_software_requirements_desc: "Elicitation, analysis, specification and validation of functional and non-functional requirements, ensuring alignment with business objectives.",
    modal_software_agile_title: "Agile Methodologies",
    modal_software_agile_badge: "Process",
    modal_software_agile_desc: "Scrum, Kanban, DevOps. Iterative planning, sprints, daily meetings and retrospectives for continuous value delivery.",
    modal_software_quality_title: "Quality Control",
    modal_software_quality_badge: "Testing",
    modal_software_quality_desc: "Unit, integration, system and acceptance tests. Quality assurance through code reviews, static analysis and metrics.",
    modal_software_education_title: "Academic Education",
    modal_software_education_desc: "<strong>Systems Analysis and Development</strong> at Mogi das Cruzes Technology College and <strong>Software Engineering</strong> at University of Mogi das Cruzes.",
    modal_software_education_strong1: "Systems Analysis and Development",
    modal_software_education_strong2: "Software Engineering",
    modal_software_methodology_title: "Work Methodology",
    modal_software_step1_title: "Requirements Gathering",
    modal_software_step1_badge: "Understanding",
    modal_software_step1_desc: "Detailed analysis of client needs, scope definition, business rules and initial technical documentation.",
    modal_software_step1_tag1: "Business Rules",
    modal_software_step1_tag2: "Documentation",
    modal_software_step1_tag3: "Use Case",
    modal_software_step2_title: "Modeling & Planning",
    modal_software_step2_badge: "Structure",
    modal_software_step2_desc: "UML, use case diagrams, classes, sequence. Architecture definition, product backlog and sprint planning.",
    modal_software_step2_tag1: "UML",
    modal_software_step2_tag2: "Architecture",
    modal_software_step2_tag3: "Backlog",
    modal_software_step3_title: "Iterative Development",
    modal_software_step3_badge: "Implementation",
    modal_software_step3_desc: "Coding with agile practices, versioning (Git), pair programming when applicable and continuous integration.",
    modal_software_step3_tag1: "SCRUM",
    modal_software_step3_tag2: "Git",
    modal_software_step3_tag3: "CI/CD",
    modal_software_step4_title: "Quality & Delivery",
    modal_software_step4_badge: "Validation",
    modal_software_step4_desc: "Rigorous testing, code reviews, quality assurance, final documentation and controlled deployment.",
    modal_software_step4_tag1: "Automated Tests",
    modal_software_step4_tag2: "Code Review",
    modal_software_step4_tag3: "Deploy",
    modal_software_tools_title: "Tools and Practices",
    modal_software_tools_doc: "<strong>Documentation:</strong> Notion, Draw.io (UML)",
    modal_software_tools_management: "<strong>Management:</strong> Trello",
    modal_software_tools_quality: "<strong>Quality:</strong> Cypress, Selenium, Postman",
    modal_software_tools_version: "<strong>Versioning:</strong> Git, GitHub",

    // Power BI Modal (English)
    modal_powerbi_title: "Power BI & Data Analysis",
    modal_powerbi_specialties_title: "My Specialties",
    modal_powerbi_dashboard_title: "Dashboard & Data",
    modal_powerbi_dashboard_badge: "Analysis",
modal_powerbi_dashboard_desc: "Development of interactive dashboards with dynamic charts, integrated with multiple data sources such as Excel, SQL Server, Oracle, and APIs, focusing on data cleaning, processing, and analysis.",
    modal_powerbi_integration_title: "Data Integration",
    modal_powerbi_integration_badge: "ETL",
    modal_powerbi_integration_desc: "Connection with various sources: Excel, SQL Server, Oracle, APIs. Data cleaning, transformation and modeling for analysis.",
    modal_powerbi_excel_title: "Advanced Excel",
    modal_powerbi_excel_badge: "Analysis",
    modal_powerbi_excel_desc: "Complex formulas, pivot tables, Power Query, macros and integration between Excel and Power BI for robust analysis.",
    modal_powerbi_certification_title: "Power BI Certification",
    modal_powerbi_certification_desc: "Completed the course <strong>Microsoft Power BI Para Business Intelligence e Data Science</strong>, acquiring knowledge in:",
    modal_powerbi_certification_strong: "Microsoft Power BI Para Business Intelligence e Data Science",
    modal_powerbi_certification_item1: "DAX (Data Analysis Expressions)",
    modal_powerbi_certification_item2: "Power Query for ETL",
    modal_powerbi_certification_item3: "Relational data modeling",
    modal_powerbi_certification_item4: "Interactive visualizations",
    modal_powerbi_view_dashboards: "View my Dashboards:",
    modal_powerbi_process_title: "My Analysis Process",
    modal_powerbi_step1_title: "Collection & Preparation",
    modal_powerbi_step1_badge: "ETL",
    modal_powerbi_step1_desc: "I connect multiple data sources (Excel, Oracle, SQL), perform cleaning and transformation using Power Query to ensure quality.",
    modal_powerbi_step1_tag1: "Power Query",
    modal_powerbi_step1_tag2: "Data Cleaning",
    modal_powerbi_step1_tag3: "Oracle",
    modal_powerbi_step2_title: "Modeling & Relationships",
    modal_powerbi_step2_badge: "Structure",
    modal_powerbi_step2_desc: "I create relational data models, establish connections between tables and apply DAX for custom measures and calculations.",
    modal_powerbi_step2_tag1: "Modeling",
    modal_powerbi_step2_tag2: "DAX",
    modal_powerbi_step2_tag3: "Relationships",
    modal_powerbi_step3_title: "Visualization",
    modal_powerbi_step3_badge: "Design",
    modal_powerbi_step3_desc: "I develop intuitive dashboards with interactive charts that tell clear stories about data for different audiences.",
    modal_powerbi_step3_tag1: "Dashboard",
    modal_powerbi_step3_tag2: "Storytelling",
    modal_powerbi_step3_tag3: "Data UX",
    modal_powerbi_step4_title: "Analysis & Insights",
    modal_powerbi_step4_badge: "Value",
    modal_powerbi_step4_desc: "I identify patterns, trends and opportunities in data, generating actionable insights for strategic decisions.",
    modal_powerbi_step4_tag1: "Insights",
    modal_powerbi_step4_tag2: "Trends",
    modal_powerbi_step4_tag3: "Decision",
    modal_powerbi_tools_title: "Technologies & Tools",
    modal_powerbi_tools_bi: "<strong>BI:</strong> Microsoft Power BI, Power Query, DAX",
    modal_powerbi_tools_databases: "<strong>Databases:</strong> Oracle Database, SQL Server, MySQL",
    modal_powerbi_tools_spreadsheets: "<strong>Spreadsheets:</strong> Advanced Excel",
    modal_powerbi_tools_visualization: "<strong>Visualization:</strong> Interactive charts, maps",

    modal_access_projects_figma: "Open Figma projects",
    modal_access_projects_dashboards: "Open Power BI projects",


    footer_contact: "Quick Contact",
    contact_footer_text: "Get in touch for projects or opportunities.",
    availability_footer: "Available from Mon to Sun",

    }
  };

  class Translator {
    constructor() {
      this.currentLang = localStorage.getItem('portfolio_lang') || 'pt';
      this.init();
    }
    
    init() {
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
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[this.currentLang][key]) {
      const translation = translations[this.currentLang][key];
      const hasHtml = /<\/?[a-z][\s\S]*>/i.test(translation);
      
      if (hasHtml) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
  
  this.translateBySelectors();
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
        this.updateText('#services .section-title h2', 'services_title');

      
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
      
      
      const contactInfo = document.querySelector('.info-card:nth-child(2) p');
      if (contactInfo) {
        const phoneText = translations[this.currentLang]['contact_phone'];
        const emailHtml = `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=matheus.abib.ma@gmail.com" target="_blank">${translations[this.currentLang]['contact_email']}</a>`;
        contactInfo.innerHTML = `${phoneText}<br>${emailHtml}`;
      }
      
      this.updateText('.info-card:nth-child(3) p', 'availability_text');
      
      this.translateFooterExtra();



const nameInput = document.getElementById('name');
const emailInput = document.getElementById('userEmail');
const subjectInput = document.getElementById('subject');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const submitBtn = document.querySelector('.btn-submit');

if (nameInput) nameInput.placeholder = translations[this.currentLang]['form_placeholder_name'];
if (emailInput) emailInput.placeholder = translations[this.currentLang]['form_placeholder_email'];
if (subjectInput) subjectInput.placeholder = translations[this.currentLang]['form_placeholder_subject'];
if (phoneInput) phoneInput.placeholder = translations[this.currentLang]['form_placeholder_phone'];
if (messageInput) messageInput.placeholder = translations[this.currentLang]['form_placeholder_message'];

if (submitBtn) {
  const icon = submitBtn.querySelector('i');
  const span = document.createElement('span');
  if (submitBtn.querySelector('span')) {
    submitBtn.querySelector('span').textContent = translations[this.currentLang]['form_submit'];
  } else {
    span.textContent = translations[this.currentLang]['form_submit'];
    submitBtn.innerHTML = '';
    if (icon) submitBtn.appendChild(icon.cloneNode(true));
    submitBtn.appendChild(span);
  }
}
      
    }
    
    translateCertificatesContent() {
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
      document.documentElement.lang = this.currentLang;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.content = this.currentLang === 'pt' 
          ? "Portfólio de Matheus Abib - Desenvolvedor Web Full Stack"
          : "Matheus Abib Portfolio - Full Stack Web Developer";
      }
    }

    translatePortfolioProjects() {
      
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


      projectMap.forEach(({ selector, key }) => {
        const element = document.querySelector(selector);
        if (element && translations[this.currentLang][key]) {
          element.textContent = translations[this.currentLang][key];
        }
      });
      
      const allProjectTitles = document.querySelectorAll('.portfolio-content h3');
      allProjectTitles.forEach((title, index) => {
        if (index < projectMap.length && translations[this.currentLang][projectMap[index].key]) {
          title.textContent = translations[this.currentLang][projectMap[index].key];
        }
      });
    }
  }

  function setupCertificateModal() {
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
    
    const images = document.querySelectorAll('.service-details img.img-fluid.rounded-4');
    
    images.forEach(img => {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        display: block;
      `;
      
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      
      wrapper.onmouseenter = () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
      };
      wrapper.onmouseleave = () => {
        img.style.transform = 'scale(1)';
      };
      
      wrapper.onclick = () => {
        console.log('Abrindo:', img.src);
        modal.style.display = 'flex';
        modalImg.src = img.src;
        document.body.style.overflow = 'hidden';
      };
    });
    
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    };
  }

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
      this.handleResize();
      window.addEventListener('resize', () => this.handleResize());
      
      this.applyAllMediaQueries();
    }
    
    handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      this.updateBodyClasses(width, height);
    }
    
    updateBodyClasses(width, height) {
      const body = document.body;
      
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
      
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        body.classList.add('is-touch');
      } else {
        body.classList.add('is-hover');
      }
      
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
            padding: 15px 16px;
            font-size: 14px;
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
            .footer{
            margin-bottom: -11%;
            }

          .section-title h2{
          font-size: 34px
          }

          .portfolio .portfolio-filters{
          gap: 15px;

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
            padding: 18% 0 10%;
       
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
          width: 40px;
          height: 40px;
          font-size: 1rem;
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
            background: linear-gradient(145deg,
 color-mix(in srgb, var(--accent-color), transparent 95%), var(--surface-color));
    border: 2px solid
 color-mix(in srgb, var(--accent-color), transparent 85%);
          }

          .how-we-work::before {
            display: none;
          }

          .how-we-work::after {
            display: none;
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
            font-size: 2.4rem;
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
            font-size: 1.6rem;
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

        /* ===================== RESPONSIVIDADE DO MODAL ===================== */

/* Para telas grandes (acima de 1200px) */
@media (min-width: 1200px) {
  .service-modal .modal-dialog {
    max-width: 1100px;
  }
}

/* Para tablets grandes e desktops pequenos (992px - 1199px) */
@media (max-width: 1199px) and (min-width: 992px) {
  .service-modal .modal-dialog {
    max-width: 95%;
    margin: 20px auto;
  }
  
  .modal-grid {
    gap: 1.5rem;
  }
  
  .tech-card {
    padding: 1.4rem;
  }
  
  .step-content-passo {
    padding: 1rem;
  }
}

/* Para tablets (768px - 991px) */
@media (max-width: 991px) and (min-width: 768px) {
  .service-modal .modal-dialog {
    max-width: 95%;
    margin: 15px auto;
  }
  
  .service-modal .modal-header {
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .modal-header-content {
    width: 100%;
  }
  
  .btn-close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .modal-column {
    gap: 1.5rem;
  }
  
  .modal-section {
    padding: 1.5rem;
  }
  
  .tech-cards {
    gap: 1.5rem;
  }
  
  .tech-card {
    padding: 1.4rem;
  }
  
  .tech-card-header {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .tech-header-left {
    flex-wrap: wrap;
  }
  
  .process-timeline {
    padding-left: 35px;
  }
  
  .step-indicator {
    left: -35px;
  }
  
  .step-number-passo {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
  
  .step-line {
    top: 35px;
    height: calc(100% + 1.5rem);
  }
  
  .step-content-passo {
    margin-left: 0.8rem;
  }
}

/* Para celulares grandes e tablets pequenos (576px - 767px) */
@media (max-width: 767px) and (min-width: 576px) {
  .service-modal .modal-dialog {
    max-width: 95%;
    margin: 10px auto;
  }
  
  .service-modal .modal-content {
    border-radius: 20px;
  }
  
  .service-modal .modal-header {
    padding: 1.25rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .modal-header-content {
    width: 100%;
    padding-right: 40px; /* Espaço para o botão fechar */
  }
  
  .service-modal .modal-title {
    font-size: 1.5rem;
  }
  
  .btn-close-modal {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  
  .modal-column {
    gap: 1.25rem;
  }
  
  .modal-section {
    padding: 1.25rem;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 1rem;
  }
  
  .section-header h3 {
    font-size: 1.3rem;
  }
  
  .section-icon {
    width: 36px;
    height: 36px;
  }
  
  .section-icon i {
    font-size: 1.1rem;
  }
  
  /* Tecnologias - Responsividade */
  .tech-section .section-title {
    font-size: 1rem;
  }
  
  .tech-cards {
    gap: 1rem;
  }
  
  .tech-card {
    padding: 1.2rem;
  }
  
  .tech-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .tech-header-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .tech-card-body h5 {
    font-size: 1.1rem;
  }
  
  .tech-card-body p {
    font-size: 0.85rem;
  }
  
  .tech-stack {
    gap: 0.4rem;
  }
  
  .stack-tag {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
  
  /* Processo - Responsividade */
  .process-timeline {
    padding-left: 30px;
  }
  
  .step-indicator {
    left: -30px;
  }
  
  .step-number-passo {
    width: 30px;
    height: 30px;
    font-size: 0.75rem;
  }
  
  .step-line {
    top: 30px;
    height: calc(100% + 1rem);
  }
  
  .step-content-passo {
    margin-left: 0.6rem;
    padding: 0.9rem;
  }
  
  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 0.6rem;
  }
  
  .step-header h4 {
    font-size: 1rem;
  }
  
  .step-badge {
    font-size: 0.7rem;
    padding: 3px 8px;
  }
  
  .step-content-passo p {
    font-size: 0.85rem;
  }
  
  .step-tags {
    gap: 0.4rem;
  }
  
  .step-tags .tag {
    font-size: 0.7rem;
    padding: 3px 8px;
  }
}

/* Para celulares pequenos (abaixo de 576px) */
@media (max-width: 575px) {
  .service-modal .modal-dialog {
    margin: 5px;
    max-width: calc(100% - 10px);
  }
  
  .service-modal .modal-content {
    border-radius: 16px;
  }
  
  .service-modal .modal-header {
    padding: 1rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .modal-header-content {
    width: 100%;
    padding-right: 35px;
  }
  
  .service-modal .modal-title {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
  
  .btn-close-modal {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
  
  .modal-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0rem;
  }
  
  .modal-column {
    gap: 1rem;
    border-left: none !important;
  }
  
  .modal-section {
    padding: 0rem;
  }
  
  .section-header {
    margin-bottom: 1rem;
  }
  
  .section-header h3 {
    font-size: 1.2rem;
  }
  
  .section-icon {
    width: 32px;
    height: 32px;
  }
  
  .section-icon i {
    font-size: 1rem;
  }
  
  /* Tecnologias - Responsividade Mobile */
  .tech-section .section-title {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  .tech-cards {
    gap: 0.8rem;
  }
  
  .tech-card {
    padding: 1rem;
  }
  
  .tech-card-header {
    align-items: flex-start;
    gap: 8px;
  }
  
  .tech-header-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  
  .tech-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .tech-header-left h5 {
    font-size: 1rem;
  }
  
  .tech-badge {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
  
  .tech-card-body h5 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
  
  .tech-card-body p {
    font-size: 0.8rem;
    line-height: 1.4;
    margin: 0.6rem 0;
  }
  
  .stack-tag {
    font-size: 0.65rem;
    padding: 0.2rem 0.5rem;
  }
  
  /* Processo - Responsividade Mobile */
  .process-timeline {
    padding-left: 25px;
  }
  
  .process-timeline::before {
    left: 12px;
  }
  
  .process-step {
    margin-bottom: 0.8rem;
  }
  
  .step-indicator {
    left: -25px;
  }
  
  .step-number-passo {
    width: 25px;
    height: 25px;
    font-size: 0.7rem;
  }
  
  .step-line {
    top: 25px;
    left: 12.5px;
    height: calc(100% + 0.8rem);
  }
  
  .step-content-passo {
    margin-left: 0.4rem;
    padding: 0.8rem;
    border-top-width: 1px;
  }
  
  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 0.5rem;
  }
  
  .step-header h4 {
    font-size: 0.95rem;
  }
  
  .step-badge {
    font-size: 0.65rem;
    padding: 2px 6px;
  }
  
  .step-content-passo p {
    font-size: 0.8rem;
    line-height: 1.4;
    margin-bottom: 0.6rem;
  }
  
  .step-tags {
    gap: 0.3rem;
  }
  
  .step-tags .tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }
  
  /* Efeitos de hover removidos em mobile para melhor experiência touch */
  @media (hover: none) and (pointer: coarse) {
    .tech-card:hover,
    .process-step:hover .step-content-passo {
      transform: none;
    }
    
    .tech-card:active,
    .process-step:active .step-content-passo {
      border-color: var(--accent-color);
      transform: scale(0.98);
    }
  }
}

/* Para telas muito pequenas (abaixo de 360px) */
@media (max-width: 360px) {
  .service-modal .modal-dialog {
    margin: 2px;
    max-width: calc(100% - 4px);
  }
  
  .service-modal .modal-header {
    padding: 0.8rem 1rem;
  }
  
  .service-modal .modal-title {
    font-size: 1.2rem;
  }
  
  .modal-grid {
    padding: 0.8rem;
    gap: 0.8rem;
  }
  
  .modal-section {
    padding: 0.8rem;
  }
  
  .section-header h3 {
    font-size: 1.1rem;
  }
  
  .tech-card,
  .step-content-passo {
    padding: 0.8rem;
  }
  
  .stack-tag,
  .step-tags .tag {
    font-size: 0.6rem;
    padding: 0.15rem 0.4rem;
  }
}

/* Ajustes para orientação paisagem em celulares */
@media (max-height: 600px) and (orientation: landscape) {
  .service-modal .modal-dialog {
    max-height: 90vh;
  }
  
  .service-modal .modal-content {
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  
  .modal-section {
    padding: 1rem;
  }
  
  .tech-cards,
  .process-timeline {
    max-height: 250px;
    overflow-y: auto;
  }
  
  /* Scrollbar personalizada */
  .tech-cards::-webkit-scrollbar,
  .process-timeline::-webkit-scrollbar {
    width: 4px;
  }
  
  .tech-cards::-webkit-scrollbar-track,
  .process-timeline::-webkit-scrollbar-track {
    background: color-mix(in srgb, var(--default-color), transparent 90%);
    border-radius: 2px;
  }
  
  .tech-cards::-webkit-scrollbar-thumb,
  .process-timeline::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 2px;
  }
}

/* Melhorias de acessibilidade para foco */
.service-modal .btn-close-modal:focus,
.tech-card:focus,
.step-content-passo:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Transições suaves para mudanças de layout */
.modal-grid,
.modal-section,
.tech-card,
.step-content-passo {
  transition: all 0.3s ease;
}

/* Otimização para telas com preferência por movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .service-modal .modal-dialog,
  .modal-grid,
  .modal-section,
  .tech-card,
  .step-content-passo,
  .btn-close-modal {
    transition: none;
    animation: none;
  }
}
      `;
      
      this.styles.textContent = css;
    }
    
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
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
    
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }
    
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
    
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', toggleMobileDropdown);
    });
    
    window.addEventListener('load', removePreloader);
    
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      scrollTop.addEventListener('click', scrollToTop);
      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
    }
    
    window.addEventListener('load', aosInit);
    
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
    
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
    
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
    
function initSwiper() {
  $('.slick-slider').slick({
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
    
    window.addEventListener("load", initSwiper);
    
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
          }, 50);
        }
      }
    });
    
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
    
    setupCertificateModal();
    
    const translator = new Translator();
    
    const dynamicMedia = new DynamicMediaQueries();
    
    window.dynamicMedia = dynamicMedia;
    
    const contactForm = document.querySelector('.php-email-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
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
      setupSmoothScrollAnchors();

  });


  
  
})();

function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.portfolio-filters li');
  let activeFilters = new Set();
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const filter = this.getAttribute('data-filter');
      
      if (filter === '*') {
        activeFilters.clear();
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');
        
        document.querySelectorAll('.portfolio-item').forEach(item => {
          item.style.display = 'block';
        });
      } else {
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
          this.classList.remove('filter-active');
        } else {
          const allFilter = document.querySelector('[data-filter="*"]');
          if (allFilter && allFilter.classList.contains('filter-active')) {
            allFilter.classList.remove('filter-active');
            activeFilters.delete('*');
          }
          
          activeFilters.add(filter);
          this.classList.add('filter-active');
        }
        
        applyCombinedFilters();
      }
    });
  });
  
  function applyCombinedFilters() {
    const items = document.querySelectorAll('.portfolio-item');
    
    if (activeFilters.size === 0) {
      items.forEach(item => {
        item.style.display = 'block';
      });
      return;
    }
    
    items.forEach(item => {
      const itemClasses = Array.from(item.classList);
      
      let shouldShow = true;
      activeFilters.forEach(filter => {
        const className = filter.replace('.', '');
        if (!itemClasses.includes(className)) {
          shouldShow = false;
        }
      });
      
      if (shouldShow) {
        item.style.display = 'block';
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

function closeModal() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('fullstackModal'));
  if (modal) {
    modal.hide();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const budgetBtn = document.querySelector('.btn-modal-primary');
  if (budgetBtn) {
    budgetBtn.addEventListener('click', function(e) {
      if (!this.getAttribute('href').startsWith('#')) {
        this.innerHTML = '<i class="bi bi-hourglass-split"></i> Processando...';
        this.classList.add('loading');
        setTimeout(() => {
          closeModal();
        }, 1500);
      }
    });
  }
});

function setupSmoothScrollAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement && window.lenisInstance) {
          window.lenisInstance.scrollTo(targetElement, {
            offset: -98, 
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
          
          history.pushState(null, null, href);
        }
      }
    });
  });
}//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const submitBtn = form.querySelector('.form-submit');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitLoader = submitBtn.querySelector('.submit-loader');
    
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const feedback = field.closest('.form-group').querySelector('.form-feedback');
        
        feedback.style.display = 'none';
        field.classList.remove('error', 'success');
        
        if (field.hasAttribute('required') && !value) {
            showError(field, feedback, 'Este campo é obrigatório');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(field, feedback, 'Por favor, insira um email válido');
                return false;
            }
        }
        
        if (field.id === 'phone' && value) {
            const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
            if (!phoneRegex.test(value)) {
                showError(field, feedback, 'Por favor, insira um telefone válido');
                return false;
            }
        }
        
        if (value) {
            field.classList.add('success');
            feedback.style.display = 'none';
        }
        
        return true;
    }
    
    function showError(field, feedback, message) {
        field.classList.add('error');
        feedback.textContent = message;
        feedback.classList.add('error');
        feedback.style.display = 'block';
    }
    
    function clearFieldError(field) {
        field.classList.remove('error');
        const feedback = field.closest('.form-group').querySelector('.form-feedback');
        feedback.style.display = 'none';
    }
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showMessage('Por favor, corrija os erros no formulário.', 'error');
            return;
        }
        
        submitBtn.classList.add('form-loading');
        
        try {
            const formData = new FormData(form);
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const response = await fetch('/', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                form.classList.add('form-success');
                form.reset();
                
                inputs.forEach(input => {
                    input.classList.remove('success');
                });
            } else {
                throw new Error('Erro ao enviar formulário');
            }
        } catch (error) {
            showMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.', 'error');
        } finally {
            submitBtn.classList.remove('form-loading');
        }
    });
    
    function showMessage(message, type) {
        const responseDiv = document.getElementById('formResponse');
        responseDiv.textContent = message;
        responseDiv.className = `form-feedback mt-3 text-center ${type}`;
        responseDiv.style.display = 'block';
        
        responseDiv.style.marginTop = '1.5rem';
        responseDiv.style.padding = '1rem 1.5rem';
        responseDiv.style.borderRadius = '10px';
        responseDiv.style.fontWeight = '500';
        
        if (type === 'success') {
            responseDiv.style.background = 'rgba(46, 213, 115, 0.1)';
            responseDiv.style.border = '1px solid rgba(46, 213, 115, 0.3)';
            responseDiv.style.color = '#2ed573';
        } else {
            responseDiv.style.background = 'rgba(255, 71, 87, 0.1)';
            responseDiv.style.border = '1px solid rgba(255, 71, 87, 0.3)';
            responseDiv.style.color = '#ff4757';
        }
        
        responseDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setTimeout(() => {
            responseDiv.style.display = 'none';
        }, 5000);
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) value = value.substring(0, 11);
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.certificate-tab-btn');
    const tabs = document.querySelectorAll('.certificate-tab');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
});