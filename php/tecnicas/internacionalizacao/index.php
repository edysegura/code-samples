<?php include("language/setLanguage.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="Reply-to" content="edy@segura.pro.br" />
<meta name="Description" content="Descrição" />
<title><?php echo $s['internacionation']; ?></title>

</head>
<body>

<h1><?php echo $s['internacionation']; ?></h1>
<p><?php echo $s['explanation']; ?></p>

<!-- resultado -->
<h2><?php echo $s['result']; ?></h2>

<div id="menu">
	<ul>
		<li><?php echo $s['file']; ?></li>
		<li><?php echo $s['edit']; ?></li>
		<li><?php echo $s['search']; ?></li>
		<li><?php echo $s['view']; ?></li>
		<li><?php echo $s['run']; ?></li>
	</ul>
</div>

<p>
	<a href="?lang=eng-us"><?php echo $s['english']; ?></a> | 
	<a href="?lang=pt-br"><?php echo $s['portuguese']; ?></a>
</p>

</body>
</html>

