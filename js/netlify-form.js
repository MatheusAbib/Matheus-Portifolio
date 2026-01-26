document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    if (!emailForm) return;
    
    const formResponse = document.getElementById('formResponse');
    const submitBtn = emailForm.querySelector('.btn-submit');
    const submitText = submitBtn.querySelector('span');
    const originalBtnText = submitBtn.innerHTML;
    
    const translations = {
        pt: {
            validation_name: "Por favor, preencha seu nome",
            validation_email: "Por favor, insira um email válido",
            validation_subject: "Por favor, insira o assunto",
            validation_message: "Por favor, escreva sua mensagem",
            success: "✅ Mensagem enviada com sucesso! Entrarei em contato em breve.",
            error: "❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.",
            loading: "Enviando...",
            sent: "Enviado!",
            required_fields: "Por favor, preencha todos os campos obrigatórios."
        },
        en: {
            validation_name: "Please fill in your name",
            validation_email: "Please enter a valid email",
            validation_subject: "Please enter the subject",
            validation_message: "Please write your message",
            success: " Message sent successfully! I'll contact you soon.",
            error: " An error occurred while sending the message. Please try again.",
            loading: "Sending...",
            sent: "Sent!",
            required_fields: "Please fill in all required fields."
        }
    };
    
    function getCurrentLang() {
        return localStorage.getItem('portfolio_lang') || 'pt';
    }
    
    function getTranslation(key) {
        const lang = getCurrentLang();
        return translations[lang]?.[key] || key;
    }
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        submitBtn.disabled = true;
        submitText.textContent = getTranslation('loading');
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${submitText.outerHTML}`;
        
        const formData = new FormData(emailForm);
        
        fetch('/', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                return response;
            }
            throw new Error('Network response was not ok.');
        })
        .then(() => {
            showResponse(getTranslation('success'), 'success');
            emailForm.reset();
            
            submitText.textContent = getTranslation('sent');
            submitBtn.innerHTML = `<i class="fas fa-check me-2"></i>${submitText.outerHTML}`;
            submitBtn.classList.add('btn-success');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.classList.remove('btn-success');
                submitBtn.disabled = false;
                submitText.textContent = getTranslation('form_submit');
            }, 3000);
        })
        .catch(error => {
            console.error('Erro:', error);
            showResponse(getTranslation('error'), 'error');
            
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitText.textContent = getTranslation('form_submit');
        });
    });
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showResponse(getTranslation('required_fields'), 'error');
            highlightEmptyFields();
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showResponse(getTranslation('validation_email'), 'error');
            document.getElementById('userEmail').classList.add('is-invalid');
            return false;
        }
        
        const phoneInput = document.getElementById('phone');
        if (phoneInput && phoneInput.value.trim()) {
            const phone = phoneInput.value.trim();
            const phoneRegex = /^[\d\s\(\)\-+]+$/;
            const digitsOnly = phone.replace(/\D/g, '');
            
            if (!phoneRegex.test(phone) || digitsOnly.length < 10) {
                showResponse('Por favor, insira um telefone válido (mínimo 10 dígitos).', 'error');
                phoneInput.classList.add('is-invalid');
                return false;
            }
        }
        
        return true;
    }
    
    function highlightEmptyFields() {
        const requiredFields = ['name', 'userEmail', 'subject', 'message'];
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && !field.value.trim()) {
                field.classList.add('is-invalid');
                field.addEventListener('input', function() {
                    if (this.value.trim()) {
                        this.classList.remove('is-invalid');
                    }
                }, { once: true });
            }
        });
    }
    
    function showResponse(message, type) {
        if (!formResponse) return;
        
        formResponse.textContent = message;
        formResponse.className = `response-message ${type}`;
        formResponse.style.display = 'block';
        
        if (type !== 'success') {
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        }
        
        formResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    const observer = new MutationObserver(function() {
        updateFormTranslations();
    });
    
    observer.observe(document.body, { 
        attributes: true, 
        attributeFilter: ['data-lang'] 
    });
    
    function updateFormTranslations() {
        const lang = getCurrentLang();
        
        const submitText = document.querySelector('.btn-submit span[data-translate="form_submit"]');
        if (submitText) {
            const key = submitText.getAttribute('data-translate');
            submitText.textContent = translations[lang]?.['form_submit'] || submitText.textContent;
        }
    }
    
    updateFormTranslations();
});