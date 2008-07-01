<?php
/**
 * 
 * Arquivo de configuracao
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

session_start();
global $configuration;

//PDO related settings
$configuration["pdoDriver"]      = "sqlite";
$configuration["sqliteDatabase"] = "comments.sqlite";
?>