<?php include "includes/config.inc.php"; ?>
<?php include "includes/cookie.inc.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<meta name="description" content="Manipulação de cookies com PHP" />
<title><?php echo $title; ?></title>

<link rel="stylesheet" href="css/style.css" type="text/css" title="Layout Padrão" />
<script type="text/javascript" src="js/Index.js"></script>
 
</head>
<body>

<h1><?php echo $title; ?></h1>
<p>
	Exemplo de manipulação de <a href="http://pt.wikipedia.org/wiki/Cookie">cookies</a> com PHP.<br />
	Para mais detalhes veja o código fonte fazendo o 
	<a href="http://files.edysegura.com/labs/cookie-php.zip">download</a> deste 
	<a href="http://files.edysegura.com/labs/cookie-php.zip">exemplo</a>.
</p>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
	<fieldset>
		<legend>Comentário:</legend>
		
		<label for="nome">
			Nome:<br />
			<input type="text" id="nome" tabindex="1" 
			 name="nome" value="<?php echo $_COOKIE["nome"]; ?>" />
			<a href="actions/kill-cookies.action.php?name=nome">
				<img src="images/deletar.png" alt="deletar" />
			</a>
		</label>
		
		<br />
		
		<label for="email">
			Email:<br />
			<input type="text" id="email" tabindex="2"
			 name="email" value="<?php echo $_COOKIE["email"]; ?>" />
			<a href="actions/kill-cookies.action.php?name=email">
				<img src="images/deletar.png" alt="deletar" />
			</a>
		</label>
		
		<br />
		
		<label for="website">
			Website:<br />
			<input type="text" id="website" tabindex="3"
			 name="website" value="<?php echo $_COOKIE["website"]; ?>" />
			<a href="actions/kill-cookies.action.php?name=website">
				<img src="images/deletar.png" alt="deletar" />
			</a>
		</label>
		
		<br />
		<br />
		
		<textarea id="comentario" tabindex="4" 
		 name="comentario" rows="10" cols="50"></textarea>
		
		<br />
		
		<input id="botao-enviar" tabindex="5"
		 type="submit" value="Enviar comentário" />
		
		<a href="pages/cookies.php?time=<?php echo time(); ?>">Ver Cookies</a> | 
		<a href="actions/kill-cookies.action.php">Deletar todos os cookies</a>
		
	</fieldset>
</form>

</body>
</html>