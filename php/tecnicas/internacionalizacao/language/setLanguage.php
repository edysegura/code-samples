<?php
/* 
* PHP Script
* Autor: Edy Segura - edy@segura.pro.br
* Descrição: Arquivo para configuração da internacionalização
*/

define("EXPIRE", time()+60*60*24*365);

$sParams = ($_GET['lang']) ? $_GET['lang'] : $_COOKIE['language'];

switch($sParams) {
    
	case 'eng-us': 
	  include('eng-us.php');
      setcookie("language", "eng-us", EXPIRE);
    break;
    
    case 'pt-br':
    default: 
	  include('pt-br.php');
      setcookie("language", "pt-br", EXPIRE);
}
?>