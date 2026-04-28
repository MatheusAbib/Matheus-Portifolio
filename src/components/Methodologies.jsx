import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Methodologies = () => {
  const { t } = useTranslation();

  const methodologies = [
    {
      number: "01",
      icon: "bi-gear",
      title_key: "method_1_title",
      description_key: "method_1_text"
    },
    {
      number: "02",
      icon: "bi-diagram-3",
      title_key: "method_2_title",
      description_key: "method_2_text"
    },
    {
      number: "03",
      icon: "bi-card-checklist",
      title_key: "method_3_title",
      description_key: "method_3_text"
    },
    {
      number: "04",
      icon: "bi-person-lines-fill",
      title_key: "method_4_title",
      description_key: "method_4_text"
    }
  ];

  return (
    <section id="metodologias" className="how-we-work section">
      <div className="section-glow"></div>
      <div className="section-waves-enhanced"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="methodologies_title">{t('methodologies_title')}</h2>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="steps-5">
          <div className="process-container">
            {methodologies.map((method, index) => (
              <div 
                key={index} 
                className="process-item" 
                data-aos="fade-up" 
                data-aos-delay={300 + (index * 100)}
              >
                <div className="content">
                  <span className="step-number">{method.number}</span>
                  <div className="card-body">
                    <div className="step-icon">
                      <i className={`bi ${method.icon}`}></i>
                    </div>
                    <div className="step-content">
                      <h3 data-translate={method.title_key}>{t(method.title_key)}</h3>
                      <p data-translate={method.description_key}>{t(method.description_key)}</p>
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

export default Methodologies;