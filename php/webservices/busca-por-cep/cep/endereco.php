<?php
/**
  *
  * Script para busca por cep com Ajax
  * @author: Edy Segura - edy@segura.pro.br
  *
  */

if(isset($_GET["cep"])) {
	$cep = urlencode($_GET["cep"]);
	$url = "http://cep.republicavirtual.com.br/web_cep.php?cep=$cep&formato=javascript";
	
	$result = @file_get_contents($url);
	
	if(!$result) {
		include dirname(dirname(__FILE__)) . "/class/MyFileGetContents.class.php";
		$result = MyFileGetContents::load($url);
	}
	
	if($result) {
		echo $result;
	}
}

?>