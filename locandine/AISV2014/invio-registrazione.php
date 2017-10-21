<?php
	require("phpmailer/class.phpmailer.php");
	
	$campi_req = array("nome","cognome", "nonstr", "indirizzo", "citta", "cap", "provincia", "email", "autore");
	
	foreach($_POST as $key => $valore)
   {
      if(in_array($key,$campi_req))
      {
         if(trim($valore) == "")
            $control_campi++;
      }
   }
	
	if ( $control_campi != 0 )
	{
          header("location: invio-registrazione-errore.php?errore=Non hai compilato tutti i campi obbligatori. Si prega di ricontrollarli.");
	   return;
       }
   
	$mail = new PHPMailer();
	$mail->SetLanguage("it", "phpmailer/language/");
	$mail->IsSMTP();
	
	$mail->From     = "aisv2014@gmail.com";
	$mail->FromName = "Sistema notifica AISV";

	$mail->AddAddress("aisv2014@gmail.com");

	$mail->Subject = "Registrazione AISV 2014";
	$mail->Body = "Nome: " .$_POST['nome']. "\n";
	$mail->Body .= "Cognome: " .$_POST['cognome']."\n";
	$mail->Body .= "Affiliazione: " .$_POST['affiliazione']."\n";
	$mail->Body .= "Qualifica: " .$_POST['qualifica']."\n";

	$mail->Body .= "Personale non strutturato: " .$_POST['nonstr']."\n";
	$mail->Body .= "Indirizzo: " .$_POST['indirizzo']."\n";
	$mail->Body .= "Città: " .$_POST['citta']."\n";
	$mail->Body .= "CAP: " .$_POST['cap']."\n";
	$mail->Body .= "Provincia: " .$_POST['provincia']."\n";
	$mail->Body .= "Nazione: " .$_POST['nazione']."\n";
	$mail->Body .= "Telefono: " .$_POST['telefono']."\n";
	$mail->Body .= "E-mail: " .$_POST['email']."\n";
	$mail->Body .= "Autore di un articolo: " .$_POST['autore']."\n";
	$mail->Body .= "Favorevole alla cena sociale: " .$_POST['cena']."\n";
	$mail->Body .= "Tipo di partecipazione: " .$_POST['partecipazione']."\n";

	
	// <edit author="Alessandro Cosci">
	/*
	<old>
	if ($mail->Send())
		 header ("Location:invio-registrazione.php");
	</old>
	*/
	
	if ($mail->Send())
	{
		$mail = new PHPMailer();
		$mail->SetLanguage("it", "phpmailer/language/");
		$mail->IsSMTP();
		
		$mail->From     = "aisv2014@gmail.com";
		$mail->FromName = "AISV2014";
		
		// sender is the user submitting the abstract
		$mail->AddAddress($_POST['email'], $_POST['nome'] . " " . $_POST['cognome']);
		$mail->Subject = "Registrazione AISV 2014";
		
		// Building email text
		// Allowed vars in email_text:
			$registration_name = $_POST['nome'];
			$registration_surname = $_POST['cognome'];
			$registration_affiliation = $_POST['affiliazione'];
			$registration_qualification = $_POST['qualifica'];
			$registration_address = $_POST['indirizzo'];
			$registration_city = $_POST['citta'];
			$registration_postalcode = $_POST['cap'];
			$registration_province = $_POST['provincia'];
			$registration_country = $_POST['nazione'];
			$registration_phone = $_POST['telefono'];
			$registration_email = $_POST['email'];
			$registration_nonstr = $_POST['nonstr'];
			$registration_author = $_POST['autore'];
			$registration_socialdinner = $_POST['cena'];
			$registration_postproceedings = $_POST['postproceedings'];
			$registration_partecipation = $_POST['partecipazione'];
			
		$email_text = file_get_contents("emails/email_registrazione.php");
		eval("\$email_text = \"". addslashes($email_text) . "\";");
		$mail->Body    = stripslashes($email_text);
		if($mail->Send())
			header ("Location:invio-registrazione-ok.php");
		else
			header ("Location:invio-registrazione-errore.php?errore=Errore del server. Riprova più tardi. " .  $mail->ErrorInfo);
	}
	else
		header ("Location:invio-registrazione-errore.php?errore=Errore del server. Riprova più tardi. " .  $mail->ErrorInfo);

		
/*
			print '<h1>Attenzione</h1><p>Assicurati di aver compilato tutti i campi! Grazie.<br/>
<a href="http://www.lfsag.unito.it/aisv2014/registrazione.php">Torna al modulo</a></p><p>'.$mail->ErrorInfo.'</p>';
	}
	// </edit>
	else 
		print '<h1>Attenzione</h1><p>Assicurati di aver compilato tutti i campi! Grazie.<br/>
<a href="http://www.lfsag.unito.it/aisv2014/registrazione.php">Torna al modulo</a></p><p>'.$mail->ErrorInfo.'</p>';
*/
?>
