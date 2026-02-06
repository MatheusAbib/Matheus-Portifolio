import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="footer-logo-wrapper mb-4">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename" data-translate="footer_name">Matheus Abib</span>
                  <span className="logo-dot">.</span>
                </a>
              </div>

              <div className="footer-bio mb-4">
                <p data-translate="footer_bio">Desenvolvedor Full Stack & Engenheiro de Software.</p>
              </div>

              <div className="footer-contact">
                <div className="contact-item d-flex align-items-center mb-3">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="contact-info">
                    <span data-translate="footer_location">Mogi das Cruzes, São Paulo</span>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center mb-3">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="contact-info">
                    <a href="mailto:matheus.abib.ma@gmail.com" data-translate="footer_email">
                      matheus.abib.ma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center">
                  <div className="contact-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="contact-info">
                    <span data-translate="footer_fullname">Matheus Bilitardo Abib</span>
                  </div>
                </div>
              </div>

              <div className="social-links d-flex mt-4">
                <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <div className="footer-section-header">
                <h4 data-translate="footer_quick_links_title">Links Rápidos</h4>
                <div className="header-line"></div>
              </div>
              <ul>
                <li><a href="#hero"><span data-translate="menu_about">Sobre mim</span></a></li>
                <li><a href="#metodologias"><span data-translate="menu_methodologies">Metodologias</span></a></li>
                <li><a href="#service-details"><span data-translate="menu_certificates">Certificados</span></a></li>
                <li><a href="#services"><span data-translate="menu_services">Serviços</span></a></li>
                <li><a href="#portfolio"><span data-translate="menu_projects">Projetos</span></a></li>
                <li><a href="#form-section"><span data-translate="menu_contact">Contato</span></a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-services">
              <div className="footer-section-header">
                <h4 data-translate="footer_specialties_title">Especialidades</h4>
                <div className="header-line"></div>
              </div>
              <ul>
                <li>
                  <div className="service-icon"><i className="bi bi-code-slash"></i></div>
                  <span data-translate="footer_specialty_fullstack">Desenvolvimento Full Stack</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-palette2"></i></div>
                  <span data-translate="footer_specialty_uiux">UI/UX Design</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-gear"></i></div>
                  <span data-translate="footer_specialty_software">Engenharia de Software</span>
                </li>
                <li>
                  <div className="service-icon"><i className="bi bi-bar-chart-line"></i></div>
                  <span data-translate="footer_specialty_powerbi">Power BI & Análise de Dados</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <div className="footer-section-header">
                <h4 data-translate="footer_talk_title">Vamos Conversar</h4>
                <div className="header-line"></div>
              </div>

              <p className="newsletter-text" data-translate="footer_newsletter_text">
                Interessado em trabalhar juntos ou tem um projeto em mente?
              </p>

              <div className="cta-card">
                <div className="cta-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>

                <h5 data-translate="footer_cta_title">Entre em contato</h5>
                <p data-translate="footer_cta_text">Estou disponível para discutir novas oportunidades</p>

                <a href="#form-section" className="cta-button">
                  <span data-translate="footer_cta_button">Enviar Mensagem</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright-text">
              <p>
                <span data-translate="footer_copyright">
                  © {currentYear} <strong className="highlight">Matheus Abib</strong>. Todos os direitos reservados.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;