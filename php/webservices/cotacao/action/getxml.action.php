<?php
/**
 *
 * Action para pegar o arquivo XML
 * @author Edy Segura, edy@segura.pro.br
 *
 **/

$url = "http://cotacao.republicavirtual.com.br/web_cotacao.php?formato=xml";
$cotacao = @simplexml_load_file($url);

if(!$cotacao) {
	include	"class/MySimpleXML.class.php";
	$cotacao = MySimpleXML::load($url);
}
?>