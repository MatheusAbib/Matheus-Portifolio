import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from './SectionLabel';

const Certificates = () => {
  const { t } = useTranslation();
  const scrollWrapperRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCertificates, setVisibleCertificates] = useState([]);

  useEffect(() => {
    const handleWheel = (e) => {
      const wrapper = scrollWrapperRef.current;
      if (wrapper && wrapper.contains(e.target)) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
        e.stopPropagation();
        return false;
      }
    };

    const wrapper = scrollWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    setVisibleCertificates([]);
    const timeoutId = setTimeout(() => {
      const filtered = activeFilter === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.category === activeFilter);
      setVisibleCertificates(filtered.map(c => c.id));
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [activeFilter]);

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setModalImage(null);
    document.body.style.overflow = '';
  };

  const certificates = [
    {
      id: 'webdev',
      title_key: 'certificate_webdev_title',
      institution: 'Coursera - Johns Hopkins University',
      image: 'assets/img/services/Web-Development.jpg',
      description_key: 'certificate_webdev_desc',
      skills: ['CSS', 'Bootstrap', 'JavaScript', 'HTML5', 'AJAX'],
      category: 'frontend'
    },
    {
      id: 'powerbi',
      title_key: 'certificate_powerbi_title',
      institution: 'Data Science Academy',
      image: 'assets/img/services/Power-BI.jpg',
      description_key: 'certificate_powerbi_desc',
      skills: ['Microsoft Power BI', 'Microsoft Excel', 'Dashboards', 'Data Analysis', 'Spreadsheet Management'],
      category: 'data'
    },
    {
      id: 'database',
      title_key: 'certificate_database_title',
      institution: 'IFSul - Plataforma Mundi',
      image: 'assets/img/services/Banco-de-Dados.jpg',
      description_key: 'certificate_database_desc',
      skills: ['Database', 'SQL', 'Spreadsheet Management', 'Data Analysis'],
      category: 'data'
    },
    {
      id: 'logic',
      title_key: 'certificate_logic_title',
      institution: 'DIO - Digital Innovation One',
      image: 'assets/img/services/Logica-de-Programacao.jpg',
      description_key: 'certificate_logic_desc',
      skills: ['JavaScript', 'Git', 'GitHub', 'Logic'],
      category: 'frontend'
    },
    {
      id: 'react',
      title_key: 'certificate_react_title',
      institution: 'Cursa',
      image: 'assets/img/services/react.png',
      description_key: 'certificate_react_desc',
      skills: ['React', 'API Rest', 'JavaScript'],
      category: 'frontend'
    },
    {
      id: 'java',
      title_key: 'certificate_java_title',
      institution: 'Rocketseat',
      image: 'assets/img/services/Java.png',
      description_key: 'certificate_java_desc',
      skills: ['Java', 'Spring Boot', 'API Rest', 'Database', 'Lombok'],
      category: 'backend'
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Front-end' },
    { key: 'backend', label: 'Back-end' },
    { key: 'data', label: 'Dados' }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  return (
    <section id="service-details" className="service-details section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="service-details" />
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="menu_certificates">Certificados</h2>
        </div>
      </div>

      <div className="container">
        <div className="certificates-filters" data-aos="fade-up" data-aos-delay="100">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`certificates-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="certificates-scroll-container" data-aos="fade-up" data-aos-delay="200">
          <div
            ref={scrollWrapperRef}
            className="certificates-scroll-wrapper"
          >
            <div className="certificates-horizontal-grid">
              {filteredCertificates.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className={`certificate-card ${visibleCertificates.includes(cert.id) ? 'show' : ''}`}
                  style={{ transitionDelay: visibleCertificates.includes(cert.id) ? `${index * 50}ms` : '0ms' }}
                >
                  <div className="certificate-image" onClick={() => openImageModal(cert.image)}>
                    <img src={cert.image} alt={cert.title_key} />
                    <div className="certificate-image-overlay">
                      <button className="image-view-btn" onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(cert.image);
                      }}>
                        <i className="bi bi-zoom-in"></i>
                      </button>
                    </div>
                    <div className="certificate-badge">
                      <i className="bi bi-award-fill"></i>
                    </div>
                  </div>
                  <div className="certificate-details">
                    <h3 className="certificate-title" data-translate={cert.title_key}>
                      {t(cert.title_key)}
                    </h3>
                    <p className="certificate-institution">{cert.institution}</p>
                    <div className="skills-title">
                      <i className="bi bi-check-circle-fill"></i>
                      <span data-translate="certificate_skills_developed">
                        {t('certificate_skills_developed')}
                      </span>
                    </div>
                    <div className="skills-tags">
                      {cert.skills.map((skill, idx) => {
                        const translationKey = `skill_${skill.toLowerCase().replace(/\s+/g, '_')}`;
                        return (
                          <span key={idx} className="skill-tag">
                            {t(translationKey) !== translationKey ? t(translationKey) : skill}
                          </span>
                        );
                      })}
                    </div>
                    <div className="certificate-description">
                      <p data-translate={cert.description_key}>{t(cert.description_key)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-hint-cert">
            <i className="bi bi-arrow-left-right"></i>
            <span>Role ou arraste para ver mais</span>
          </div>
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            <img src={modalImage} alt="Certificado" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;