<?php
/**
 *
 *  Verificar pontos na carteira
 * @author Edy Segura, edy@segura.eti.br
 *
 */

if(!empty($_REQUEST['cnh'])) {
	$url     = "https://wwws.detrannet.mg.gov.br/detran/conponto.asp";
	$cnh     = $_REQUEST['cnh'];
	$tipocnh = (!empty($_REQUEST['tipocnh'])) ? $_REQUEST['tipocnh'] : 1;

	$querystring = "numpront=$cnh&tipocnh=$tipocnh";
	@set_time_limit(180); // apenas precaução...

	if(function_exists('curl_init')) {
		$ch = curl_init();
		$resource = $url;
		
		curl_setopt($ch, CURLOPT_URL, $resource);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"); // user agente clone do IE, ou seja para o servidor é como se o IE estivesse acessando a página :P
		curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt'); // precisamos receber cookies né?! Crie o arquivo e dê chmod 666 ou 777
		curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookie.txt');
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $querystring); // bora enviar os dados de login via post
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); // return into a variable
		
		$sourcePage = curl_exec($ch);
		curl_close($ch);
		
		$dom = new DOMDocument();
		@$dom->loadHTML($sourcePage);

		$xpath = new DOMXPath($dom);
		$dados = $xpath->evaluate("//td");

		$result['nome']   = $dados->item(4)->textContent;
		$result['cnh']    = $dados->item(6)->textContent;
		$result['uf']     = $dados->item(8)->textContent;
		$result['pontos'] = $dados->item(10)->textContent;
		$result['msg']    = $dados->item(11)->textContent;
		$result['status'] = "SUCCESS";
	}
	else {
		$result['status'] = "ERROR";
		$result['error']  = "Erro ao carregar a biblioteca curl";
	}
}
else {
	$result['status'] = "ERROR";
	$result['error']  = "CNH não informado.";
}

echo json_encode($result);
?>