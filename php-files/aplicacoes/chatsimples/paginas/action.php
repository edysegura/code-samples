<?php
/* PHP Document
Autor: Edy Segura - infoedy@gmail.com
Descrição: Action para tratar as informações enviadas através do formulário
*/

//trata os caracteres especiais do $sNick e da $sMensagem
$sNick = htmlentities($_POST['nick'], ENT_COMPAT, "utf-8");
$sMsg  = htmlentities($_POST['msg'],  ENT_COMPAT, "utf-8");

//valida $sNick e $sMsg
if(!(empty($sNick) || empty($sMsg))) {
	fnAddMsg($sNick, $sMsg);
	$sMsg = "";
}
?>