<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Autentica&ccedil;&atilde;o</title>

<!-- stylesheet -->
<link rel="stylesheet" href="../css/stylesheets.css" type="text/css" title="Padr�o" />

</head>
<body>

<h1>Autentica��o</h1>
<p>Exemplo para autentica��o do usu�rio. Para mais detalhes veja o c�digo fonte.</p>

<!-- Resultado -->
<h2>Resultado</h2>
<p><strong>Obs.:</strong> Se nome e senha n�o foi informado, � porque voc� n�o autenticou na p�gina principal.</p>
<fieldset>
	<legend>Dados do usu�rio:</legend>
	<p>Nome: <?php echo $_SERVER['PHP_AUTH_USER'];?><br />Senha: <?php echo $_SERVER['PHP_AUTH_PW'];?></p>
	<p><a href="../index.php" title="Acesso a p�gina principal.">P�gina Principal</a></p>
</fieldset>

</body>
</html>
