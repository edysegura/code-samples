<?php
/* PHP Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Busca do endereço pelo CEP
*/

if(isset($_GET['cep'])) {
	$sResult = @file_get_contents('http://republicavirtual.com.br/web_cep.php?cep=' . urlencode($_GET['cep']) . '&formato=javascript');
	
	if($sResult) {
		echo $sResult;
	}
}//fim if

?>