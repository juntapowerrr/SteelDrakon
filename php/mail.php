<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/src/PHPMailer.php';
require_once 'phpmailer/src/SMTP.php';
require_once 'phpmailer/src/Exception.php';

//Creating instance
$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';

//Server settings
$mail->isSMTP();
//$mail->SMTPDebug = 4;
$mail->Host = 'mx1.mirohost.net';
$mail->SMTPAuth = "true";
$mail->Username = 'sender@ladytuning.com';	
$mail->Password = 'NCacqzvEJ2JB';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->smtpConnect([
    'ssl'  => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
]);

//Recipients
$mail->setFrom('sender@ladytuning.com', 'SteelDrakon.com');
$mail->addAddress('marinkovanna@gmail.com');

//Content
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';

file_put_contents('debug.txt', print_r($_POST, true));//debug
$selectedOption = $_POST['product'];
$options = array(
    '' => 'Оберіть виріб',
    'furniture' => 'Ковані меблі',
    'gates' => 'Ворота та паркани',
    'landscaping' => 'Благоустрій',
    'braziers' => 'Ковані мангали',
    'railings' => 'Ковані перила',
    'benches' => 'Ковані лавки',
    'interior' => 'Вироби для інтерʼєру',
    'sculptures' => 'Скульптури',
    'armor' => 'Ковані обладунки',
    'metal' => 'Металоконструкції',
    'idea' => 'Ваша ідея',
);
$selectedText = isset($options[$selectedOption]) ? $options[$selectedOption] : 'Оберіть виріб';


$text = $_POST['text'] ?? '';
$pattern = '/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/';
$error = ['error'=>true];

if(!preg_match($pattern, $phone)) {
    $error['error'] = false;
    $error['phone'] = 'Вкажіть дійсний номер телефону.';
}

$mail->isHTML(true);
$mail->Subject = '⚒️ Нова заявка з сайту. Клієнт вже чекає на ваш дзвінок!';
$mail->Body = "<p style=color:#000>1️⃣ <b>Ім'я: </b>$name</p>";
$mail->Body .= "<p style=color:#000>2️⃣ <b>Номер телефона: </b>$phone</p>";
$mail->Body .= "<p style=color:#000>3️⃣ <b>Виріб: </b>$selectedText</p>";
$mail->Body .= "<p style=color:#000>4️⃣ <b>Коротко про проєкт: </b>$text</p>";
$mail->AltBody = '';

if (!$mail->send()) {
    //echo "Повідомлення не може бути відправлено. Помилка: {$mail->ErrorInfo}";
    //echo("Повідомлення не може бути відправлено. Помилка: {$mail->ErrorInfo}");
    echo "Повідомлення не може бути відправлено. Помилка: {$mail->ErrorInfo}";
    } else {
        //echo 'Message has been sent';
        //header('Location: thank-you.html');
        echo "Дякуємо! Ваше повідомлення було успішно відправлено, очікуйте на зворотній зв'язок.";
        //echo("Дякуємо! Ваше повідомлення було успішно відправлено, очікуйте на зворотній зв'язок.");
    }
?>