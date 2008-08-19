<?php include "../includes/config.inc.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<title><?php echo $title; ?></title>

</head>
<body>

<h1><?php echo $title; ?></h1>
<p><a href="/cookie">Página de Comentário</a></p>
<pre><?php print_r($_COOKIE); ?></pre>

</body>
</html>