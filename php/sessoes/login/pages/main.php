<?php include "../actions/isValidUser.action.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>ERP WEB</title>

</head>
<body>

<h1>ERP WEB</h1>

<h3>Atualizações</h3>
<ul>
    <li>Cadastros</li>
		<ul>
			<li>Bancos</li>
			<li>Cidades</li>
			<li>Transportadoras</li>
		</ul>	
</ul>

<h3>Ajuda</h3>
<ul>
    <li>Sobre</li>
</ul>

<p>Usuário: <?php echo $_SESSION['usuario']; ?>, <a href="../actions/logout.action.php">Sign out</a>.</p>

</body>
</html>