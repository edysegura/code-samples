<?php require("paginas/autenticacao.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Autentica&ccedil;&atilde;o</title>

<!-- stylesheet -->
<link rel="stylesheet" href="css/stylesheets.css" type="text/css" title="Padro" />

</head>
<body>

<h1>Autenticação</h1>
<p>Exemplo para autenticação do usuário. Para mais detalhes veja o código fonte.</p>

<!-- Resultado -->
<h2>Resultado</h2>
<fieldset>
	<legend>Dados do usuário:</legend>
	<p>Nome: <?php echo $_SERVER['PHP_AUTH_USER']; ?><br />Senha: <?php echo $_SERVER['PHP_AUTH_PW']; ?></p>
	<p><a href="paginas/next.php" title="Acesso a próxima página.">Próxima Página</a></p>
</fieldset>

</body>
</html>
