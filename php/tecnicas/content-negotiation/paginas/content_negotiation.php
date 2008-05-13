<?php
//Content Negotiation
//http://www.japs.etc.br/2006/03/content-negotiation/
//http://www.456bereastreet.com/archive/200408/content_negotiation/

if(stristr($_SERVER['HTTP_ACCEPT'],"application/xhtml+xml") || stristr($_SERVER['HTTP_USER_AGENT'],"W3C_Validator"))
{
	header("Content-Type: application/xhtml+xml; charset=UTF-8");
	header("Vary: Accept");
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
}
else
{
	header('Content-Type: text/html; charset=UTF-8');
	header("Vary: Accept");
}
?>