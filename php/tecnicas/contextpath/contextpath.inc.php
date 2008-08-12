<?php
/**
 * 
 * Definicao do contextpath da aplicacao e da url base
 * @author: Edy Segura, edy@segura.pro.br
 *
 */

global $baseDir;
global $baseUrl;

$baseDir  = dirname(__FILE__); //2 níveis acima ex. dirname(dirname(__FILE__))
$baseUrl  = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 'https://' : 'http://';
$baseUrl .= isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : getenv('HTTP_HOST');
$pathInfo = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : getenv('PATH_INFO');

if(@$pathInfo) {
  $baseUrl .= str_replace('\\', '/', dirname($pathInfo));
} 
else {
  $baseUrl .= str_replace('\\', '/', dirname( isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : getenv('SCRIPT_NAME')));
}

echo $baseDir, "<br /> ", $baseUrl;
?>