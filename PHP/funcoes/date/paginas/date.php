<?php
/* PHP Document
Autor: Edy Segura - infoedy@gmail.com
Descrição: Uso da função date() do PHP para exibição de datas
*/

//array contendo os diversos formatos de datas
$aDatas = array (
	date("d/m/Y", time()),
	date("d-m-Y", time()),
	date("d.m.Y", time()),
	date("Y/m/d", time()),
	date("Y d/m", time()),
	date("d.m.Y H:i:s", time()),
	date("F Y", time()),
	date("F j, Y, g:i a", time()),
	date("H:i:s", time())
);

//função para exibir o resultado
function fnDates() {
	global $aDatas;
	foreach($aDatas as $sValue) {
		echo "<li>$sValue</li> \n";
	}
}
?>