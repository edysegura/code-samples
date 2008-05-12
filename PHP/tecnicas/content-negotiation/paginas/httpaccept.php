<?php
//Listando o que é aceito pelo agente user
function httpAccept()
{
	$vo_accept = explode(",",$_SERVER['HTTP_ACCEPT']);
	foreach($vo_accept as $vs_value)
		echo "<li>$vs_value</li>";
}
?>