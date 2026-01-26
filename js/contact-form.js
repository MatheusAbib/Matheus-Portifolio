document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'http://localhost:3000/api'; 
    
    const emailForm = document.getElementById('emailForm');
    const submitBtn = document.getElementById('submitBtn');
    const responseMessage = document.getElementById('responseMessage');
    
    if (!emailForm) {
        console.warn('Formulário não encontrado');
        return;
    }
    
    testApiConnection();
    
    emailForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            userEmail: document.getElementById('userEmail').value.trim(), // Note: userEmail no backend
            phone: document.getElementById('phone') ? document.getElementById('phone').value.trim() : '',
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        try {
            const response = await fetch(`${API_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                showResponse('✅ ' + data.message, 'success');
                // Limpar formulário após sucesso
                emailForm.reset();
            } else {
                showResponse('❌ ' + (data.error || 'Erro ao enviar email'), 'error');
            }
            
        } catch (error) {
            console.error('Erro:', error);
            showResponse('❌ Erro de conexão com o servidor. Verifique se o backend está rodando.', 'error');
            
            simulateEmailSend(formData);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
    
    async function testApiConnection() {
        try {
            const response = await fetch(`${API_URL}/test`);
            if (response.ok) {
                const data = await response.json();
                console.log('✅ API conectada:', data.message);
                
                const apiIndicator = document.createElement('div');
                apiIndicator.className = 'api-indicator';
                apiIndicator.innerHTML = `<i class="fas fa-check-circle me-1"></i>API conectada`;
                apiIndicator.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #28a745;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    font-size: 12px;
                    z-index: 1000;
                    display: none;
                `;
                document.body.appendChild(apiIndicator);
                apiIndicator.style.display = 'block';
                setTimeout(() => apiIndicator.style.display = 'none', 3000);
            }
        } catch (error) {
            console.warn('⚠️ API não conectada. Usando modo simulação.');
            showApiWarning();
        }
    }
    
    function showApiWarning() {
        const warningBox = document.createElement('div');
        warningBox.className = 'api-warning alert alert-warning';
        warningBox.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-exclamation-triangle me-3" style="font-size: 1.5rem;"></i>
                <div>
                    <strong>Modo Desenvolvimento</strong><br>
                    <small>O backend não está conectado. Use o botão "Testar" para simular o envio.</small>
                </div>
            </div>
        `;
        warningBox.style.cssText = `
            margin: 15px 0;
            animation: fadeIn 0.5s;
        `;
        
        const formSection = document.querySelector('#form-section .container');
        if (formSection) {
            formSection.insertBefore(warningBox, emailForm);
        }
        
        addTestButton();
    }
    
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showResponse('Por favor, preencha todos os campos obrigatórios.', 'error');
            highlightEmptyFields();
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showResponse('Por favor, insira um email válido.', 'error');
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



    function showSuccessAnimation() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Enviado!';
    submitBtn.className = 'btn btn-success';
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Enviar Mensagem';
        submitBtn.className = 'btn-submit';
    }, 3000);
}

if (data.success) {
    showResponse('✅ ' + data.message, 'success');
    showSuccessAnimation();
    emailForm.reset();
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
        responseMessage.textContent = message;
        responseMessage.className = `alert alert-${type === 'success' ? 'success' : 'danger'} response-message`;
        responseMessage.style.display = 'block';
        
        setTimeout(function() {
            responseMessage.style.display = 'none';
            responseMessage.className = 'response-message';
        }, 5000);
        
        responseMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    function simulateEmailSend(formData) {
        console.log('=== MODO SIMULAÇÃO ===');
        console.log('Dados que seriam enviados:');
        console.log('Nome:', formData.name);
        console.log('Email:', formData.userEmail);
        console.log('Telefone:', formData.phone);
        console.log('Assunto:', formData.subject);
        console.log('Mensagem:', formData.message);
        console.log('========================');
        
        showResponse(`Simulação: Mensagem de "${formData.name}" seria enviada.`, 'warning');

    }
    
    function addTestButton() {
        const testButton = document.createElement('button');
        testButton.innerHTML = '<i class="fas fa-vial me-2"></i>Preencher com Dados de Teste';
        testButton.type = 'button';
        testButton.className = 'btn btn-outline-secondary btn-sm mb-3';
        testButton.style.cssText = 'font-size: 0.9rem;';
        
        testButton.addEventListener('click', function() {
            document.getElementById('name').value = 'João Silva';
            document.getElementById('userEmail').value = 'joao.silva@exemplo.com';
            document.getElementById('phone').value = '(11) 99999-9999';
            document.getElementById('subject').value = 'Proposta de Projeto Web';
            document.getElementById('message').value = 'Olá Matheus,\n\nGostei muito do seu portfólio! Tenho um projeto de desenvolvimento web e gostaria de conversar sobre uma possível colaboração.\n\nPodemos agendar uma reunião?\n\nAtenciosamente,\nJoão Silva';
            
            showResponse('Formulário preenchido com dados de exemplo. Clique em "Enviar Mensagem" para testar.', 'info');
            
            ['name', 'userEmail', 'phone', 'subject', 'message'].forEach(id => {
                const field = document.getElementById(id);
                if (field) field.classList.remove('is-invalid');
            });
        });
        
        emailForm.parentNode.insertBefore(testButton, emailForm);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .is-invalid {
            border-color: #dc3545 !important;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e") !important;
            background-repeat: no-repeat;
            background-position: right calc(0.375em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
        }
        
        .is-invalid:focus {
            border-color: #dc3545 !important;
            box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25) !important;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fa-spinner {
            animation: fa-spin 2s linear infinite;
        }
        
        .response-message {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});