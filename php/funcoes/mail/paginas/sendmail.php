<?php
function sendMail() {
	//parâmetros necessários
	$vs_destino  = "edy@segura.pro.br";
	$vs_destino .= ",edysegura@gmail.com";
	$vs_assunto  = "Envio de e-mail através do PHP";
	$vs_mensagem = "Este é um teste de envio de e-mail com PHP";
	$vs_headers  = "From: edy@segura.pro.br\n";
	$vs_headers  = "Content-Type: text/plain; charset=UTF-8";
	
	//enviando o e-mail com a função mail
	if(@mail($vs_destino,$vs_assunto,$vs_mensagem,$vs_headers))
		echo "E-mail enviado com sucesso para $vs_destino";
	else
		echo "Erro no envio do e-mail para $vs_destino";
}
?>