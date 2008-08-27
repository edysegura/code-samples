<?php require "includes/screen-scraping.inc.php"; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Cotação do Dolar</title>

</head>
<body>

<h1>Cotação do Dollar</h1>
<p>Compra: R$ <?php echo $dolarCompra->textContent; ?></p>
<p>Paralelo: R$ <?php echo $dolarParalelo->textContent; ?></p>

</body>
</html>