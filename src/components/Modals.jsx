import React, { useEffect } from 'react';

const Modals = () => {
  useEffect(() => {
    const handleModalShow = (event) => {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0';
    };

    const handleModalHide = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };

    const modals = document.querySelectorAll('.service-modal');
    modals.forEach(modal => {
      modal.addEventListener('shown.bs.modal', handleModalShow);
      modal.addEventListener('hidden.bs.modal', handleModalHide);
    });

    return () => {
      modals.forEach(modal => {
        modal.removeEventListener('shown.bs.modal', handleModalShow);
        modal.removeEventListener('hidden.bs.modal', handleModalHide);
      });
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  return (
    <>
      <div className="service-modal modal fade" id="fullstackModal" tabIndex="-1" aria-labelledby="fullstackModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <h2 className="modal-title" id="fullstackModalLabel" data-translate="modal_fullstack_title">Desenvolvimento Full Stack</h2>
              </div>
              <button type="button" className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-column">
                  <div className="modal-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-stars"></i>
                      </div>
                      <h3 data-translate="modal_tech_title">Principais Tecnologias</h3>
                    </div>
                    
                    <div className="tech-section">
                      <div className="tech-cards">
                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon web">
                                <i className="bi bi-code-slash"></i>
                              </div>
                              <h5 data-translate="modal_tech_web_title">Web</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_tech_web_badge">Front-end</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_tech_web_desc">Aplicações responsivas com HTML5, CSS3, JavaScript, PHP, TypeScript, SCSS e frameworks modernos como Bootstrap, PrimeNG e Angular</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag bootstrap">Bootstrap</span>
                            <span className="stack-tag primeng">PrimeNG</span>
                            <span className="stack-tag angular">Angular</span>
                          </div>
                        </div>
                        
                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon performance">
                                <i className="bi bi-speedometer2"></i>
                              </div>
                              <h5 data-translate="modal_tech_performance_title">Performance</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_tech_performance_badge">Back-end</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_tech_performance_desc">SEO técnico, experiência do usuário, APIs escaláveis e uso de banco de dados para armazenamento, consultas e organização das informações</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag mysql">MySQL</span>
                            <span className="stack-tag java">Java</span>
                            <span className="stack-tag spring">SpringBoot</span>
                            <span className="stack-tag php">PHP</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-top border-bottom">
                          <div className="d-flex align-items-start gap-3 mb-3">
                            <div className="flex-shrink-0">
                              <i className="bi bi-lightbulb-fill text-warning" style={{ fontSize: '1.5rem' }}></i>
                            </div>
                            <div>
                              <h5 className="mb-2" style={{ fontSize: '1.15rem' }} data-translate="modal_fullstack_experience_title">Experiência Prática</h5>
                              <p className="mb-2" style={{ fontSize: '0.95rem' }} data-translate="modal_fullstack_experience_desc">
                                Atuo como <strong>Desenvolvedor de Software</strong> em projetos institucionais para a Prefeitura de Mogi das Cruzes, contribuindo para o desenvolvimento de soluções digitais.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-column" style={{ borderLeft: '2px solid color-mix(in srgb, var(--accent-color), transparent 90%)' }}>
                  <div className="modal-section process-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-diagram-3"></i>
                      </div>
                      <h3 data-translate="modal_strategy_title">Minha estratégia</h3>
                    </div>
                    
                    <div className="process-timeline">
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">01</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_step_1_title">Análise Técnica</h4>
                            <div className="step-badge" data-translate="modal_step_1_badge">Planejamento</div>
                          </div>
                          <p data-translate="modal_step_1_desc">Definição da melhor abordagem tecnológica para cada projeto, considerando requisitos, escalabilidade e manutenibilidade.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_step_1_tag1">Requisitos</span>
                            <span className="tag" data-translate="modal_step_1_tag2">Arquitetura</span>
                            <span className="tag" data-translate="modal_step_1_tag3">MVP</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">02</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_step_2_title">Desenvolvimento</h4>
                            <div className="step-badge" data-translate="modal_step_2_badge">Implementação</div>
                          </div>
                          <p data-translate="modal_step_2_desc">Codificação limpa, organizada e fiel ao design, seguindo as melhores práticas do mercado.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_step_2_tag1">Clean Code</span>
                            <span className="tag" data-translate="modal_step_2_tag2">Testes</span>
                            <span className="tag" data-translate="modal_step_2_tag3">Versionamento</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">03</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_step_3_title">Integração</h4>
                            <div className="step-badge" data-translate="modal_step_3_badge">Conectividade</div>
                          </div>
                          <p data-translate="modal_step_3_desc">Conexão com APIs e serviços externos para tornar a aplicação funcional em todas as plataformas e dispositivos.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_step_3_tag1">APIs REST</span>
                            <span className="tag" data-translate="modal_step_3_tag2">Microservices</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">04</span>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_step_4_title">Otimização</h4>
                            <div className="step-badge" data-translate="modal_step_4_badge">Finalização</div>
                          </div>
                          <p data-translate="modal_step_4_desc">Ajustes finais de performance, acessibilidade e SEO técnico, garantindo a melhor experiência para o usuário final.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_step_4_tag1">Performance</span>
                            <span className="tag" data-translate="modal_step_4_tag2">SEO</span>
                            <span className="tag" data-translate="modal_step_4_tag3">UX/UI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-modal modal fade" id="uiuxModal" tabIndex="-1" aria-labelledby="uiuxModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <h2 className="modal-title" id="uiuxModalLabel" data-translate="modal_uiux_title">UI/UX Design e Protótipos</h2>
                <a href="https://matheusabib.github.io/Tela-de-links-Figma/" target="_blank" rel="noopener noreferrer" style={{ width: 'auto', fontSize: '1.05rem' }}>
                  <i className="bi bi-eye me-2"></i>
                  <span data-translate="modal_access_projects_figma">Acessar Projetos</span>
                </a>
              </div>
              <button type="button" className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-column">
                  <div className="modal-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-palette2"></i>
                      </div>
                      <h3 data-translate="modal_uiux_specialties_title">Minhas Especialidades</h3>
                    </div>
                    
                    <div className="tech-section">
                      <div className="tech-cards">
                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon performance">
                                <i className="bi bi-layers"></i>
                              </div>
                              <h5 data-translate="modal_uiux_prototyping_title">Prototipagem</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_uiux_prototyping_badge">Validação</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_uiux_prototyping_desc">Criação de protótipos interativos para testar fluxos e validar experiências antes do desenvolvimento, garantindo usabilidade e eficiência.</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag mysql">Figma</span>
                            <span className="stack-tag java">Canva</span>
                            <span className="stack-tag spring">Interatividade</span>
                            <span className="stack-tag angular">Arquitetura da Informação</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-top border-bottom">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div className="flex-shrink-0">
                            <i className="bi bi-lightbulb-fill text-warning" style={{ fontSize: '1.5rem' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-2" style={{ fontSize: '1.15rem' }} data-translate="modal_uiux_experience_title">Experiência Prática</h5>
                            <p className="mb-2" style={{ fontSize: '0.95rem' }} data-translate="modal_uiux_experience_desc">
                              Atuei com <strong data-translate="modal_uiux_experience_strong">UX/UI Design</strong>, criando wireframes e protótipos interativos focados em interfaces claras e visualmente atrativas, com atenção à consistência e usabilidade.
                            </p>
                            <p className="mb-0" style={{ fontSize: '0.95rem' }} data-translate="modal_uiux_experience_highlights">
                              <strong>Destaques:</strong> Sistemas de componentes reutilizáveis, controle de qualidade e validação com stakeholders.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-column" style={{ borderLeft: '2px solid color-mix(in srgb, var(--accent-color), transparent 90%)' }}>
                  <div className="modal-section process-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-diagram-3"></i>
                      </div>
                      <h3 data-translate="modal_uiux_process_title">Meu Processo</h3>
                    </div>
                    
                    <div className="process-timeline">
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">01</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_uiux_step1_title">Imersão & Pesquisa</h4>
                            <div className="step-badge" data-translate="modal_uiux_step1_badge">Fundação</div>
                          </div>
                          <p data-translate="modal_uiux_step1_desc">Análise do negócio e público-alvo. Definição de personas e mapeamento de necessidades para direcionar o design.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_uiux_step1_tag1">Pesquisa de Usuário</span>
                            <span className="tag" data-translate="modal_uiux_step1_tag2">Definição de Personas</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">02</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_uiux_step2_title">Wireframing</h4>
                            <div className="step-badge" data-translate="modal_uiux_step2_badge">Estrutura</div>
                          </div>
                          <p data-translate="modal_uiux_step2_desc">Criação de wireframes detalhados que definem a arquitetura da informação, hierarquia visual e fluxos de navegação essenciais.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_uiux_step2_tag1">Fluxos de Usuário</span>
                            <span className="tag" data-translate="modal_uiux_step2_tag2">Wireframes</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">03</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_uiux_step3_title">Design Visual</h4>
                            <div className="step-badge" data-translate="modal_uiux_step3_badge">Estética</div>
                          </div>
                          <p data-translate="modal_uiux_step3_desc">Desenvolvimento da interface visual final com atenção à acessibilidade, responsividade e princípios de UI.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_uiux_step3_tag1">UI Design</span>
                            <span className="tag" data-translate="modal_uiux_step3_tag2">Identidade Visual</span>
                            <span className="tag" data-translate="modal_uiux_step3_tag3">Responsividade</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">04</span>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_uiux_step4_title">Prototipagem & Testes</h4>
                            <div className="step-badge" data-translate="modal_uiux_step4_badge">Validação</div>
                          </div>
                          <p data-translate="modal_uiux_step4_desc">Criação de protótipos interativos para testes de usabilidade, validação de fluxos e refinamento antes da implementação final.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_uiux_step4_tag1">Testes de Usabilidade</span>
                            <span className="tag" data-translate="modal_uiux_step4_tag2">Validação</span>
                            <span className="tag" data-translate="modal_uiux_step4_tag3">Iteração</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-modal modal fade" id="softwareEngineeringModal" tabIndex="-1" aria-labelledby="softwareEngineeringModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <h2 className="modal-title" id="softwareEngineeringModalLabel" data-translate="modal_software_title">Engenharia de Software</h2>
              </div>
              <button type="button" className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-column">
                  <div className="modal-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-gear"></i>
                      </div>
                      <h3 data-translate="modal_software_specialties_title">Minhas Especialidades</h3>
                    </div>
                    
                    <div className="tech-section">
                      <div className="tech-cards">
                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon performance">
                                <i className="bi bi-diagram-3"></i>
                              </div>
                              <h5 data-translate="modal_software_agile_title">Metodologias Ágeis</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_software_agile_badge">Processo</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_software_agile_desc">Scrum, Kanban, DevOps. Planejamento iterativo, sprints, daily meetings e retrospectivas para entrega contínua de valor.</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag mysql">Scrum</span>
                            <span className="stack-tag java">Kanban</span>
                            <span className="stack-tag php">Trello</span>
                            <span className="stack-tag spring">DevOps</span>
                          </div>
                        </div>

                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon web">
                                <i className="bi bi-shield-check"></i>
                              </div>
                              <h5 data-translate="modal_software_quality_title">Controle de Qualidade</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_software_quality_badge">Testes</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_software_quality_desc">Testes unitários, integração, sistema e aceitação. Garantia de qualidade através de revisões de código, análise estática e métricas.</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag bootstrap">Testes Unitários</span>
                            <span className="stack-tag primeng">QA</span>
                            <span className="stack-tag angular">Code Review</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-top border-bottom">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div className="flex-shrink-0">
                            <i className="bi bi-mortarboard-fill text-primary" style={{ fontSize: '1.5rem' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-2" style={{ fontSize: '1.15rem' }} data-translate="modal_software_education_title">Formação Acadêmica</h5>
                            <p className="mb-2" style={{ fontSize: '0.95rem' }} data-translate="modal_software_education_desc">
                              <strong data-translate="modal_software_education_strong1">Análise e Desenvolvimento de Sistemas</strong> na Faculdade de Tecnologia de Mogi das Cruzes e <strong data-translate="modal_software_education_strong2">Engenharia de Software</strong> na Universidade de Mogi das Cruzes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-column" style={{ borderLeft: '2px solid color-mix(in srgb, var(--accent-color), transparent 90%)' }}>
                  <div className="modal-section process-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-diagram-3"></i>
                      </div>
                      <h3 data-translate="modal_software_methodology_title">Metodologia de Trabalho</h3>
                    </div>
                    
                    <div className="process-timeline">
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">01</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_software_step1_title">Levantamento de Requisitos</h4>
                            <div className="step-badge" data-translate="modal_software_step1_badge">Entendimento</div>
                          </div>
                          <p data-translate="modal_software_step1_desc">Análise detalhada das necessidades do cliente, definição de escopo, regras de negócio e documentação técnica inicial.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_software_step1_tag1">Regras de Negócio</span>
                            <span className="tag" data-translate="modal_software_step1_tag2">Documentação</span>
                            <span className="tag" data-translate="modal_software_step1_tag3">Casos de Uso</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">02</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_software_step2_title">Modelagem & Planejamento</h4>
                            <div className="step-badge" data-translate="modal_software_step2_badge">Estrutura</div>
                          </div>
                          <p data-translate="modal_software_step2_desc">UML, diagramas de caso de uso, classes, sequência. Definição de arquitetura, backlog do produto e planejamento de sprints.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_software_step2_tag1">UML</span>
                            <span className="tag" data-translate="modal_software_step2_tag2">Arquitetura</span>
                            <span className="tag" data-translate="modal_software_step2_tag3">Backlog</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">03</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_software_step3_title">Desenvolvimento Iterativo</h4>
                            <div className="step-badge" data-translate="modal_software_step3_badge">Implementação</div>
                          </div>
                          <p data-translate="modal_software_step3_desc">Codificação com práticas ágeis, versionamento (Git), pair programming quando aplicável e integração contínua.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_software_step3_tag1">SCRUM</span>
                            <span className="tag" data-translate="modal_software_step3_tag2">Git</span>
                            <span className="tag" data-translate="modal_software_step3_tag3">CI/CD</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">04</span>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_software_step4_title">Qualidade & Entrega</h4>
                            <div className="step-badge" data-translate="modal_software_step4_badge">Validação</div>
                          </div>
                          <p data-translate="modal_software_step4_desc">Testes rigorosos, revisões de código, garantia de qualidade, documentação final e deploy controlado.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_software_step4_tag1">Testes Automatizados</span>
                            <span className="tag" data-translate="modal_software_step4_tag2">Code Review</span>
                            <span className="tag" data-translate="modal_software_step4_tag3">Deploy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-modal modal fade" id="powerbiModal" tabIndex="-1" aria-labelledby="powerbiModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-content">
                <h2 className="modal-title" id="powerbiModalLabel" data-translate="modal_powerbi_title">Power BI & Análise de Dados</h2>
                <a href="https://matheusabib.github.io/Tela-de-Links-PowerBI/" target="_blank" rel="noopener noreferrer" style={{ width: 'auto', fontSize: '1.05rem' }}>
                  <i className="bi bi-eye me-2"></i>
                  <span data-translate="modal_access_projects_dashboards">Acessar Projetos</span>
                </a>
              </div>
              <button type="button" className="btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-grid">
                <div className="modal-column">
                  <div className="modal-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-bar-chart-line"></i>
                      </div>
                      <h3 data-translate="modal_powerbi_specialties_title">Minhas Especialidades</h3>
                    </div>
                    
                    <div className="tech-section">
                      <div className="tech-cards">
                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon web">
                                <i className="bi bi-graph-up"></i>
                              </div>
                              <h5 data-translate="modal_powerbi_dashboard_title">Dashboard & Visualizações</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_powerbi_dashboard_badge">Análise</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_powerbi_dashboard_desc">Criação de dashboards interativos com gráficos dinâmicos e visualizações que contam histórias com os dados.</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag bootstrap">Dashboards</span>
                            <span className="stack-tag mysql">Gráficos</span>
                            <span className="stack-tag mysql">Oracle</span>
                            <span className="stack-tag java">SQL Server</span>
                            <span className="stack-tag spring">Excel</span>
                          </div>
                        </div>

                        <div className="tech-card">
                          <div className="tech-card-header">
                            <div className="tech-header-left">
                              <div className="tech-icon web">
                                <i className="bi bi-file-earmark-spreadsheet"></i>
                              </div>
                              <h5 data-translate="modal_powerbi_excel_title">Excel Avançado</h5>
                            </div>
                            <div className="tech-badge" data-translate="modal_powerbi_excel_badge">Análise</div>
                          </div>
                          <div className="tech-card-body">
                            <p data-translate="modal_powerbi_excel_desc">Fórmulas complexas, tabelas dinâmicas, Power Query, macros e integração entre Excel e Power BI para análises robustas.</p>
                          </div>
                          <div className="tech-stack">
                            <span className="stack-tag bootstrap">Power Query</span>
                            <span className="stack-tag primeng">Tabelas Dinâmicas</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-top border-bottom">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div className="flex-shrink-0">
                            <i className="bi bi-award-fill text-warning" style={{ fontSize: '1.5rem' }}></i>
                          </div>
                          <div>
                            <h5 className="mb-2" style={{ fontSize: '1.15rem' }} data-translate="modal_powerbi_certification_title">Certificação Power BI</h5>
                            <p className="mb-2" style={{ fontSize: '0.95rem' }} data-translate="modal_powerbi_certification_desc">
                              Concluí o curso <strong data-translate="modal_powerbi_certification_strong">Microsoft Power BI Para Business Intelligence e Data Science</strong>, adquirindo conhecimento em:
                            </p>
                            <ul className="mb-0" style={{ fontSize: '0.9rem' }}>
                              <li data-translate="modal_powerbi_certification_item1">DAX (Data Analysis Expressions)</li>
                              <li data-translate="modal_powerbi_certification_item2">Power Query para ETL</li>
                              <li data-translate="modal_powerbi_certification_item3">Modelagem de dados relacionais</li>
                              <li data-translate="modal_powerbi_certification_item4">Visualizações interativas</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="modal-column" style={{ borderLeft: '2px solid color-mix(in srgb, var(--accent-color), transparent 90%)' }}>
                  <div className="modal-section process-section">
                    <div className="section-header">
                      <div className="section-icon">
                        <i className="bi bi-diagram-3"></i>
                      </div>
                      <h3 data-translate="modal_powerbi_process_title">Meu Processo de Análise</h3>
                    </div>
                    
                    <div className="process-timeline">
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">01</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_powerbi_step1_title">Coleta & Preparação</h4>
                            <div className="step-badge" data-translate="modal_powerbi_step1_badge">ETL</div>
                          </div>
                          <p data-translate="modal_powerbi_step1_desc">Conecto múltiplas fontes de dados (Excel, Oracle, SQL), realizo limpeza e transformação usando Power Query para garantir qualidade.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_powerbi_step1_tag1">Power Query</span>
                            <span className="tag" data-translate="modal_powerbi_step1_tag2">Limpeza de Dados</span>
                            <span className="tag" data-translate="modal_powerbi_step1_tag3">Oracle</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">02</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_powerbi_step2_title">Modelagem & Relacionamentos</h4>
                            <div className="step-badge" data-translate="modal_powerbi_step2_badge">Estrutura</div>
                          </div>
                          <p data-translate="modal_powerbi_step2_desc">Crio modelos de dados relacionais, estabeleço conexões entre tabelas e aplico DAX para medidas e cálculos personalizados.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_powerbi_step2_tag1">Modelagem</span>
                            <span className="tag" data-translate="modal_powerbi_step2_tag2">DAX</span>
                            <span className="tag" data-translate="modal_powerbi_step2_tag3">Relacionamentos</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">03</span>
                          <div className="step-line"></div>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_powerbi_step3_title">Visualização</h4>
                            <div className="step-badge" data-translate="modal_powerbi_step3_badge">Design</div>
                          </div>
                          <p data-translate="modal_powerbi_step3_desc">Desenvolvo dashboards intuitivos com gráficos interativos que contam histórias claras sobre os dados para diferentes públicos.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_powerbi_step3_tag1">Dashboard</span>
                            <span className="tag" data-translate="modal_powerbi_step3_tag2">Storytelling</span>
                            <span className="tag" data-translate="modal_powerbi_step3_tag3">UX de Dados</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="process-step">
                        <div className="step-indicator">
                          <span className="step-number-passo">04</span>
                        </div>
                        <div className="step-content-passo">
                          <div className="step-header">
                            <h4 data-translate="modal_powerbi_step4_title">Análise & Insights</h4>
                            <div className="step-badge" data-translate="modal_powerbi_step4_badge">Valor</div>
                          </div>
                          <p data-translate="modal_powerbi_step4_desc">Identifico padrões, tendências e oportunidades nos dados, gerando insights acionáveis para decisões estratégicas.</p>
                          <div className="step-tags">
                            <span className="tag" data-translate="modal_powerbi_step4_tag1">Insights</span>
                            <span className="tag" data-translate="modal_powerbi_step4_tag2">Tendências</span>
                            <span className="tag" data-translate="modal_powerbi_step4_tag3">Decisão</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;