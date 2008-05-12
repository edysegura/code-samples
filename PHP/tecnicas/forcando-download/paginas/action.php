<?php
//forçando download
if(isset($_GET['act'])&&$_GET['act']=="download")
{
	$vo_arquivo = "download/".$_GET['file'];
	if(file_exists($vo_arquivo))
	{	
		$vf_tamanho = filesize($vo_arquivo);
		//headers
		header("content-description: File Transfer");
		header("content-type: application/save");
		header("content-type: application/force-download");
		header("content-type: application/zip");
		header("content-length: $vf_tamanho");
		header("content-disposition: attachment;filename=".basename($vo_arquivo));
		header("content-transfer-encoding: binary");
		//lendo o arquivo
		@readfile($vo_arquivo);
	}
}
?>