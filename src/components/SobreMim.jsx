import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SobreMim = () => {
  const { t, toggleLanguage } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="bi bi-stars"></i>
              <span data-translate="hero_badge">{t('hero_badge')}</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-greeting" data-translate="hero_title">{t('hero_title')}</span>
              <span 
                className="hero-name" 
                dangerouslySetInnerHTML={{ __html: t('hero_name') }}
              />
            </h1>

            <div className="hero-description">
              <p data-translate="hero_desc_1" dangerouslySetInnerHTML={{ __html: t('hero_desc_1') }} />
              <p data-translate="hero_desc_2" dangerouslySetInnerHTML={{ __html: t('hero_desc_2') }} />
              <p data-translate="hero_desc_3" dangerouslySetInnerHTML={{ __html: t('hero_desc_3') }} />
            </div>

            <div className="hero-actions">
              <div className="dropdown">
                <button 
                  className="btn-primary" 
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <i className="bi bi-download"></i>
                  <span data-translate="cv_button">{t('cv_button')}</span>
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show" style={{ position: 'absolute', display: 'block', marginTop: '0.5rem' }}>
                    <li>
                      <a className="dropdown-item" href="/assets/CV/Matheus-Abib-Curriculo.pdf" target="_blank" onClick={() => setIsDropdownOpen(false)}>
                        <i className="bi bi-flag-br"></i>
                        <span data-translate="cv_portuguese">{t('cv_portuguese')}</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/assets/CV/Matheus-Abib-Resume.pdf" target="_blank" onClick={() => setIsDropdownOpen(false)}>
                        <i className="bi bi-flag-us"></i>
                        <span data-translate="cv_english">{t('cv_english')}</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              
              <button className="btn-secondary" onClick={toggleLanguage}>
                <i className="bi bi-translate"></i>
                <span>PT/EN</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-social-top">
                <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="social-top-link">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="social-top-link">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="social-top-link">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
              <div className="hero-image-container">
                <img src="/assets/img/Eu.jpg" alt="Matheus Abib" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="bi bi-camera-fill"></i>
                    <span data-translate="photo_overlay">{t('photo_overlay')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-lightning-charge-fill"></i>
            </div>
            <h3 data-translate="feature_1_title">{t('feature_1_title')}</h3>
            <p data-translate="feature_1_text">{t('feature_1_text')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-trophy-fill"></i>
            </div>
            <h3 data-translate="feature_2_title">{t('feature_2_title')}</h3>
            <p data-translate="feature_2_text">{t('feature_2_text')}</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="bi bi-people-fill"></i>
            </div>
            <h3 data-translate="feature_3_title">{t('feature_3_title')}</h3>
            <p data-translate="feature_3_text">{t('feature_3_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;