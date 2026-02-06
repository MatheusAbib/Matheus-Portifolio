import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const { t, toggleLanguage } = useTranslation();

  const navItems = [
    { href: '#hero', textKey: 'menu_about', id: 'hero' },
    { href: '#metodologias', textKey: 'menu_methodologies', id: 'metodologias' },
    { href: '#service-details', textKey: 'menu_certificates', id: 'service-details' },
    { href: '#services', textKey: 'menu_services', id: 'services' },
    { href: '#services-alt', textKey: 'menu_skills', id: 'services-alt' },
    { href: '#portfolio', textKey: 'menu_projects', id: 'portfolio' },
    { href: '#form-section', textKey: 'menu_contact', id: 'form-section' },
  ];

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavActive]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      let current = '';
      const headerHeight = 100;
      const scrollPosition = window.scrollY + headerHeight;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id;
            break;
          }
        }
      }
      
      if (!current) {
        const testimonialsElement = document.getElementById('testimonials');
        if (testimonialsElement) {
          const offsetTop = testimonialsElement.offsetTop;
          const offsetHeight = testimonialsElement.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = 'services-alt';
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (sectionId) => {
    setClickedItem(sectionId);
    setTimeout(() => setClickedItem(null), 300);
    
    if (mobileNavActive) {
      setMobileNavActive(false);
    }
    
    setActiveSection(sectionId);
  };

  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('#header');
      const headerHeight = header ? header.offsetHeight : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        id="header" 
        className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
      >      
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <div 
            className="logo d-flex align-items-center" 
            onClick={() => {
              handleNavClick('hero');
              scrollToSection('hero');
            }}
            style={{cursor: 'pointer'}}
          >
            <h1 className="sitename">Matheus Abib</h1><span>.</span>
          </div>

          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                      scrollToSection(item.id);
                    }}
                    className={`d-flex align-items-center ${activeSection === item.id ? 'active' : ''} ${clickedItem === item.id ? 'clicked' : ''}`}
                  >
                    <span data-translate={item.textKey}>{t(item.textKey)}</span>
                    {activeSection === item.id && (
                      <span className="active-dot ms-2"></span>
                    )}
                  </a>
                </li>
              ))}
              <li className="d-block d-xl-none mt-3 pt-3 border-top">
                <button 
                  className="btn-translate w-100 d-flex justify-content-center align-items-center" 
                  onClick={() => {
                    toggleLanguage();
                    handleNavClick(activeSection);
                  }}
                >
                  <i className="bi bi-translate me-2"></i>
                  <span data-translate="btn_translate">{t('btn_translate')}</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="d-none d-xl-block">
            <button 
              className="btn-translate" 
              id="translateBtnDesktop" 
              data-lang="pt"
              onClick={toggleLanguage}
            >
              <i className="bi bi-translate"></i>
              <span data-translate="btn_translate">{t('btn_translate')}</span>
            </button>
          </div>

          <i 
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          ></i>
        </div>
      </header>

      {mobileNavActive && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => {
            setMobileNavActive(false);
            handleNavClick(activeSection);
          }}
        ></div>
      )}
    </>
  );
};

export default Header;