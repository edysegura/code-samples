<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Usuários</title>

<link rel="stylesheet" href="css/style.css" type="text/css" title="Layout Padrão" />

</head>
<body>

<h1>Usuários do Sistema</h1>
<p><a href="frmUser.php">Incluir Usuário</a></p>
<ol>
	<?php
		require "connectdb.inc.php";
		
		$query = "SELECT id, nome, login, email, telefone FROM usuarios ORDER BY id";
		
		foreach ($pdo->query($query) as $row) {
			if(empty($row[0])) continue; //validando bug do interbase/firebird
			$li  = "<li>";
				$li .= "<a href='deleteUser.action.php?id={$row[0]}'><img src='delete.png' alt='deletar' /></a>";
				$li .= "<a href='frmUser.php?id={$row[0]}&amp;edit=true'>{$row[1]}</a>";
				$li .= "<ul>";
					$li .= "<li><strong>Login</strong>: {$row[2]}</li>";
					$li .= "<li><strong>Email</strong>: {$row[3]}</li>";
					$li .= "<li><strong>Telefone</strong>: {$row[4]}</li>";
				$li .= "</ul>";
			$li .= "</li>";
			echo $li;
		}
	?>
</ol>

</body>
</html>