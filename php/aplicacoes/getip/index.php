<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<title>IP - Internet Protocol</title>

</head>
<body>

<h1>IP - Internet Protocol</h1>
<p>
	Exemplo de como obter o endereço IP através do PHP.<br />
	Para mais detalhes veja o código fonte.
</p>

<table>
	<thead>
		<tr>
			<th>Comando PHP</th>
			<th>Valor IP</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>$_SERVER['REMOTE_ADDR']</td>
			<td><?php echo $_SERVER['REMOTE_ADDR']; ?></td>
		</tr>
		<tr>
			<td>$_SERVER['HTTP_X_FORWARDED_FOR']</td>
			<td><?php echo $_SERVER['HTTP_X_FORWARDED_FOR']; ?></td>
		</tr>
		<tr>
			<td>getenv('REMOTE_ADDR')</td>
			<td><?php echo getenv('REMOTE_ADDR'); ?></td>
		</tr>
		<tr>
			<td>getenv('HTTP_X_FORWARDED_FOR')</td>
			<td><?php echo getenv('HTTP_X_FORWARDED_FOR'); ?></td>
		</tr>
	</tbody>
</table>


</body>
</html>
