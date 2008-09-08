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
		$usuarios = simplexml_load_file("users.xml");
		//print_r($usuarios);
		foreach ($usuarios->usuario as $usuario) {
			$li  = "<li>";
				$li .= "<a href='frmUser.php?login={$usuario->login}&amp;edit=true'>{$usuario->nome}</a>";
				$li .= "<ul>";
					$li .= "<li><strong>Login</strong>: {$usuario->login}</li>";
					$li .= "<li><strong>Perfil</strong>: {$usuario->perfil}</li>";
				$li .= "</ul>";
			$li .= "</li>";
			echo $li;
		}
	?>
</ol>

</body>
</html>