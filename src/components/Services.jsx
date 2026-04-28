import React, { useEffect, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const services = [
    {
      icon: "bi-code-slash",
      title_key: "service_1_title",
      description_key: "service_1_text",
      modalId: "fullstackModal"
    },
    {
      icon: "bi-palette2",
      title_key: "service_3_title",
      description_key: "service_3_text",
      modalId: "uiuxModal"
    },
    {
      icon: "bi-card-checklist",
      title_key: "service_4_title",
      description_key: "service_4_text",
      modalId: "softwareEngineeringModal"
    },
    {
      icon: "bi-bar-chart-line",
      title_key: "service_6_title", 
      description_key: "service_6_text",
      modalId: "powerbiModal"
    }
  ];

  useEffect(() => {
    const handleModalHidden = () => {
      if (sectionRef.current) {
        const yOffset = -100;
        const element = sectionRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    const modals = document.querySelectorAll('.service-modal');
    modals.forEach(modal => {
      modal.addEventListener('hidden.bs.modal', handleModalHidden);
    });

    return () => {
      modals.forEach(modal => {
        modal.removeEventListener('hidden.bs.modal', handleModalHidden);
      });
    };
  }, []);

  const handleOpenModal = (e, modalId) => {
    e.preventDefault();
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
      const bootstrapModal = new window.bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  };

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="services_title">{t('services_title')}</h2>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              data-aos="fade-up"
              data-aos-delay={150 + (index * 100)}
            >
              <div className="service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div className="service-content">
                <h3 data-translate={service.title_key}>{t(service.title_key)}</h3>
                <p data-translate={service.description_key}>{t(service.description_key)}</p>
                <a 
                  href="#"
                  className="service-link"
                  onClick={(e) => handleOpenModal(e, service.modalId)}
                >
                  <span data-translate="see_button">{t('see_button')}</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;