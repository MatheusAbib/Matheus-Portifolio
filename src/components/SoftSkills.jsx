import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SoftSkills = () => {
  const { t } = useTranslation();

  const softSkills = [
    {
      icon: "bi-lightning-charge",
      title_key: "softskill_proactivity_title",
      description_key: "softskill_proactivity_desc",
      features: [
        { key: "softskill_proactivity_item1" },
        { key: "softskill_proactivity_item2" },
        { key: "softskill_proactivity_item3" }
      ],
      percentage: 95
    },
    {
      icon: "bi-book",
      title_key: "softskill_learning_title",
      description_key: "softskill_learning_desc",
      features: [
        { key: "softskill_learning_item1" },
        { key: "softskill_learning_item2" },
        { key: "softskill_learning_item3" }
      ],
      percentage: 92
    },
    {
      icon: "bi-arrow-repeat",
      title_key: "softskill_adaptability_title",
      description_key: "softskill_adaptability_desc",
      features: [
        { key: "softskill_adaptability_item1" },
        { key: "softskill_adaptability_item2" },
        { key: "softskill_adaptability_item3" }
      ],
      percentage: 85
    }
  ];

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const card = e.currentTarget;
      const progressFill = card.querySelector('.progress-fill');
      if (progressFill) {
        progressFill.style.transform = 'translateX(0)';
      }
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      const progressFill = card.querySelector('.progress-fill');
      if (progressFill) {
        progressFill.style.transform = 'translateX(-100%)';
      }
    };

    const cards = document.querySelectorAll('.softskill-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="services-alt" className="services-alt section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="softskills_title">{t('softskills_title')}</h2>
        </div>

        <div className="softskills-container">
          <div className="softskills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="softskill-card" data-aos="fade-up" data-aos-delay={150 + (index * 100)}>
                <div className="skill-header">
                  <div className="skill-icon">
                    <i className={`bi ${skill.icon}`}></i>
                  </div>
                  <h3 className="skill-title" data-translate={skill.title_key}>{t(skill.title_key)}</h3>
                </div>

                <div className="skill-content">
                  <p className="skill-description" data-translate={skill.description_key}>{t(skill.description_key)}</p>

                  <ul className="skill-features">
                    {skill.features.map((feature, featureIndex) => (
                      <li key={featureIndex} data-translate={feature.key}>{t(feature.key)}</li>
                    ))}
                  </ul>

                  <div className="skill-progress">
                    <div className="progress-label">
                      <span data-translate="softskill_level">{t('softskill_level')}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${skill.percentage}%`
                        }}
                      ></div>
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

export default SoftSkills;