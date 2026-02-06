import { useEffect, useRef, useState } from 'react';

export function usePortfolioScroll() {
  const [isOverPortfolio, setIsOverPortfolio] = useState(false);
  const portfolioRef = useRef(null);
  const isProgrammaticNavigation = useRef(false);
  const navigationTimeout = useRef(null);

  const stopLenis = () => {
    if (window.lenisInstance) {
      window.lenisInstance.stop();
    }
  };

  const startLenis = () => {
    if (window.lenisInstance && !isOverPortfolio && !isProgrammaticNavigation.current) {
      window.lenisInstance.start();
    }
  };

  const setupNavigationLinks = () => {
    const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        isProgrammaticNavigation.current = true;
        clearTimeout(navigationTimeout.current);
        
        navigationTimeout.current = setTimeout(() => {
          isProgrammaticNavigation.current = false;
        }, 1500);
        
        const onScroll = () => {
          clearTimeout(navigationTimeout.current);
          navigationTimeout.current = setTimeout(() => {
            isProgrammaticNavigation.current = false;
            window.removeEventListener('scroll', onScroll);
          }, 500);
        };
        
        window.addEventListener('scroll', onScroll, { once: true });
      });
    });
  };

  const setupFooterNavigation = () => {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"], .footer-nav a[href^="#"]');
    
    footerLinks.forEach(link => {
      link.addEventListener('click', function() {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        isProgrammaticNavigation.current = true;
        clearTimeout(navigationTimeout.current);
        
        navigationTimeout.current = setTimeout(() => {
          isProgrammaticNavigation.current = false;
        }, 1500);
        
        const onScroll = () => {
          clearTimeout(navigationTimeout.current);
          navigationTimeout.current = setTimeout(() => {
            isProgrammaticNavigation.current = false;
            window.removeEventListener('scroll', onScroll);
          }, 500);
        };
        
        window.addEventListener('scroll', onScroll, { once: true });
      });
    });
  };

  useEffect(() => {
    const portfolioContainer = portfolioRef.current;
    
    if (!portfolioContainer) return;

    const checkAndRestartLenis = () => {
      if (window.lenisInstance && isProgrammaticNavigation.current) {
        setTimeout(() => {
          if (window.lenisInstance && isProgrammaticNavigation.current) {
            window.lenisInstance.start();
            isProgrammaticNavigation.current = false;
          }
        }, 800);
      }
    };

    const handleMouseEnter = () => {
      if (isProgrammaticNavigation.current) return;
      setIsOverPortfolio(true);
      stopLenis();
    };

    const handleMouseLeave = () => {
      setIsOverPortfolio(false);
      
      setTimeout(() => {
        if (!isOverPortfolio && !isProgrammaticNavigation.current) {
          startLenis();
        }
      }, 50);
    };

    const handleWheel = (e) => {
      e.stopPropagation();
      
      const currentScroll = portfolioContainer.scrollTop;
      const maxScroll = portfolioContainer.scrollHeight - portfolioContainer.clientHeight;
      
      if ((currentScroll <= 0 && e.deltaY < 0) || (currentScroll >= maxScroll && e.deltaY > 0)) {
        startLenis();
      }
    };

    portfolioContainer.addEventListener('mouseenter', handleMouseEnter);
    portfolioContainer.addEventListener('mouseleave', handleMouseLeave);
    portfolioContainer.addEventListener('wheel', handleWheel, { passive: false });

    setupNavigationLinks();
    setupFooterNavigation();
    
    const lenisInterval = setInterval(checkAndRestartLenis, 1000);

    return () => {
      if (portfolioContainer) {
        portfolioContainer.removeEventListener('mouseenter', handleMouseEnter);
        portfolioContainer.removeEventListener('mouseleave', handleMouseLeave);
        portfolioContainer.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(navigationTimeout.current);
      clearInterval(lenisInterval);
    };
  }, [isOverPortfolio]);

  return { portfolioRef };
}