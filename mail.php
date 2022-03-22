<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['messg'];
    $issues = $_POST['issues'];

    $message = "";
    $message .= '<html><body>';
    $message .= '<h2>Hi there,</h2><br/>';
    $message .= '<p>We have a new lead for you from Gachyi Land.</p>';
    $message .= '<ul>';
    $message .= '<li>Name: '.$name.'</li>';
    $message .= '<li>Email: '.$email.'</li>';
    $message .= '<li>Issues: '.$issues.'</li>';
    $message .= '<li>Message: <p>'.$msg.'</p></li>';
    $message .= '</ul>';
    $message .= '</body></html>';

    $mail = new PHPMailer();

    // Settings
    $mail->IsSMTP();
    $mail->CharSet = 'UTF-8';

    $mail->Host       = "smtp.gmail.com";    // SMTP server example
    $mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
    $mail->SMTPAuth   = true;                  // enable SMTP authentication
    $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
    $mail->Username   = "gachyiland@gmail.com";            // SMTP account username example
    $mail->Password   = "GooGoo5001995*";            // SMTP account password example

    // Content
    $mail->isHTML(true);      

    // $headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
    // $headers .= "Reply-To: ". strip_tags($_POST['req-email']) . "\r\n";
    // $headers .= "CC: susan@example.com\r\n";
    // $headers .= "MIME-Version: 1.0\r\n";
    // $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $mail->addAddress('control@gachyiland.com', $name);     //Add a recipient
    $mail->addBcc("davvy@blockchainaustralia.com.au"); //Add BCC
    $mail->Subject = 'ATTN: Contact Request from Gachyi Land';
    $mail->Body    = $message;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    
    //send email
    if($mail->send())
    {
        echo "Message Sent.";
    }
    else{
        echo "There was an error sending email.";
    }
}
?>
