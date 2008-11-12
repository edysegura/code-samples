<?php
/**
 * 
 * Configuração para conexão com o banco de dados.
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

try { 
	//$pdo = new PDO("pgsql:host=localhost;dbname=users", "root", "root");
	//$pdo = new PDO("odbc:users", "", ""); //access
	//$pdo = new PDO("firebird:dbname=localhost:d:\\www\\usersdb\\usuarios.gdb", "SYSDBA", "masterkey");
	$pdo = new PDO("mysql:host=localhost;dbname=users", "root", "root");
	//$pdo = new PDO("sqlite:usuarios.sqlite");
}
catch (PDOException $e) {
	die("Failed to connect: " . $e->getMessage());
}
?>