<?php
/**
 *
 * Validacao da sessao
 * @author Edy Segura
 * 
 */

define("ABSPATH", dirname(dirname(__FILE__)));
require_once(ABSPATH . "/actions/checkuser.action.php");

//verifica se algum download foi requisitado
if(isset($_GET['download']) && !empty($_GET['download'])) {
	session_start();
	require_once(ABSPATH . "/classes/BD.class.php");
  require_once(ABSPATH . "/classes/Logs.class.php");
	
	//instanciando objetos
	$vo_mysql = new mysql;
	$vo_logs  = new logs;
	
	//conectando com o servidor mysql
	$vo_mysql->conect();
	
	//registra no banco o download
	$vo_logs->registra($_SESSION['email'], "D", $_GET['download']);
	
	//verifica se foi feito o download
	if(!$_SESSION['down']||$_SESSION['SDE'])
	{	
		$vo_arquivo = ABSPATH . "/downloads/".$_GET['download'];
		if(file_exists($vo_arquivo))
		{	
			$vf_tamanho = filesize($vo_arquivo);
			//headers
			header("content-description: File Transfer");
			header("content-type: application/save");
			header("content-type: application/force-download");
			header("content-type: application/octet-stream");
			header("content-length: $vf_tamanho");
			header("content-disposition: attachment;filename=".basename($vo_arquivo));
			header("content-transfer-encoding: binary");
			//lendo o arquivo
			@readfile($vo_arquivo);
		}
	}
	else {
		header("Location: " . ABSPATH . "/?sid={$_SESSION['sid']}&down=true");
		exit;
	}
}
?>