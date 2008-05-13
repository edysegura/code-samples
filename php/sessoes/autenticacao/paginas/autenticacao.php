<?php
//autenticação do usuário
if(!isset($_SERVER['PHP_AUTH_USER'])) {
	header('WWW-Authenticate: Basic realm="Login"');
	header('HTTP/1.0 401 Não Autorizado');
	exit;
}
elseif(empty($_SERVER['PHP_AUTH_USER'])||empty($_SERVER['PHP_AUTH_PW'])) {
	//Rerediciona o usuário para a página de erro
	header('Location: paginas/error.html');
	exit;
}
?>