<?php
require("../libs/phpmailer/class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host = "smtp.example.com"; // SMTP server
$mail->From = "edy@segura.pro.br";
$mail->AddAddress("myfriend@example.net");

$mail->Subject = "First PHPMailer Message";
$mail->Body = "Hi! \n\n This is my first e-mail sent through PHPMailer.";
$mail->WordWrap = 50;

if(!$mail->Send())
{
   echo 'Message was not sent.';
   echo 'Mailer error: ' . $mail->ErrorInfo;
}
else
{
   echo 'Message has been sent.';
}
?>