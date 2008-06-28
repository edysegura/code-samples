<?php
include "class.feedback.php";
include "configuration.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<meta name="description" content="SQLite com PDO" />
<title>SQLite com PDO</title>

</head>
<body>

<h1>SQLite com PDO</h1>
<form action="processFeedback.php" method="post">
	<table>
		<tr>
			<td>Nome:</td><td><input name="name"/></td>
		</tr>
		<tr>
			<td>Email:</td><td><input name="email"/></td>
		</tr>
		<tr>
			<td>Comentário:</td><td><textarea name="comments" rows="5" cols="40"></textarea></td>
		</tr>
		<tr>
			<td></td><td><input type="submit" value="Submit"/></td>
		</tr>
	</table>
</form>

<?php include "comments.php"; ?>

</body>
</html>