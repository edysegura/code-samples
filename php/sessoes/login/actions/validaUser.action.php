<?php
include "../classes/Usuario.class.php";

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$user = new Usuario($usuario, $senha);

if($user->isValidUser()) {
	session_start();
	$_SESSION['isValidUser'] = true;
	$_SESSION['usuario'] = $usuario;
	//sendRedirect
	header("Location: ../pages/main.php");
}
else {
	//sendRedirect
	header("Location: ../index.php?login=false");
}
?>