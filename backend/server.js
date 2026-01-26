const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Resend } = require('resend');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:3000', 'https://matheusabib.github.io'],
    credentials: true
}));
app.use(express.json());

// Rota de teste
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'API funcionando!',
        service: 'Resend',
        status: 'ready',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/send-email', async (req, res) => {
    try {
        const { name, userEmail, phone, subject, message } = req.body;

        // Validação dos campos obrigatórios
        if (!name || !userEmail || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                error: 'Todos os campos são obrigatórios' 
            });
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            return res.status(400).json({ 
                success: false, 
                error: 'Email inválido' 
            });
        }

        console.log(`📤 Tentando enviar email de: ${name} <${userEmail}>`);

        const recipientEmail = 'matheus.abib.ma@gmail.com';

        const { data, error } = await resend.emails.send({
            from: `Portfólio de Matheus Abib <${process.env.FROM_EMAIL}>`,
            to: [recipientEmail],
            reply_to: userEmail,
            subject: `📧 Novo contato do portfólio: ${subject}`,
        // Substitua o HTML do email por esta versão melhorada:
html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2px; border-radius: 12px;">
    <div style="background: white; border-radius: 10px; padding: 0;">
        <!-- Cabeçalho -->
        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 30px 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🎨 Novo Contato - Portfólio</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Matheus Abib | Desenvolvedor Web Full Stack</p>
        </div>
        
        <!-- Corpo -->
        <div style="padding: 30px;">
            <!-- Informações do contato -->
            <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #4299e1;">
                <h2 style="color: #2d3748; margin-top: 0; font-size: 18px;">📋 Informações do Contato</h2>
                
                <!-- Grid de informações -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    <!-- Nome -->
                    <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="background: #4299e1; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                                👤
                            </div>
                            <span style="color: #718096; font-size: 14px;">Nome</span>
                        </div>
                        <p style="margin: 0; font-weight: 600; color: #2d3748; font-size: 16px;">${name}</p>
                    </div>
                    
                    <!-- Email -->
                    <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="background: #48bb78; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                                📧
                            </div>
                            <span style="color: #718096; font-size: 14px;">Email</span>
                        </div>
                        <p style="margin: 0; font-weight: 600; color: #2d3748; font-size: 16px;">
                            <a href="mailto:${userEmail}" style="color: #48bb78; text-decoration: none;">${userEmail}</a>
                        </p>
                    </div>
                    
                    <!-- Telefone (se existir) -->
                    ${phone ? `
                    <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="background: #ed8936; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                                📞
                            </div>
                            <span style="color: #718096; font-size: 14px;">Telefone</span>
                        </div>
                        <p style="margin: 0; font-weight: 600; color: #2d3748; font-size: 16px;">
                            <a href="tel:${phone.replace(/\D/g, '')}" style="color: #ed8936; text-decoration: none;">${phone}</a>
                        </p>
                    </div>
                    ` : ''}
                    
                    <!-- Assunto -->
                    <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <div style="display: flex; align-items: center; margin-bottom: 8px;">
                            <div style="background: #9f7aea; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px;">
                                🏷️
                            </div>
                            <span style="color: #718096; font-size: 14px;">Assunto</span>
                        </div>
                        <p style="margin: 0; font-weight: 600; color: #2d3748; font-size: 16px;">${subject}</p>
                    </div>
                </div>
            </div>
            
            <!-- Mensagem -->
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 2px; border-radius: 8px;">
                <div style="background: white; padding: 25px; border-radius: 6px;">
                    <h2 style="color: #2d3748; margin-top: 0; font-size: 18px;">📝 Mensagem</h2>
                    <div style="background: #fff5f7; padding: 20px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #f687b3;">
                        <p style="white-space: pre-line; line-height: 1.6; margin: 0; color: #4a5568;">${message}</p>
                    </div>
                </div>
            </div>
            
            <!-- Rodapé -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="color: #718096; font-size: 12px; margin: 0;">
                    ⏰ Recebido em: ${new Date().toLocaleString('pt-BR', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>
                <p style="color: #718096; font-size: 12px; margin: 8px 0 0 0;">
                    🔗 Fonte: Formulário de Contato do Portfólio - <a href="https://matheusabib.github.io" style="color: #667eea; text-decoration: none;">matheusabib.github.io</a>
                </p>
                <div style="margin-top: 15px; padding: 12px; background: #f7fafc; border-radius: 6px;">
                    <p style="color: #4a5568; font-size: 11px; margin: 0;">
                        💼 <strong>Matheus Abib</strong> | Desenvolvedor Web Full Stack | Análise e Desenvolvimento de Sistemas
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`
        });

        if (error) {
            console.error('❌ Erro do Resend:', error);
            return res.status(500).json({ 
                success: false, 
                error: 'Erro ao enviar email. Por favor, tente novamente mais tarde.' 
            });
        }

        console.log('✅ Email enviado com sucesso! ID:', data.id);
        
        res.status(200).json({ 
            success: true, 
            message: 'Email enviado com sucesso! Entrarei em contato em breve.',
            emailId: data.id
        });

    } catch (error) {
        console.error('❌ Erro inesperado:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Erro interno do servidor. Por favor, tente novamente.' 
        });
    }
});

app.get('/api/config', (req, res) => {
    res.json({
        service: 'Resend',
        fromEmail: process.env.FROM_EMAIL,
        hasApiKey: !!process.env.RESEND_API_KEY,
        status: process.env.RESEND_API_KEY ? 'configurado' : 'não configurado',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor do portfólio rodando na porta ${PORT}`);
    console.log(`📧 API de emails pronta`);
    console.log(`📌 Teste: http://localhost:${PORT}/api/config`);
});