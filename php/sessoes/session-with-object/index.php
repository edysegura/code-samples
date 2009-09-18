<?php session_start(); ?>
<?php include 'includes/config.inc.php'; ?>
<?php include 'class/Pessoa.class.php'; ?>
<?php include 'action/setToInSession.action.php'; ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php echo $title; ?></title>

</head>
<body>

<?php include 'includes/content.inc.php'; ?>

<p>
	Valor na sessão: <?php echo $p->getFullName(); ?> <br />
	<a href="page.php">Ir para outra página.</a>
</p>

</body>
</html>
