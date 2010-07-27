<?php
session_start();
if(!isset($_SESSION['isValidUser']) || !$_SESSION['isValidUser'] == true) {
	header("Location: ../index.php");
	exit();
}
?>