<?php
/* PHP Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Arquivo de funções para o chat simples
*/

//endereço do arquivo
$sFile = "txt/batepapo.txt";

//adiciona um linha ao arquivo de bate-pago
function fnAddMsg($sNick, $sMsg) {
	global $sFile;
	$rHandle = fopen($sFile, "a");
	fwrite($rHandle, "<strong>$sNick:</strong> $sMsg \n");
}

//obtem um array de dois elementos, sendo o primeiro
//um array de todas as mensagens a partir do $nStart e
//o segundo o número total de mensagens
function fnGetMsgs($nStart =- 10) {
	global $sFile;
	$rHandle = file($sFile);
	return array(array_slice($rHandle, $nStart), sizeof($rHandle));
}

//exibe as últimas 10 mensagens do arquivo
function fnMensagens() {
	$aMensagens = fnGetMsgs();
	foreach($aMensagens[0] as $sMensagem) {
		echo "<li>$sMensagem</li> \n";
	}
}
?>