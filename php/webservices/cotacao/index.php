<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<meta name="description" content="Webservice de cotação do dolar e do euro" />
<title>Webservice de cotação do dolar e do euro</title>

<link rel="stylesheet" href="css/style.css" type="text/css" title="Layout Padrão" />

</head>
<body>

<h1>Webservice de cotação do dolar e do euro</h1>
<p>
	Exemplo do uso da biblioteca SimpleXML no PHP5 para manipulação de XML.<br />
	Para mais detalhes veja o código fonte fazendo o 
	<a href="http://files.edysegura.com/labs/simplexml-cotacao.zip">downlaod</a> deste 
	<a href="http://files.edysegura.com/labs/simplexml-cotacao.zip">exemplo</a>.
</p>

<table>
	<caption>Cotação do dolar e euro</caption>
	
	<thead>
		<tr>
			<th rowspan="2">Moeda</th>
			<th colspan="2">Cotação</th>
		</tr>
		<tr>
			<th>Compra</th>
			<th>Venda</th>
		</tr>
	</thead>
	
	<?php include "action/getxml.action.php"; ?>
	
	<tbody>
		<tr>
			<th>Dolar comercial:</th>
			<td><?php echo substr($cotacao->dolar_comercial_compra, 0, 4); ?></td>
			<td><?php echo substr($cotacao->dolar_comercial_venda, 0, 4); ?></td>
		</tr>
		<tr>
			<th>Dolar paralelo:</th>
			<td><?php echo substr($cotacao->dolar_paralelo_compra, 0, 4); ?></td>
			<td><?php echo substr($cotacao->dolar_paralelo_venda, 0, 4); ?></td>
		</tr>
		<tr>
			<th>Euro dolar:</th>
			<td><?php echo substr($cotacao->euro_dolar_compra, 0, 4); ?></td>
			<td><?php echo substr($cotacao->euro_dolar_venda, 0, 4); ?></td>
		</tr>
		<tr>
			<th>Euro real:</th>
			<td><?php echo substr($cotacao->euro_real_compra, 0, 4); ?></td>
			<td><?php echo substr($cotacao->euro_real_venda, 0, 4); ?></td>
		</tr>
	</tbody>
</table>

</body>
</html>