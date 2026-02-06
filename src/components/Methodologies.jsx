import React from 'react';

const Methodologies = () => {
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
      <div className="container section-title" data-aos="fade-up">
        <h2 data-translate="methodologies_title">Como eu trabalho</h2>
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
                      <h3 data-translate={method.title_key}>Engenharia de Software</h3>
                      <p data-translate={method.description_key}>
                        Planejo e organizo cada etapa do projeto utilizando modelagem UML, metodologias ágeis, Kanban, controle de versões com Git e testes contínuos.
                      </p>
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