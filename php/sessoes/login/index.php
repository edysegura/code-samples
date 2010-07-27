<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Sistema de Login</title>

</head>
<body>

<h1>Sistema de Login</h1>
<?php if(isset($_GET['login']) && $_GET['login'] == 'false'): ?>
<p class="error">Usuário ou senha inválidos. Tente novamente.</p>
<?php endif; ?>

<form action="actions/validaUser.action.php" method="post">
	<fieldset>
		<legend>Dados</legend>
		<label>
			Usuário: <br />
			<input type="text" name="usuario" />
		</label>
		
		<br />
		
		<label>
			Senha: <br />
			<input type="password" name="senha" />
		</label>
		
		<br />
		
		<input type="submit" value="Entrar" />
	</fieldset>
</form>

</body>
</html>