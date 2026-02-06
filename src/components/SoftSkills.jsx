import React, { useEffect, useRef } from 'react';

const SoftSkills = () => {
  const progressRefs = useRef([]);

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
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.transform = 'translateX(0)';
        }, 300 + (index * 200));
      }
    });
  }, []);

  return (
    <section id="services-alt" className="services-alt section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div className="content-block">
              <div className="container section-title" data-aos="fade-up">
                <h2 data-translate="softskills_title">Soft Skills</h2>
              </div>

              <div className="softskills-container">
                <div className="softskills-grid">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="softskill-card">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <i className={`bi ${skill.icon}`}></i>
                        </div>
                        <h3 className="skill-title" data-translate={skill.title_key}>
                          {skill.title_key === 'softskill_proactivity_title' ? 'Proatividade' :
                           skill.title_key === 'softskill_learning_title' ? 'Aprendizado Contínuo' :
                           'Adaptabilidade'}
                        </h3>
                      </div>

                      <div className="skill-content">
                        <p className="skill-description" data-translate={skill.description_key}>
                          {skill.description_key === 'softskill_proactivity_desc' ? 'Antecipo necessidades e busco soluções antes que se tornem problemas, sempre pensando à frente para otimizar processos.' :
                           skill.description_key === 'softskill_learning_desc' ? 'Busco constantemente atualização em tecnologias e metodologias, mantendo-me à frente das tendências do mercado.' :
                           'Ajusto-me rapidamente a mudanças, ambientes dinâmicos e novas exigências, mantendo a qualidade do trabalho.'}
                        </p>

                        <ul className="skill-features">
                          {skill.features.map((feature, featureIndex) => (
                            <li key={featureIndex} data-translate={feature.key}>
                              {feature.key === 'softskill_proactivity_item1' ? 'Iniciativa em novos projetos' :
                               feature.key === 'softskill_proactivity_item2' ? 'Solução antecipada de problemas' :
                               feature.key === 'softskill_proactivity_item3' ? 'Melhoria contínua de processos' :
                               feature.key === 'softskill_learning_item1' ? 'Curiosidade intelectual' :
                               feature.key === 'softskill_learning_item2' ? 'Adaptação a novas tecnologias' :
                               feature.key === 'softskill_learning_item3' ? 'Compartilhamento de conhecimento' :
                               feature.key === 'softskill_adaptability_item1' ? 'Flexibilidade em diferentes cenários' :
                               feature.key === 'softskill_adaptability_item2' ? 'Resiliência frente a mudanças' :
                               'Capacidade de pivotar quando necessário'}
                            </li>
                          ))}
                        </ul>

                        <div className="skill-progress">
                          <div className="progress-label">
                            <span data-translate="softskill_level">Nível de experiência</span>
                            <span>{skill.percentage}%</span>
                          </div>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              ref={el => progressRefs.current[index] = el}
                              style={{ 
                                width: `${skill.percentage}%`,
                                transform: 'translateX(-100%)'
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;