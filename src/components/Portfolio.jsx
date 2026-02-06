import React, { useState } from 'react';
import { usePortfolioScroll } from '../hooks/usePortfolioScroll';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const { portfolioRef } = usePortfolioScroll();

  const projects = [
    {
      id: 1,
      title: "Floricultura Web",
      title_key: "project_floricultura",
      description_key: "project_floricultura_desc",
      category: "Website",
      filter: "web",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Floricultura-Web.png",
      github: "https://github.com/MatheusAbib/Floricultura-Web",
      live: "https://matheusabib.github.io/Floricultura-Web/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Jornal de Receitas",
      title_key: "project_receitas",
      description_key: "project_receitas_desc",
      category: "Website",
      filter: "web",
      stack: "fullstack",
      image: "/assets/img/portfolio/Jornal-de-Receitas.png",
      github: "https://github.com/MatheusAbib/Jornal-de-Receitas",
      live: "https://jornal-de-receitas-b6ti.onrender.com",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL"]
    },
    {
      id: 3,
      title: "Dashboard de Vendas",
      title_key: "project_dashboard",
      description_key: "project_dashboard_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack",
      image: "/assets/img/portfolio/Dashboard.png",
      github: "https://github.com/MatheusAbib/Dashboard-Vendas",
      live: "https://dashboard-vendas.cleverapps.io/",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Charts"]
    },
    {
      id: 4,
      title: "E-Commerce - Livros Online",
      title_key: "project_livros",
      description_key: "project_livros_desc",
      category: "Website",
      filter: "web",
      stack: "fullstack",
      image: "/assets/img/portfolio/Livraria-Online.png",
      github: "https://github.com/MatheusAbib/e-commerce-livraria",
      preview: "/assets/img/portfolio/Livraria-Online.png",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL"]
    },
    {
      id: 5,
      title: "Calendário",
      title_key: "project_calendario",
      description_key: "project_calendario_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Calendario.png",
      github: "https://github.com/MatheusAbib/Calendario",
      live: "https://matheusabib.github.io/Calendario/",
      tags: ["HTML", "CSS", "JavaScript", "Date API"]
    },
    {
      id: 6,
      title: "Jogo da Forca",
      title_key: "project_forca",
      description_key: "project_forca_desc",
      category: "FUN",
      filter: "brand",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Jogo-da-Forca.png",
      github: "https://github.com/MatheusAbib/Jogo-da-Forca",
      live: "https://matheusabib.github.io/Jogo-da-Forca/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 7,
      title: "CRUD - Formulário de Cadastro",
      title_key: "project_crud",
      description_key: "project_crud_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack",
      image: "/assets/img/portfolio/CRUD-Cadastro.png",
      github: "https://github.com/MatheusAbib/Formulario-Cliente",
      preview: "/assets/img/portfolio/CRUD-Cadastro.png",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL"]
    },
    {
      id: 8,
      title: "Meus Dashboards Power BI",
      title_key: "project_dashboards",
      description_key: "project_dashboards_desc",
      category: "Links",
      filter: "links",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Tela-Power-BI.png",
      github: "https://github.com/MatheusAbib/Tela-de-Links-PowerBI",
      live: "https://matheusabib.github.io/Tela-de-Links-PowerBI/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 9,
      title: "Mapa de Tarefas",
      title_key: "project_tarefas",
      description_key: "project_tarefas_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Mapa-de-Tarefas.png",
      github: "https://github.com/MatheusAbib/Mapa-de-Tarefas",
      live: "https://matheusabib.github.io/Mapa-de-Tarefas/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 10,
      title: "UNO",
      title_key: "project_uno",
      description_key: "project_uno_desc",
      category: "FUN",
      filter: "brand",
      stack: "frontend-only",
      image: "/assets/img/portfolio/UNO.png",
      github: "https://github.com/MatheusAbib/UNO",
      live: "https://matheusabib.github.io/UNO/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 11,
      title: "Editor de Imagem",
      title_key: "project_editor",
      description_key: "project_editor_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Editor-de-Fotos.png",
      github: "https://github.com/MatheusAbib/Editor-de-Imagem",
      live: "https://matheusabib.github.io/Editor-de-Imagem/",
      tags: ["HTML", "CSS", "JavaScript", "Canvas API"]
    },
    {
      id: 12,
      title: "Bloco de Notas",
      title_key: "project_notas",
      description_key: "project_notas_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Bloco-de-Notas.png",
      github: "https://github.com/MatheusAbib/Bloco-de-Notas",
      live: "https://matheusabib.github.io/Bloco-de-Notas/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 13,
      title: "Dona Sucos - Loja de Sucos",
      title_key: "project_sucos",
      description_key: "project_sucos_desc",
      category: "Website",
      filter: "web",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Dona-Sucos.png",
      github: "https://github.com/MatheusAbib/Loja-de-Sucos",
      live: "https://matheusabib.github.io/Loja-de-Sucos/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 14,
      title: "Tocador de Música",
      title_key: "project_musica",
      description_key: "project_musica_desc",
      category: "FUN",
      filter: "brand",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Tocador-de-Musica.png",
      github: "https://github.com/MatheusAbib/Tocador-de-Musica",
      live: "https://matheusabib.github.io/Tocador-de-Musica/",
      tags: ["HTML", "CSS", "JavaScript", "Web Audio API"]
    },
    {
      id: 15,
      title: "To Do List",
      title_key: "project_todolist",
      description_key: "project_todolist_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "angular-badge",
      image: "/assets/img/portfolio/To-Do-List.png",
      github: "https://github.com/MatheusAbib/Gerenciador-de-Tarefas",
      preview: "/assets/img/portfolio/To-Do-List.png",
      tags: ["HTML", "SCSS", "TypeScript", "Docker"]
    },
    {
      id: 16,
      title: "Diário de Personagens",
      title_key: "project_personagens",
      description_key: "project_personagens_desc",
      category: "FUN",
      filter: "brand",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Diario-de-Personagens.png",
      github: "https://github.com/MatheusAbib/Diario-de-personagens",
      live: "https://matheusabib.github.io/Diario-de-personagens/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 17,
      title: "Meus Projetos Figma",
      title_key: "project_figma_links",
      description_key: "project_figma_links_desc",
      category: "Links",
      filter: "links",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Tela-Figma.png",
      github: "https://github.com/MatheusAbib/Tela-de-links-Figma",
      live: "https://matheusabib.github.io/Tela-de-links-Figma/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 18,
      title: "Conversor de Moedas",
      title_key: "project_conversor",
      description_key: "project_conversor_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Conversor-de-Moedas.png",
      github: "https://github.com/MatheusAbib/Conversor-de-Moedas",
      live: "https://matheusabib.github.io/Conversor-de-Moedas/",
      tags: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
      id: 19,
      title: "Yummy Lamen - Restaurante de Lamen",
      title_key: "project_lamen",
      description_key: "project_lamen_desc",
      category: "Website",
      filter: "web",
      stack: "frontend-only",
      image: "/assets/img/portfolio/Yummy-Lamen.png",
      github: "https://github.com/MatheusAbib/Restaurante-Lamen",
      live: "https://matheusabib.github.io/Restaurante-Lamen/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 20,
      title: "Cartas do Destino - Tarot Online",
      title_key: "project_tarot",
      description_key: "project_tarot_desc",
      category: "Website",
      filter: "web",
      stack: "fullstack",
      image: "/assets/img/portfolio/Tarot-Online.png",
      github: "https://github.com/MatheusAbib/Consulta-de-Tarot",
      live: "https://matheusabib.github.io/Consulta-de-Tarot/",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Docker"]
    },
    {
      id: 21,
      title: "Página de Login",
      title_key: "project_login",
      description_key: "project_login_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack angular-badge",
      image: "/assets/img/portfolio/Pagina-de-Login.png",
      github: "https://github.com/MatheusAbib/Pagina-de-login",
      live: "https://pagina-de-login.up.railway.app/login",
      tags: ["HTML", "SCSS", "Java", "TypeScript", "H2-Database", "Authentication"]
    }
  ];

    const filters = [
    { key: '*', label: 'filter_all' },
    { key: 'web', label: 'filter_websites' },
    { key: 'links', label: 'filter_links' },
    { key: 'motion', label: 'filter_tools' },
    { key: 'brand', label: 'filter_fun' }
  ];

  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(project => project.filter === activeFilter);

  const getStackBadgeClass = (stack) => {
    if (stack.includes('angular-badge')) return 'stack-badge angular-badge';
    if (stack.includes('fullstack')) return 'stack-badge fullstack';
    return 'stack-badge frontend-only';
  };

  const getTagClass = (tag) => {
    const tagClasses = {
      'HTML': 'html-tag',
      'CSS': 'css-tag',
      'JavaScript': 'js-tag',
      'Java': 'java-tag',
      'MySQL': 'mysql-tag',
      'TypeScript': 'typescript-tag',
      'SCSS': 'css-tag',
      'PHP': 'php-tag',
      'Docker': 'docker-tag',
      'API': 'api-tag',
      'Canvas API': 'canvas-tag',
      'Date API': 'date-tag',
      'Web Audio API': 'audio-tag',
      'Charts': 'chart-tag',
      'Authentication': 'auth-tag',
      'H2-Database': 'mysql-tag'
    };
    return tagClasses[tag] || 'js-tag';
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2 data-translate="portfolio_title">Meus Projetos</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
          <ul className="portfolio-filters">
            {filters.map((filter) => (
              <li
                key={filter.key}
                className={activeFilter === filter.key ? 'filter-active' : ''}
                onClick={() => setActiveFilter(filter.key)}
              >
                <span data-translate={filter.label}>
                  {filter.key === '*' ? 'Todos' : 
                   filter.key === 'web' ? 'Sites' :
                   filter.key === 'links' ? 'Tela de Links' :
                   filter.key === 'motion' ? 'Ferramentas' : 'Diversão'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div 
          ref={portfolioRef} 
          className="row g-4 portfolio-scroll-container lenis-ignore" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img 
                    src={project.image} 
                    className="img-fluid" 
                    alt={project.title} 
                    loading="lazy" 
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="github-link"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      {project.live ? (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="details-link"
                        >
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      ) : project.preview ? (
                        <a 
                          href={project.preview} 
                          className="preview-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-image"></i>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">{project.category}</span>
                  <h3 data-translate={project.title_key}>
                    {project.title}
                  </h3>
                  <div className="tech-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`tag ${getTagClass(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p data-translate={project.description_key}>
                    {project.id === 1 ? 'Site responsivo para floricultura com carrinho de compras e filtros' :
                     project.id === 2 ? 'Sistema completo com cadastro de receitas, busca e categorias' :
                     project.id === 3 ? 'Dashboard interativo com gráficos e análise de dados de vendas' :
                     project.id === 4 ? 'Loja virtual completa com carrinho, checkout e sistema de pedidos' :
                     project.id === 5 ? 'Calendário interativo com navegação entre meses e anos' :
                     project.id === 6 ? 'Jogo clássico da forca com múltiplas categorias de palavras' :
                     project.id === 7 ? 'Sistema completo de cadastro com Create, Read, Update e Delete' :
                     project.id === 8 ? 'Página de links para dashboards Power BI com visualizações de dados' :
                     project.id === 9 ? 'Gerenciador de tarefas com drag and drop e categorias' :
                     project.id === 10 ? 'Versão digital do clássico jogo de cartas UNO' :
                     project.id === 11 ? 'Editor de imagens no navegador com múltiplos filtros e ajustes' :
                     project.id === 12 ? 'Aplicação de notas com persistência local e formatação' :
                     project.id === 13 ? 'Site para loja de sucos naturais com cardápio interativo' :
                     project.id === 14 ? 'Player de música com controles, playlist e visualizador' :
                     project.id === 15 ? 'Aplicação de tarefas desenvolvida com Angular e TypeScript' :
                     project.id === 16 ? 'Caderno digital para criação e organização de personagens de RPG' :
                     project.id === 17 ? 'Portfólio de designs UI/UX criados no Figma' :
                     project.id === 18 ? 'Conversor em tempo real usando API de cotações' :
                     project.id === 19 ? 'Site para restaurante especializado em lamen japonês' :
                     project.id === 20 ? 'Plataforma de consultas de tarot dinâmico' :
                     'Sistema de autenticação completo com Java Spring e TypeScript'}
                  </p>
                  <div className="stack-indicator">
                    <span className={getStackBadgeClass(project.stack)}>
                      {project.stack.includes('angular') ? 'Angular' : 
                       project.stack.includes('fullstack') ? 'Full Stack' : 'Front-end'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;