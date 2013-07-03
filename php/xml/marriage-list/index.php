<?php
$filepath = 'lista-casamento.xml';
$listNumber = (empty($_GET['listNumber'])) ? 0 : ((int)$_GET['listNumber']);
$count = 0;
if(file_exists($filepath)) {
	$xml = simplexml_load_file($filepath);
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<title>Lista de Casamento</title>

</head>
<body>

<h1>Lista de Casamento, 
	<?php 
		echo trim($xml->lista[$listNumber]->data->dia) . '/' . 
		     trim($xml->lista[$listNumber]->data->mes) . '/' . 
		     trim($xml->lista[$listNumber]->data->ano);
	?>
</h1>
<p>Noiva: <?php echo $xml->lista[$listNumber]->nomes->noiva; ?></p>
<p>Noivo: <?php echo $xml->lista[$listNumber]->nomes->noivo; ?></p>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
	<fieldset>
		<legend>Noivos</legend>
		<select name="listNumber">
			<option>[..]</option>
			<?php foreach($xml->lista as $lista) { ?>
				<option value="<?php echo $count; ?>"><?php echo $lista->nomes->noiva .' & '. $lista->nomes->noivo; ?></option>
			<?php $count++; } ?>
		</select>
		<input type="submit" value="OK" />
	</fieldset>
</form>

<table border="1">
	<caption>Lista de Presentes</caption>
	<thead>
		<tr>
			<th>Código</th>
			<th>Presente</th>
			<th>Qtde</th>
			<th>Vendido</th>
		</tr>
	</thead>
	<tbody>
		<?php foreach($xml->lista[$listNumber]->items->item as $item) { ?>
		<tr>
			<td><?php echo $item['codigo']; ?></td>
			<td><?php echo $item; ?></td>
			<td><?php echo $item['quantidade']; ?></td>
			<td><?php if($item['vendido'] == 'false') { echo 'Não'; } else { echo 'Sim'; } ?></td>
		</tr>
		<?php } ?>
	</tbody>
</table>

</body>
</html>
