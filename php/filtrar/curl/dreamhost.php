<?php

// Configura��es de login
//
$url_do_painel = "https://panel.dreamhost.com/index.cgi"; // url do painel de controle
$usuario       = "suporte@webengineers.com.br"; //usu�rio ou email de login no painel
$senha         = "xxx"; // senha de acesso ao painel

$variaveis_do_post = "Nscmd=Nlogin&username=$usuario&password=$senha";

@set_time_limit(180); // apenas precau��o.. por ser https e �s vezes o painel fica lerdo

if(function_exists('curl_init'))
{
	$ch = curl_init();
	$resource = $url_do_painel;
	curl_setopt($ch, CURLOPT_URL, $resource);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"); // user agente clone do IE, ou seja para o servidor � como se o IE estivesse acessando a p�gina :P
	curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt'); // precisamos receber cookies n�?! Crie o arquivo e d� chmod 666 ou 777
	curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookie.txt');
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $variaveis_do_post); // bora enviar os dados de login via post
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); // return into a variable
	$GetPage = curl_exec($ch);
	curl_close($ch);
}
else
{
	echo "Problemas com a Biblioteca Curl? :P";
}

$base_code = "<head><BASE href='https://panel.dreamhost.com/'>"; // para pegar corretamente css e imagens

$codigo_final = ereg_replace("<head>", $base_code, $GetPage); // vamos adicionar a tag base no c�digo de sa�da

echo($codigo_final);

?>