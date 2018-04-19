<?php	
require("phpmailer/class.phpmailer.php");	

if ( is_uploaded_file($_FILES["file"]["tmp_name"]) ) {	
	$mail = new PHPMailer();
	$mail->SetLanguage("it", "phpmailer/language/");
	$mail->From     = "aisv2014@gmail.com";
	$mail->FromName = "AISV 2014";
	
//	$mail->AddAddress("tnn.rmn@gmail.com");
	$mail->AddAddress("aisv2014@gmail.com");
	$mail->Subject = "New abstract submission AISV 2014";
	$mail->Body = "Titolo: " .$_POST['titolo']. "\n";
	$mail->Body .= "Autori: " .$_POST['autori']."\n";
	$mail->Body .= "E-mail: " .$_POST['mail']."\n";
	$mail->Body .= "Affiliazione: " .$_POST['affiliazione']."\n";
	$mail->Body .= "Categoria: " .$_POST['categoria']."\n";
	$mail->Body .= "Allegato: " .$_FILES["file"]["name"]."\n";
	$mail->AddAttachment($_FILES["file"]["tmp_name"], $_FILES["file"]["name"]);
	$mail->Send();


	// <edit author="Alessandro Cosci">
	$mail = new PHPMailer();
	$mail->SetLanguage("it", "phpmailer/language/");
	$mail->From     = "aisv2014@gmail.com";
	$mail->FromName = "AISV 2014";
	
	// sender is the user submitting the abstract
	$mail->AddAddress($_POST['mail'], $_POST['autori']);
	$mail->Subject = "AISV 2014 Submission Received";
	
	// Building email text
	// Allowed vars in email_text:
		$abstract_title = $_POST['titolo'];
		$abstract_authors = $_POST['autori'];
		$abstract_email = $_POST['mail'];
		$abstract_affiliation = $_POST['affiliazione'];
		$abstract_category = $_POST['categoria'];
		$abstract_filename = $_FILES["file"]["name"];
	
	$email_text = file_get_contents("emails/email_invio.php");
	eval("\$email_text = \"". addslashes($email_text) . "\";");
	$mail->Body    = stripslashes($email_text);
	$mail->Send();
	// </edit>
	
	header ("Location:abstract-inviato.php");
	}
else
	header ("Location:abstract.php");	
?>