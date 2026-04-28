import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { usePortfolioScroll } from '../hooks/usePortfolioScroll';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('*');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const { portfolioRef } = usePortfolioScroll();
  const animationTimeoutRef = useRef(null);

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
      title: "Dashboard de Vendas",
      title_key: "project_dashboard",
      description_key: "project_dashboard_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack",
      image: "/assets/img/portfolio/Dashboard.png",
      github: "https://github.com/MatheusAbib/Dashboard-Vendas",
      live: "https://tinyurl.com/vendas-dashboard",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Charts"]
    },
    {
      id: 3,
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
      id: 4,
      title: "Organizador de Arquivos",
      title_key: "project_arquivos",
      description_key: "project_arquivos_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack",
      image: "/assets/img/portfolio/Organizador-Arquivos.png",
      github: "https://github.com/MatheusAbib/Organizador-de-Arquivos",
      live: "https://tinyurl.com/organizador-arquivos",
      tags: ["HTML", "CSS", "JavaScript", "Node.Js", "MySQL"]
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
      title: "CRUD - Formulário de Cadastro",
      title_key: "project_crud",
      description_key: "project_crud_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "fullstack",
      image: "/assets/img/portfolio/CRUD-Cadastro.png",
      github: "https://github.com/MatheusAbib/Formulario-Cliente",
      live: "https://tinyurl.com/crud-correios",
      tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL"]
    },
    {
      id: 9,
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
      id: 17,
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
      id: 18,
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
      id: 19,
      title: "Página de Login",
      title_key: "project_login",
      description_key: "project_login_desc",
      category: "Web Tool",
      filter: "motion",
      stack: "angular-badge",
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

  const handleFilterClick = (filterKey) => {
    if (filterKey === activeFilter) return;
    
    setVisibleProjects([]);
    
    setTimeout(() => {
      setActiveFilter(filterKey);
    }, 200);
  };

  useEffect(() => {
    if (visibleProjects.length === 0) {
      const timeoutId = setTimeout(() => {
        setVisibleProjects(filteredProjects.map(p => p.id));
      }, 300);
      
      return () => clearTimeout(timeoutId);
    }
  }, [activeFilter, filteredProjects]);

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
      'H2-Database': 'mysql-tag',
      'Node.Js': 'js-tag'
    };
    return tagClasses[tag] || 'js-tag';
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="portfolio_title">{t('portfolio_title')}</h2>
        </div>
      </div>

      <div className="container">
        <div className="portfolio-filters-container">
          <ul className="portfolio-filters">
            {filters.map((filter) => (
              <li
                key={filter.key}
                className={activeFilter === filter.key ? 'filter-active' : ''}
                onClick={() => handleFilterClick(filter.key)}
              >
                <span data-translate={filter.label}>{t(filter.label)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div 
          ref={portfolioRef} 
          className="portfolio-scroll-container lenis-ignore" 
        >
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`portfolio-item ${visibleProjects.includes(project.id) ? 'show' : ''}`}
                style={{ transitionDelay: visibleProjects.includes(project.id) ? `${index * 50}ms` : '0ms' }}
              >
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
                    <h3 data-translate={project.title_key}>{t(project.title_key)}</h3>
                    <div className="tech-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className={`tag ${getTagClass(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p data-translate={project.description_key}>{t(project.description_key)}</p>
                    <div className="stack-indicator">
                      <span className={getStackBadgeClass(project.stack)}>
                        {project.stack.includes('angular-badge') ? 'Angular' : 
                         project.stack.includes('fullstack') ? 'Full Stack' : 'Front-end'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;