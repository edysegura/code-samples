<?php
/**
 *
 * Action para teste da sessão com objeto em PHP
 * @author Edy Segura, edy@segura.pro.br
 *
 */
$p = new Pessoa();
if(isset($_SESSION['pessoa'])) {
	$p = $_SESSION['pessoa'];
}

?>
