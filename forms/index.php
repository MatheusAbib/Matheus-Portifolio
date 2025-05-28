<?php
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Carrega as configurações do caminho específico
$config = require 'C:/Users/97857/Desktop/projects/Portifolio/forms/config.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Todos os campos obrigatórios devem ser preenchidos.'
        ]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuração do SendGrid
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey';
        $mail->Password = $config['SENDGRID_API_KEY'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($config['EMAIL_FROM'], $name);
        $mail->addAddress($config['EMAIL_TO']);

        $mail->isHTML(true);
        $mail->Subject = "Contato do site";

        $mail->Body = "
            <div style='font-family: Arial, sans-serif; color: #333; font-size: 16px;'>
                <h2 style='color: #007BFF;'>Nova mensagem do Portifólio</h2>
                <p><strong>Nome:</strong> <span style='color: #555;'>$name</span></p>
                <p><strong>Email:</strong> <a href='mailto:$email' style='color: #007BFF; text-decoration: none;'>$email</a></p>
                <p><strong>Telefone:</strong> <span style='color: #555;'>$phone</span></p>
                <hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'/>
                <p><strong>Mensagem:</strong></p>
                <p style='background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;'>$message</p>
                <footer style='font-size: 12px; color: #999; margin-top: 30px;'>
                    <p>Mensagem enviada pelo formulário do seu site</p>
                </footer>
            </div>
            ";

        $mail->send();

        echo json_encode([
            'status' => 'success',
            'message' => 'Sua mensagem foi enviada com sucesso!'
        ]);
    } catch (Exception $e) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Erro ao enviar: ' . $mail->ErrorInfo
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Método não permitido.'
    ]);
}