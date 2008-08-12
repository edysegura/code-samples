<?php
/* 
 * autoload.inc.php
 *
 * função magica __autoload que adiciona automaticamente o
 * arquivo com a definicao da classe instanciada  
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

define("ABSPATH", dirname(dirname(__FILE__)) . "/class/");

function __autoload($className) {
	
	$aIgnoreList = array (
		"PEAR_Error",
		"pear"
	);
	
  if(file_exists(ABSPATH . $className . ".class.php")) {
    require_once(ABSPATH . $className . ".class.php");
  }
	else if(!in_array($className, $aIgnoreList)) {
    die ("<p>ERRO no arquivo <strong>" . ABSPATH . "</strong>. O arquivo da classe <strong>$className</strong> não foi encontrado, por favor entre em contato com o administrador do sistema para resolver este problema.</p>");
  }
}
?>
