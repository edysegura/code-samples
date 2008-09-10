<?php
/**
 * 
 * Pega o usuário no banco de dados
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

require "connectdb.inc.php";

if(!empty($_GET['id']) && $_GET['edit'] == "true") {
	$stmt = $pdo->prepare("SELECT id, login, nome, email, telefone FROM usuarios WHERE id = 0 OR id = ?");
	
	if($stmt->execute(array($_GET['id']))) {
	  $rows = $stmt->fetchAll();
		
		foreach($rows as $row) {
			if(empty($row[0])) continue;  //validando bug do interbase/firebird
		}
	  
	  $id       = $row[0];
	  $login    = $row[1];
		$nome     = $row[2];
		$email    = $row[3];
		$telefone = $row[4];
	}

}
?>