<?php
session_start();

if(!isset($_SESSION['sid']))
	$_SESSION['sid'] = "Primeiro sid: ".session_id("Edy");

$vs_sids   = array();
$vs_sids[] = $_SESSION['sid'];
$vs_sids[] = "Old Session: ".session_id();
session_regenerate_id();
$vs_sids[] = "New Session: ".session_id();

function session_ids()
{
	global $vs_sids;
	foreach($vs_sids as $vs_value) echo "<li>$vs_value</li>";
}
?>