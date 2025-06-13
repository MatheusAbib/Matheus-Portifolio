<?php
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['status'=>'error','message'=>'Método não permitido.']);
    exit;
}

// Sanitiza inputs
$name    = htmlspecialchars($_POST['name']    ?? '');
$email   = htmlspecialchars($_POST['email']   ?? '');
$phone   = htmlspecialchars($_POST['phone']   ?? '');
$message = htmlspecialchars($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['status'=>'error','message'=>'Todos os campos obrigatórios devem ser preenchidos.']);
    exit;
}

$mail = new PHPMailer(true);
try {
    // SMTP via SendGrid
    $mail->isSMTP();
    $mail->Host       = 'smtp.sendgrid.net';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'apikey';
    $mail->Password   = getenv('SENDGRID_API_KEY');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Remetente e destinatário
    $mail->setFrom(getenv('EMAIL_FROM'), $name);
    $mail->addAddress(getenv('EMAIL_TO'));

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = 'Contato do site';
    $mail->Body    = "
      <h2>Nova mensagem do Portfólio</h2>
      <p><strong>Nome:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Telefone:</strong> $phone</p>
      <p><strong>Mensagem:</strong></p>
      <p style='background:#f9f9f9;padding:10px;'>$message</p>
    ";

    $mail->send();
    echo json_encode(['status'=>'success','message'=>'Sua mensagem foi enviada com sucesso!']);
} catch (Exception $e) {
    echo json_encode(['status'=>'error','message'=>'Erro ao enviar: '.$mail->ErrorInfo]);
}
