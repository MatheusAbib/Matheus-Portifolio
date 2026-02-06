import React, { useEffect, useRef } from 'react';

const MediaQueriesManager = () => {
  const stylesRef = useRef(null);

  useEffect(() => {
    if (!stylesRef.current) {
      stylesRef.current = document.createElement('style');
      stylesRef.current.id = 'media-queries-global';
      document.head.appendChild(stylesRef.current);
    }

    applyAllMediaQueries();


  }, []);

  const applyAllMediaQueries = () => {
    const css = `    
    @media (min-width: 768px) {
        .g-5, .gy-5 {
            --bs-gutter-y: 2rem;
        }

        .g-5, .gx-5{
        --bs-gutter-x: 2rem;
        }
    }

    

        @media screen and (max-width: 768px) {
            .contact-form-modern input,
            .contact-form-modern textarea,
            .contact-form-modern select {
                font-size: 16px !important;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }
            
            @supports (-webkit-overflow-scrolling: touch) {
                .form-input {
                    font-size: 16px !important;
                }
            }
        }

      
      /* === Ajuste de delay mobile (max-width: 768px) === */
      @media (max-width: 768px) {
          .softskills-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

        section, .section {
        padding: 10% 0 10%;
    } 

    .hero{
      padding: 18% 0 10%;
    }

    .skill-icon {
        width: 60px;
        height: 60px;
    }
    
    .skill-icon i {
        font-size: 1.7rem;
    }
    
    .skill-title {
        font-size: 1.3rem;
    }
        .certificates-nav {
        padding: 1rem;
        gap: 10px;
    }
    
    .certificate-tab-btn {
        padding: 0.9rem 1rem;
        font-size: 0.85rem;
    }
    
    .certificates-content {
        padding: 1.5rem;
    }
    
    .certificate-card {
        padding: 0rem;
    }
    
    .certificate-title {
        font-size: 1.4rem;
    }
    .certificate-institution{
      font-size: 0.9rem;
    }

    .skills-title{
      font-size: 0.9rem;
    }
    .skills-tags{
      gap: 0.4rem;
    }
    .skill-tag{
      padding: 0.3rem 0.8rem;
          font-size: 0.7rem;
              border-radius: 10px;
    }

    .certificate-description p{
          font-size: 0.8rem;

    }
           .footer {
        padding: 3rem 0 1rem;
    }
    
    .footer-top {
        padding-bottom: 2.5rem;
    }
    
    .footer-about {
        padding-right: 0;
        margin-bottom: 2rem;
    }
    
    .footer-links,
    .footer-services,
    .footer-newsletter {
        margin-bottom: 2rem;
    }
    
    .footer-services ul li,
    .footer-links ul li {
        margin-bottom: 0.8rem;
    }
    
    .social-links {
        justify-content: center;  
}


          .form-actions {
            gap: 1rem;
            margin-top: 0;
        }
        
        .submit-container {
            justify-content: center;
            order: 2;
        }
        
        .form-footer {
            text-align: center;
            order: 1;
        }
        
        .tech-slide {
            width: 150px;
        }
        .tech-slide i,
        .tech-slide iconify-icon {
            font-size: 50px;
        }

        [data-aos-delay] {
          transition-delay: 0 !important;
        }
          .footer{
          margin-bottom: -11%;
          }

        .section-title h2{
        font-size: 34px
        }

        .portfolio .portfolio-filters{
        gap: 15px;

        }

          .tech-tags {
          gap: 4px;
        }
        
        .tech-tags .tag {
          font-size: 0.65rem;
          padding: 2px 8px;
        }
        
        .stack-badge {
          font-size: 0.7rem;
          padding: 3px 10px;
        }

        .hero-highlight {
        padding: 2.5rem 2rem;
        margin-bottom: 3rem;
        border-radius: 12px;
        background-size: 
          cover, cover, cover,
          30px 30px, 30px 30px,
          150px 150px,
          cover;
      }
      
      .hero-highlight::before,
      .hero-highlight::after {
        filter: blur(30px);
      }
      
      .hero-highlight .hero-title {
        font-size: 2.2rem;
      }
      
      .hero-highlight .social-icon {
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }
      }
      
      /* === Hero Title (max-width: 991.98px) === */
      @media (max-width: 991.98px) {
        .hero .hero-title {
          font-size: 2rem;
        }
      }
      
      /* === Feature Boxes (min-width: 576px) === */
      @media (min-width: 576px) {
        .hero .feature-boxes .feature-box {
          flex-direction: row;
          align-items: flex-start;
          text-align: left;
        }
      }
      
      /* === Services & How We Work (max-width: 767.98px) === */
      @media (max-width: 767.98px) {

        #header.header .logo h1{
        font-size: 24px;
        }
        #header.header .logo span{
        font-size: 24px;
        }
      
        .services .service-item {
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .services .service-icon {
          width: 60px;
          height: 60px;
          margin-right: 1rem;
        }
        .services .service-icon i {
          font-size: 1.5rem;
        }
        .services .service-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }
        .services .service-content p {
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .how-we-work .process-container {
          padding: 1rem 0;
        }
        .how-we-work .process-item {
          padding-bottom: 2rem;
        }
        .how-we-work .process-item .content {
          border-width: 1px;
          background: linear-gradient(145deg,
 color-mix(in srgb, var(--accent-color), transparent 95%), var(--surface-color));
  border: 2px solid
 color-mix(in srgb, var(--accent-color), transparent 85%);
        }

        .how-we-work::before {
          display: none;
        }

        .how-we-work::after {
          display: none;
        }

        .how-we-work .process-item .content:hover {
          transform: translateY(-5px);
        }
        .how-we-work .process-item .step-number {
          font-size: 3rem;
          left: 50%;
          top: -1.5rem;
          transform: translateX(-50%);
        }
        .how-we-work .process-item .step-number:hover {
          transform: translateX(-50%);
        }
        .how-we-work .process-item .card-body {
          padding: 2rem 1.5rem 1.5rem;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          
        }
        .how-we-work .process-item .step-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
        }
        .how-we-work .process-item .step-icon i {
          font-size: 1.75rem;
        }
        .how-we-work .process-item .step-content h3 {
          font-size: 1.25rem;
        }
        .how-we-work .process-item .arrow {
          height: 60px;
          margin: 0.5rem 0;
        }
        .hero .feature-boxes .feature-box {
          padding: 1.25rem;
        }
        .hero .feature-boxes .feature-box .feature-icon {
          width: 50px;
          height: 50px;
        }
        .hero .feature-boxes .feature-box .feature-icon i {
          font-size: 1.5rem;
        }
        .hero .feature-boxes .feature-box .feature-title {
          font-size: 1.125rem;
        }
        .hero .feature-boxes .feature-box .feature-text {
          font-size: 0.875rem;
        }
        .hero .badge-wrapper .d-inline-flex .badge-text {
          font-size: 0.75rem;
        }
        .hero .hero-title {
          font-size: 1.75rem;
        }
        .hero .hero-description {
          font-size: 1rem;
        }
      }
      
      /* === Services Mobile (max-width: 575.98px) === */
      @media (max-width: 575.98px) {
        .services .service-item {
          flex-direction: column;
        }

        .services .service-item:hover::before {
          transform: scaleX(1);
        }
        .services .service-icon {
          margin-right: 0;
          margin-bottom: 1.25rem;
        }
        .services .service-link {
          justify-content: center;
        }
      }
      
      /* === Services Alt (max-width: 992px) === */
      @media (max-width: 992px) {
        .modal-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .softskill-card {
            padding: 2rem;
        }
        .certificate-card {
            flex-direction: column;
            gap: 2rem;
        }
        
        .certificate-image {
            flex: 0 0 auto;
        }
        
        .certificates-content {
            padding: 2rem;
        }
        
        .certificate-title {
            font-size: 1.3rem;
        }
        .services-alt .content-block {
          margin-right: 0;
        }
        .contact-form-modern {
            padding: 2.5rem 2rem;
        }
        
        .form-grid {
            grid-template-columns: 1fr;
        }
        
        .form-header h2 {
            font-size: 1.8rem;
        }
    
        
        .form-icon i {
            font-size: 2rem;
        }
        .custom-box {
          width: 100%;
          margin-left: 5%;
        }

        .hero-highlight {
          padding: 3rem 2.5rem;
          border-radius: 28px;
        }
        
        .hero-highlight .hero-title {
          font-size: 2.4rem;
        }
        
        .hero-highlight .hero-description {
          font-size: 1.15rem;
        }

        .footer {
            padding: 4rem 0 1.5rem;
        }
        
        .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
      }
      
      /* === Altura curta (max-height: 480px) === */
      @media (max-height: 480px) {
        .portfolio-scroll-container {
          max-height: 60vh;
          min-height: 200px;
        }

          .navmenu.mobile-nav-active {
            width: 280px;
            padding: 80px 20px 30px;
        }
        
        .navmenu.mobile-nav-active ul li a {
            padding: 14px 16px;
            font-size: 1rem;
        }
        
        .mobile-nav-toggle {
            width: 36px;
            height: 36px;
            font-size: 24px;
        }
      }

      @media (max-width: 1199px) {
        .mobile-nav-toggle {
            display: flex;
        }
        
        .navmenu ul {
            display: none;
        }
        
        .navmenu.mobile-nav-active ul {
            display: flex;
        }
        }

    
      /* === Dispositivos touch === */
      @media (hover: none) and (pointer: coarse) {
        .portfolio-scroll-container {
          overscroll-behavior: auto;
        }
      }
      
      /* === Mobile pequeno (max-width: 576px) === */
      @media (max-width: 576px) {

          .contact-form-modern {
        padding: 1rem 1rem;
    }
    
    .form-header h2 {
        font-size: 1.6rem;
    }
    
    .form-header p {
        font-size: 1rem;
    }
    
    .form-input {
        padding: 0.9rem 0.7rem 0.9rem 3rem;
        font-size: 0.75rem;
        border-radius: 8px;
    }
    
    .form-submit {
        padding: 0.8rem 1rem;
        min-width: 200px;
        font-size: 0.8rem;
        margin-bottom: 15px;
    }
    
    .contact-info-tags {
        display: none;
    }
        
    .form-footer p{
      display: none;
    }
        .form-grid {
                  gap: 1rem;
        }
    
    .contact-tag {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
        .custom-box {
          width: 100% !important;
          margin: 0 auto !important;
          justify-content: center !important;
        }
      .hero .feature-boxes {
                  margin-bottom: 2rem;
          }

        .hero .content .translate-and-download {
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

          .hero-highlight {
          padding: 2rem 1.2rem;
          border-radius: 12px;
        }
        
        .hero-highlight .hero-title {
          font-size: 1.6rem;
        }
        
        .hero-highlight .hero-description {
          font-size: 1rem;
          line-height: 1.7;
        }
        
        .hero-highlight .translate-and-download {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
      }

      @media (max-width: 765px) {
      .dropdown-menu {
        margin-top: -27px !important;
        margin-left: 50% !important;
        transform: none !important;
      }
    }

      @media (min-width: 992px) {
      .dropdown-curriculo.dropend .dropdown-menu {
        top: 0;
        left: 100%;
        right: auto;
        margin-top: 0;
        margin-left: 10px;
        transform: none !important;
      }
      
      .dropdown-curriculo.dropend .dropdown-menu {
        position: absolute;
        inset: 0 auto auto 0;
      }
    }
      
      /* === Tablet (min-width: 769px and max-width: 991px) === */
      @media (min-width: 769px) and (max-width: 991px) {
        .custom-box {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          justify-content: center;
        }
      }
      
      /* === Tablet pequeno (max-width: 767px and min-width: 530px) === */
      @media (max-width: 767px) and (min-width: 530px) {
        .custom-box {
          margin-top: 0;
          justify-content: center !important;
          display: flex;
        }
        .team-card {
          max-width: 100%;
        }
        #hero .col-md-7,
        #hero .col-md-5 {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
      
      /* === Mobile geral (max-width: 767px) === */
      @media (max-width: 767px) {
        .service-details .service-testimonial .testimonial-card .client-info img {
          margin: 0 auto 20px;
        }
        .testimonials .testimonial-content {
          padding: 30px 20px 20px;
        }
        .testimonials .testimonial-content p {
          font-size: 15px;
        }
        .testimonials .testimonial-content .quote-icon {
          font-size: 36px;
          left: 20px;
        }
        .testimonials .testimonial-profile {
          padding: 15px 20px;
        }
        .testimonials .profile-info img {
          width: 45px;
          height: 45px;
        }
        .service-details .service-cta {
          padding: 40px 20px;
        }
        .service-details .service-cta h3 {
          font-size: 26px;
        }
        .service-details .client-info {
          flex-direction: column;
          margin-bottom: 30px;
        }
        .service-details .service-tabs .tab-content {
          padding: 30px 20px;
        }
        .hero-social {
          gap: 9px;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          font-size: 16px;
        }
        .d-flex.align-items-center.justify-content-between {
          flex-direction: row;
        }
        .services-alt .services-list .service-item {
          padding: 2rem 0;
        }
        .services-alt .services-list .service-icon {
          height: 4rem;
          width: 4rem;
          margin-right: 1rem;
        }
        .services-alt .services-list .service-icon i {
          font-size: 2rem;
        }
        .services-alt .services-list .service-content h4 {
          font-size: 1.25rem;
        }
        .services-alt .services-list .service-content p {
          font-size: 0.9rem;
        }
        .portfolio .portfolio-filters li {
          font-size: 14px;
          padding: 6px 15px;
        }
        .portfolio .portfolio-card .portfolio-content {
          padding: 20px;
        }
        .portfolio .portfolio-card .portfolio-content h3 {
          font-size: 18px;
        }
        .portfolio .portfolio-card .portfolio-content p {
          font-size: 14px;
        }
        .portfolio-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .custom-box {
          width: 100% !important;
          margin: 0 auto !important;
        }
        .service-details .service-main-content .section-header h2 {
          font-size: 28px;
        }
        .service-details .service-tabs .nav-tabs {
          flex-wrap: nowrap;
          white-space: nowrap;
          overflow-x: auto;
        }
        .service-details .service-tabs .nav-tabs::-webkit-scrollbar {
          height: 5px;
        }
        .service-details .service-tabs .nav-tabs::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--default-color), transparent 80%);
          border-radius: 10px;
        }
      }
      
      /* === Services Details (max-width: 991px) === */
      @media (max-width: 991px) {
        .service-details .service-main-content {
          margin-top: 30px;
        }
        .service-details .service-tabs {
          margin-top: 50px;
        }
        .service-details .service-testimonial,
        .service-details .service-cta {
          margin-top: 50px;
        }
      }
      
      /* === Desktop médio (max-width: 1200px) === */
      @media (max-width: 1200px) {

        .btn-translate {
          width: 100%;
          justify-content: center;
        }
        #header.header .logo {
          order: 1;
        }

        .custom-box {
          width: 82%;
          margin-left: 18%;
        }
        .hero-highlight {
          padding: 2.5rem 1.5rem;
        }
      }
    `;
    
    if (stylesRef.current) {
      stylesRef.current.textContent = css;
    }
  };

  return null;
};

export default MediaQueriesManager;