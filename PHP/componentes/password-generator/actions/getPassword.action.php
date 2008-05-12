<?php
/**
 * 
 * Action para gerar senha
 * @author Edy Segura, edy@segura.eti.br
 * 
 */
function getPassword($lenght = 8) {
	$oPass = new PasswordComponent();
	$oPass->setLength($lenght);
	echo $oPass->generate();
}
?>