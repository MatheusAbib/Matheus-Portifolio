import { useState, useEffect, createContext, useContext } from 'react';
import { translations } from '../utils/translations';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'pt';
  });

  const t = (key) => {
    return translations[language][key] || key;
  };

  const translateHTML = (key) => {
    const translation = translations[language][key];
    if (!translation) return key;
    return { __html: translation };
  };

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  useEffect(() => {
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translations[language][key];
      if (translation) {
        const hasHtml = /<\/?[a-z][\s\S]*>/i.test(translation);
        if (hasHtml) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      const translation = translations[language][key];
      if (translation) {
        element.placeholder = translation;
      }
    });

    document.querySelectorAll('.btn-translate span[data-translate="btn_translate"]').forEach(span => {
      span.textContent = language === 'pt' ? 'PT/EN' : 'EN/PT';
    });

    document.documentElement.lang = language;
  }, [language]);

  return (
    <TranslationContext.Provider value={{ t, translateHTML, language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};