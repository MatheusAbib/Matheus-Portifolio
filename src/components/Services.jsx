import React from 'react';

const Services = () => {
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

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2 data-translate="services_title">Serviços</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center g-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="col-md-6" 
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={100 + (index * 200)}
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <div className="service-content">
                  <h3 data-translate={service.title_key}>
                    {service.title_key === 'service_1_title' ? 'Desenvolvimento Full Stack' :
                     service.title_key === 'service_3_title' ? 'UI/UX Design e Protótipos' :
                     service.title_key === 'service_4_title' ? 'Engenharia de Software' :
                     'Power BI e Análise de Dados'}
                  </h3>
                  <p data-translate={service.description_key}>
                    {service.description_key === 'service_1_text' ? 'Eu crio interfaces web modernas, performáticas e precisas para usuários.' :
                     service.description_key === 'service_3_text' ? 'Crio layouts funcionais e intuitivos para o usuário, utilizando Figma, Canva e boas práticas de design UI/UX.' :
                     service.description_key === 'service_4_text' ? 'Análise de requisitos, metodologias ágeis, controle de qualidade e documentação para sistemas robustos e alinhados ao negócio.' :
                     'Estruturo informações complexas em dashboards interativos, facilitando análise e tomada de decisões estratégicas.'}
                  </p>
                  <a 
                    href="#" 
                    className="service-link" 
                    data-bs-toggle="modal" 
                    data-bs-target={`#${service.modalId}`}
                  >
                    <span data-translate="see_button">Saiba Mais</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;