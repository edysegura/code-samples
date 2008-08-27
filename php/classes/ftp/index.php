<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<meta name="keywords" content="FTP, PHP" />
<title>FTP com PHP</title>

</head>
<body>

<h1>FTP com PHP</h1>
<p>
	Exemplo prático de como conectar ao protocolo FTP com PHP.<br />
	Para mais detalhes veja o código fonte.
</p>

<h2>Resultado da conexão com FTP</h2>
<?php
	include "class/FTP.class.php";
	$ftp = new FTP();
	$ftp->listForXhtml("alunos/");
?>

</body>
</html>
