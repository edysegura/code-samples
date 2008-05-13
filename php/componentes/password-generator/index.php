<?php include "classes/Password.class.php"; ?>
<?php include "actions/getPassword.action.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.eti.br" />
<meta name="description" content="Gerador automático de senha" />
<title>Password Generator</title>

</head>
<body>

<h1>Password Generator</h1>
<p>Senha gerada 1: <?php getPassword(6); ?></p>
<p>Senha gerada 2: <?php getPassword(4); ?></p>
<p>Senha gerada 3: <?php getPassword(2); ?></p>
<p>Senha gerada 4: <?php getPassword(); ?></p>
<p><a href="<?php echo $_SERVER['PHP_SELF']; ?>" title="Gerar uma nova senha">Gerar uma nova senha</a></p>

</body>
</html>
