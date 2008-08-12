<?php
/* 
 * include-class.php
 *
 * @author: Edy Segura - edy@segura.pro.br
 * @description: função mágica __autoload que
 * adiciona automaticamente uma classe ao arquivo
 */
 
function __autoload($className) {
  if(file_exists($className . '.class.php')) {
    require_once($className . '.class.php');
  } 
	else {
    die ("<p>ERRO no arquivo <strong>" . $_SERVER["SCRIPT_URL"] . "</strong>. O arquivo da classe <strong>$className</strong> não foi encontrado, por favor entre em contato com o administrador do sistema para resolver este problema.</p>");
  }
}
?>