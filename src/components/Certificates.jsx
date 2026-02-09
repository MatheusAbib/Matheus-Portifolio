import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('webdev');
  const { t } = useTranslation();

  const skillClasses = {
    'CSS': 'css',
    'Bootstrap': 'bootstrap',
    'JavaScript': 'javascript',
    'HTML5': 'html',
    'AJAX': 'ajax',
    'Microsoft Power BI': 'angular',
    'Microsoft Excel': 'spreadsheet-management',
    'Dashboards': 'dashboards',
    'Data Analysis': 'data-analysis',
    'Spreadsheet Management': 'spreadsheet-management',
    'Database': 'ajax',
    'SQL': 'mysql',
    'Git': 'git',
    'GitHub': 'github',
    'Logic': 'data-analysis',
    'AI Fundamentals': 'ai',
    'Supervised Learning': 'angular',
    'Data Preprocessing': 'ajax',
    'Python': 'python',
    'Java': 'java',
    'Spring Boot': 'spring',
    'API Rest': 'php',
    'Lombok': 'angular'
  };

  const certificates = [
    {
      id: 'webdev',
      title_key: 'certificate_webdev_title',
      institution: 'Coursera - Johns Hopkins University',
      image: 'assets/img/services/Web-Development.jpg',
      description_key: 'certificate_webdev_desc',
      skills: ['CSS', 'Bootstrap', 'JavaScript', 'HTML5', 'AJAX']
    },
    {
      id: 'powerbi',
      title_key: 'certificate_powerbi_title',
      institution: 'Data Science Academy',
      image: 'assets/img/services/Power-BI.jpg',
      description_key: 'certificate_powerbi_desc',
      skills: ['Microsoft Power BI', 'Microsoft Excel', 'Dashboards', 'Data Analysis', 'Spreadsheet Management']
    },
    {
      id: 'database',
      title_key: 'certificate_database_title',
      institution: 'IFSul - Plataforma Mundi',
      image: 'assets/img/services/Banco-de-Dados.jpg',
      description_key: 'certificate_database_desc',
      skills: ['Database', 'SQL', 'Spreadsheet Management', 'Data Analysis']
    },
    {
      id: 'logic',
      title_key: 'certificate_logic_title',
      institution: 'DIO - Digital Innovation One',
      image: 'assets/img/services/Logica-de-Programacao.jpg',
      description_key: 'certificate_logic_desc',
      skills: ['JavaScript', 'Git', 'GitHub', 'Logic']
    },
    {
      id: 'ai',
      title_key: 'certificate_ai_title',
      institution: 'Alura - Imersão IA',
      image: 'assets/img/services/IA.jpg',
      description_key: 'certificate_ai_desc',
      skills: ['AI Fundamentals', 'Supervised Learning', 'Data Preprocessing', 'Python']
    },
    {
      id: 'java',
      title_key: 'certificate_java_title',
      institution: 'Rocketseat',
      image: 'assets/img/services/Java.png',
      description_key: 'certificate_java_desc',
      skills: ['Java', 'Spring Boot', 'API Rest', 'Database', 'Lombok']
    }
  ];

  const tabs = [
    { id: 'webdev', label_key: 'webdev_tab_title' },
    { id: 'powerbi', label_key: 'powerbi_tab_title' },
    { id: 'database', label_key: 'database_tab_title' },
    { id: 'logic', label_key: 'logic_tab_title' },
    { id: 'ai', label_key: 'ai_tab_title' },
    { id: 'java', label_key: 'java_tab_title' }
  ];

  return (
    <section id="service-details" className="service-details section">
      <div className="container section-title" data-aos="fade-up">
        <h2 data-translate="menu_certificates">Certificados</h2>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="certificates-wrapper">
          <div className="certificates-tabs-modern">
            <div className="certificates-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`certificate-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  data-tab={tab.id}
                >
                  <span data-translate={tab.label_key}>
                    {t(tab.label_key)}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="certificates-content">
              {certificates.map(cert => (
                <div 
                  key={cert.id}
                  className={`certificate-tab ${activeTab === cert.id ? 'active' : ''}`}
                  id={`${cert.id}-tab`}
                >
                  <div className="certificate-card">
                    <div className="certificate-image">
                      <img 
                        src={cert.image} 
                        alt={`Certificado ${cert.title_key}`}
                        onError={(e) => {
                          console.error('Image failed to load:', e.target.src);
                          console.error('Error event:', e);
                        }}
                        onLoad={() => console.log('Image loaded successfully:', cert.image)}
                      />
                      <div className="certificate-badge">
                        <i className="bi bi-award-fill"></i>
                      </div>
                    </div>
                    
                    <div className="certificate-details">
                      <div className="certificate-header">
                        <h3 className="certificate-title" data-translate={cert.title_key}>
                          {t(cert.title_key)}
                        </h3>
                        <p className="certificate-institution">
                          {cert.institution}
                        </p>
                      </div>
                      
                      <div className="certificate-skills">
                        <div className="skills-title">
                          <i className="bi bi-check-circle-fill"></i>
                          <span data-translate="certificate_skills_developed">
                            {t('certificate_skills_developed')}
                          </span>
                        </div>
                        <div className="skills-tags">
                          {cert.skills.map((skill, index) => {
                            const skillClass = skillClasses[skill] || skill.toLowerCase().replace(/\s+/g, '-');
                            const translationKey = `skill_${skill.toLowerCase().replace(/\s+/g, '_')}`;
                            
                            return (
                              <span key={index} className={`skill-tag ${skillClass}`}>
                                {t(translationKey) !== translationKey ? t(translationKey) : skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="certificate-description">
                        <p>
                          {t(cert.description_key)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;