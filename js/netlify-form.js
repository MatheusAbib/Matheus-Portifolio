document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const formResponse = document.getElementById('formResponse');
    const submitBtn = emailForm.querySelector('.btn-submit');
    
    if (!emailForm) return;
    
    // Armazenar o texto original do botão
    const originalBtnText = submitBtn.innerHTML;
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulário
        if (!validateForm()) {
            return;
        }
        
        // Mostrar loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
        
        // Coletar dados do formulário
        const formData = new FormData(emailForm);
        
        // Enviar formulário via Netlify Forms
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
            // Sucesso!
            showResponse('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            emailForm.reset();
            
            // Restaurar botão com efeito de sucesso
            submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Enviado!';
            submitBtn.classList.add('btn-success');
            
            // Reset após 3 segundos
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.classList.remove('btn-success');
                submitBtn.disabled = false;
            }, 3000);
        })
        .catch(error => {
            // Erro
            console.error('Erro:', error);
            showResponse('❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.', 'error');
            
            // Restaurar botão
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    });
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validação simples
        if (!name || !email || !subject || !message) {
            showResponse('Por favor, preencha todos os campos obrigatórios.', 'error');
            return false;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showResponse('Por favor, insira um email válido.', 'error');
            return false;
        }
        
        return true;
    }
    
    function showResponse(message, type) {
        formResponse.textContent = message;
        formResponse.className = `response-message ${type}`;
        formResponse.style.display = 'block';
        
        // Auto-esconder após 5 segundos (exceto sucesso)
        if (type !== 'success') {
            setTimeout(() => {
                formResponse.style.display = 'none';
            }, 5000);
        }
        
        // Scroll suave para a mensagem
        formResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Adicionar estilos CSS inline para confirmação
    const style = document.createElement('style');
    style.textContent = `
        .btn-success {
            background: linear-gradient(135deg, #28a745, #20c997) !important;
            transform: scale(1.05);
            transition: all 0.3s ease;
        }
        
        .btn-success:hover {
            transform: scale(1.05) translateY(-3px) !important;
        }
        
        #formResponse.success {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            color: #155724;
            border: 2px solid #28a745;
            border-radius: 12px;
            padding: 1.25rem;
            margin-top: 1.5rem;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            align-items: center;
            animation: slideInUp 0.5s ease;
        }
        
        #formResponse.success::before {
            content: '✓';
            margin-right: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        #formResponse.error {
            background: linear-gradient(135deg, #f8d7da, #f5c6cb);
            color: #721c24;
            border: 2px solid #dc3545;
            border-radius: 12px;
            padding: 1.25rem;
            margin-top: 1.5rem;
            font-weight: 600;
            font-size: 1rem;
            display: flex;
            align-items: center;
            animation: slideInUp 0.5s ease;
        }
        
        #formResponse.error::before {
            content: '✗';
            margin-right: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .fa-spinner {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});