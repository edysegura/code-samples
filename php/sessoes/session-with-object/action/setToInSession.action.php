<?php
/**
 *
 * Action para teste da sessão com objeto em PHP
 * @author Edy Segura, edy@segura.pro.br
 *
 */
 
$p = new Pessoa();
$p->setNome('Edy');
$p->setSobrenome('Segura');

//adicionando o objeto na sessão
$_SESSION['pessoa'] = $p;
?>
