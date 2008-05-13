<?php 
	require("funcoes.php"); 
	require("action.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="infoedy@gmail.com" />
<meta name="description" content="Formulário para batepapo" />
<title>Batepapo</title>

</head>
<body>

<form id="frmChat" action="" method="post">
	<fieldset>
		<label for="nick">Nick:</label>
		<input type="text" name="nick" id="nick" value="<?php echo $sNick; ?>" size="15" />
		<label for="msg">Mensagem:</label>
		<input type="text" name="msg" id="msg" value="<?php echo $sMsg; ?>" size="50" />
		<button type="submit">Enviar</button>
	</fieldset>
</form>

</body>
</html>
