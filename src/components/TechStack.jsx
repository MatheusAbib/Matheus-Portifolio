import React, { useEffect, useState } from 'react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const technologies = [
    { icon: "fab fa-js-square", name: "JavaScript", color: "#F7DF1E" },
    { icon: "devicon-typescript-plain", name: "TypeScript", color: "#3178C6" },
    { icon: "fab fa-html5", name: "HTML", color: "#E34F26" },
    { icon: "fab fa-php", name: "PHP", color: "#777BB3" },
    { icon: "fab fa-react", name: "React", color: "#61DAFB" },
    { icon: "", name: "MySQL", isIconify: true, iconifyIcon: "logos:mysql" },
    { icon: "fab fa-java", name: "Java", color: "#f89820" }, 
    { icon: "fab fa-angular", name: "Angular", color: "#DD0031" },
    { icon: "fab fa-css3-alt", name: "CSS", color: "#1572B6" },
    { name: "SCSS", isIconify: true, iconifyIcon: "logos:sass" }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="tech_title">Stack Tecnológica</h2>
        </div>
      </div>
      
      <div className="container">
        <div className="tech-slider-container">
          <div 
            className={`tech-slider-track ${isVisible ? 'animate' : ''}`}
          >
            {technologies.map((tech, index) => (
              <div key={`first-${index}`} className="tech-slide">
                <div className="tech-icon-wrapper">
                  {tech.isIconify ? (
                    <iconify-icon icon={tech.iconifyIcon} width="48" height="48"></iconify-icon>
                  ) : (
                    <i className={tech.icon} style={{ color: tech.color }}></i>
                  )}
                </div>
                <h3>{tech.name}</h3>
              </div>
            ))}
            
            {technologies.map((tech, index) => (
              <div key={`second-${index}`} className="tech-slide">
                <div className="tech-icon-wrapper">
                  {tech.isIconify ? (
                    <iconify-icon icon={tech.iconifyIcon} width="48" height="48"></iconify-icon>
                  ) : (
                    <i className={tech.icon} style={{ color: tech.color }}></i>
                  )}
                </div>
                <h3>{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;