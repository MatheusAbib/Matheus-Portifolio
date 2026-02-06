import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, '($1');
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) {
      errors.push('Por favor, preencha seu nome');
    }
    
    if (!formData.email.trim()) {
      errors.push('Por favor, preencha seu email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push('Por favor, insira um email válido');
    }
    
    if (!formData.subject.trim()) {
      errors.push('Por favor, preencha o assunto');
    }
    
    if (!formData.message.trim()) {
      errors.push('Por favor, preencha a mensagem');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setResponseMessage(errors.join(', '));
      setResponseType('error');
      return;
    }
    
    setIsSubmitting(true);
    setResponseMessage('');
    setResponseType('');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });
      
      if (response.ok) {
        setResponseMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        setResponseType('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      setResponseMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.');
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-section" className="contact-form-section section">
      <div className="container section-title" data-aos="fade-up">
        <h2 data-translate="contact_form_title">Vamos Conversar!</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form 
          id="emailForm" 
          className="contact-form-modern"
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          netlify
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <p className="d-none">
            <label>Não preencha este campo se for humano: <input name="bot-field" /></label>
          </p>
          
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">
                <span data-translate="form_name">Seu Nome</span>
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <i className="input-icon fas fa-user"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  data-translate-placeholder="form_placeholder_name"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <span data-translate="form_email">E-mail</span>
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <i className="input-icon fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  data-translate-placeholder="form_placeholder_email"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <span data-translate="form_subject">Assunto</span>
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <i className="input-icon fas fa-tag"></i>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  data-translate-placeholder="form_placeholder_subject"
                  placeholder="Sobre o que gostaria de conversar?"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <span data-translate="form_phone">Telefone</span>
              </label>
              <div className="input-wrapper">
                <i className="input-icon fas fa-phone"></i>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handlePhoneInput}
                  data-translate-placeholder="form_placeholder_phone"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                <span data-translate="form_message">Sua Mensagem</span>
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <i className="input-icon fas fa-comment-dots" style={{ top: '2.1rem' }}></i>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  data-translate-placeholder="form_placeholder_message"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {responseMessage && (
            <div 
              id="formResponse" 
              className={`form-feedback mt-3 text-center ${responseType}`}
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.5rem',
                borderRadius: '10px',
                fontWeight: '500',
                backgroundColor: responseType === 'success' ? 'rgba(46, 213, 115, 0.1)' : 'rgba(255, 71, 87, 0.1)',
                border: responseType === 'success' ? '1px solid rgba(46, 213, 115, 0.3)' : '1px solid rgba(255, 71, 87, 0.3)',
                color: responseType === 'success' ? '#2ed573' : '#ff4757'
              }}
            >
              {responseMessage}
            </div>
          )}

          <div className="form-actions">
            <div className="form-footer">
              <div className="contact-info-tags">
                <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="contact-tag">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:matheus.abib.ma@gmail.com" className="contact-tag">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="contact-tag">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="submit-container">
              <button 
                type="submit" 
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="submit-loader"></div>
                    <span className="submit-text" data-translate="form_loading">Enviando...</span>
                  </>
                ) : (
                  <>
                    <span className="submit-text" data-translate="form_submit">Enviar Mensagem</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;