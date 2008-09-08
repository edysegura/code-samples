<?php
/**
 * 
 * Pega o usuário no XML
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

if(!empty($_GET['login']) && $_GET['edit'] == "true") {
	$xml = simplexml_load_file("users.xml");
	
	foreach ($xml->usuario as $usuario) {
		if($usuario->login == $_GET['login']) {
			$login  = $usuario->login;
			$nome   = $usuario->nome;
			$perfil = $usuario->perfil;
			break;
		}
	}	
}
?>