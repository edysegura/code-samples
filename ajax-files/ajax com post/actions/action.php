<?php
/**
 *
 * Action para tratar dados enviados
 * @author: Edy Segura - edy@segura.eti.br
 * 
 */

if(!function_exists('json_encode')) {
	require_once("lib/json.php");
	$oJson = new Services_JSON();
	echo $oJson->encode($_POST);
	exit;
}
else {
	echo json_encode($_POST);
}

?>
