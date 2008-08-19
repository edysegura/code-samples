<?php
/**
 * 
 * Script para gravar cookie
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

if(!empty($_POST['nome']) && !empty($_POST['email'])) {
	$timeLife = time() + 60*60*24*365; //tempo de vida do cookie. Neste caso 1 ano
	
	setcookie("nome", $_POST["nome"], $timeLife, "/cookie/");
	setcookie("email", $_POST["email"], $timeLife, "/cookie/");
	setcookie("website", $_POST["website"], $timeLife, "/cookie/");
	
	header("Location: /cookie");
	exit();
}
?>