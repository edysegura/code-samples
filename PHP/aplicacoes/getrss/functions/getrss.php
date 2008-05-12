<?php
/* 
* PHP Document
* Autor: Edy Segura - infoedy@gmail.com
* Descrição: Funções para o tratamento do RSS especificado.
*/

require("rss/rss_fetch.inc");

function fnGetRss($sUrl, $iNumItens = "") {
	$oRss = fetch_rss($sUrl);
	echo "<li>Site: ", utf8_encode($oRss->channel['title']), fnItens($oRss, $iNumItens), "</li>";
}

function fnItens($oRss, $iNumItens) {
	$iNum = 0;
	$sSaida = "\n<ol>\n";
	
	foreach($oRss->items as $aItem) {
		
		if($iNumItens) {
			if($iNum == $iNumItens) break;
			else $iNum++;
		}
		
		$sTitle  = $aItem['title'];
		$sUrl    = $aItem['link'];
		$sSaida .= "<li><a href=\"$sUrl\">$sTitle</a></li>\n";
	}
	
	$sSaida .= "</ol>\n";
	echo utf8_encode($sSaida);
}
?>