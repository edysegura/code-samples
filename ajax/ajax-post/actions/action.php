<?php
/**
 *
 * Action para tratar dados enviados
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

if(!function_exists('json_encode')) {
	require_once("lib/json.php");
	$json = new Services_JSON();
	echo $json->encode($_POST);
	exit;
}
else {
	echo json_encode($_POST);
}

?>