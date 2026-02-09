 import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SobreMim = () => {
  const { toggleLanguage } = useTranslation();

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="hero-highlight">
          <div className="row align-items-center mb-2 flex-wrap">
            <div className="col-lg-7 col-md-7 content" data-aos="fade-up" data-aos-delay="100">
              <div className="badge-wrapper mb-3">
                <div className="d-inline-flex align-items-center rounded-pill border border-accent-light">
                  <div className="icon-circle me-2">
                    <i className="bi bi-stars"></i>
                  </div>
                  <span className="badge-text me-3" data-translate="hero_badge">Inovação & Tecnologia</span>
                </div>
              </div>
              
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h1 className="hero-title mb-0" data-translate="hero_title">Bem-vindo!</h1>
                <div className="hero-social d-flex">
                  <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="hero-description mb-4">
                <p data-translate="hero_desc_1">
                  Sou <strong>desenvolvedor web</strong> atuando com <strong>tecnologias front-end e back-end</strong>, focado em melhorar a experiência do usuário e a funcionalidade dos sistemas.
                </p>

                <p data-translate="hero_desc_2">
                  Atualmente estou no último semestre de Análise e Desenvolvimento de Sistemas na <strong>Faculdade de Tecnologia de Mogi das Cruzes</strong> e no primeiro semestre de Engenharia de Software na <strong>Universidade de Mogi das Cruzes</strong>.
                </p>

                <p data-translate="hero_desc_3">
                  Possuo habilidades em <strong>UI/UX Design, criação de protótipos, análise de requisitos, controle de qualidade e engenharia de software</strong>, além de <strong>visualização de dados com Power BI</strong> e domínio em <strong>Word, Excel e PowerPoint</strong>.
                </p>
              </div>

              <div className="translate-and-download">
                <div className="dropdown dropend">
                  <button className="read-more" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-translate="cv_button">Download CV</span>
                    <i className="bi bi-arrow-down-circle"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/assets/CV/CV-Matheus-Abib.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-text me-2"></i>
                        <span data-translate="cv_portuguese">Português</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/assets/CV/Matheus-Abib-CV.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-file-earmark-text me-2"></i>
                        <span data-translate="cv_english">English</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="translate-mobile d-xl-none">
                  <button 
                    className="btn-translate" 
                    id="translateBtnMobile" 
                    data-lang="pt"
                    onClick={toggleLanguage}
                  >
                    <i className="bi bi-translate"></i>
                    <span data-translate="btn_translate">PT/EN</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-5">
              <div className="light-background d-flex justify-content-center justify-content-md-end custom-box">
                <div className="team-card">
                  <div className="team-image">
                    <img src="/assets/img/Eu.jpg" className="img-fluid" alt="Matheus Abib" />
                    <div className="team-overlay">
                      <h1 data-translate="photo_overlay">Esse sou eu!</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row feature-boxes">
          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-lightning-charge"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title" data-translate="feature_1_title">Entusiasta de Tecnologia</h3>
                <p className="feature-text" data-translate="feature_1_text">
                  Pronto para aplicar meus conhecimentos e colaborar para o crescimento da empresa.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-award"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title" data-translate="feature_2_title">Excelência Técnica</h3>
                <p className="feature-text" data-translate="feature_2_text">
                  Foco em interfaces intuitivas, design responsivo e atenção aos detalhes para melhor experiência do usuário.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="feature-icon me-sm-4 mb-3 mb-sm-0">
                <i className="bi bi-people"></i>
              </div>
              <div className="feature-content">
                <h3 className="feature-title" data-translate="feature_3_title">Comunicação em Equipe</h3>
                <p className="feature-text" data-translate="feature_3_text">
                  Habilidade em trabalhar em equipe, ouvir ativamente e contribuir de forma produtiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;