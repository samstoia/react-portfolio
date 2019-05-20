<?php
$email = $_POST['email'];
$subject= $_POST['subject'];
$message = $_POST['message'];
$recipient = "samuelstoia@zoho.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>