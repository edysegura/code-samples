<?php
/**
 * 
 * Grava novo usuário no arquivo XML
 * @author Edy Segura, edy@segura.pro.br
 * 
 */


if(!empty($_POST['login']) &&
   !empty($_POST['nome']) &&
   !empty($_POST['perfil']) &&
   (!empty($_POST['senha']) || $_POST['edit'] == 'true')) {
	
	$xml = simplexml_load_file("users.xml");
	
	if($_POST['edit'] == 'true') {
		foreach ($xml->usuario as $usuario) {
			if($usuario->login == $_POST['login']) {
				$usuario->nome   = $_POST['nome'];
				$usuario->perfil = $_POST['perfil'];
				break;
			}
		}
	}
	else {
		$usuario = $xml->addChild('usuario');
		$usuario->addChild("login", $_POST['login']);
		$usuario->addChild("nome", $_POST['nome']);
		$usuario->addChild("perfil", $_POST['perfil']);
		$usuario->addChild("senha", md5($_POST['senha']));
	}
	
	file_put_contents("users.xml", $xml->asXML());
	header("Location: index.php");
}
else {
	header("Location: frmUser.php?error=empty");
}

?>