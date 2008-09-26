<?php
/**
 *
 * Verificar pontos na carteira
 * @author Edy Segura, edy@segura.eti.br
 *
 */
 
$url     = "https://wwws.detrannet.mg.gov.br/detran/conponto.asp";
$cnh     = "02606910063";
$tipocnh = "1";

$variaveis_do_post = "numpront=$cnh&tipocnh=$tipocnh";

@set_time_limit(180); // apenas precaução.. por ser https e ás vezes o painel fica lerdo

if(function_exists('curl_init'))
{
	$ch = curl_init();
	$resource = $url;
	curl_setopt($ch, CURLOPT_URL, $resource);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"); // user agente clone do IE, ou seja para o servidor é como se o IE estivesse acessando a página :P
	curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt'); // precisamos receber cookies né?! Crie o arquivo e dê chmod 666 ou 777
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

$base_code = "<head><BASE href='https://wwws.detrannet.mg.gov.br/detran/'>"; // para pegar corretamente css e imagens

$codigo_final = ereg_replace("<head>", $base_code, $GetPage); // vamos adicionar a tag base no código de saída

echo($codigo_final);

?>