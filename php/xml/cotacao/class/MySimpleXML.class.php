<?php
/**
 *
 * MySimpleXML
 * @author Edy Segura, edy@segura.pro.br
 *
 **/

class MySimpleXML {
	static public function load($url) {
		if(!empty($url)) {
			$ch = curl_init($url);
			
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			
			$xml = simplexml_load_string(curl_exec($ch));
			curl_close($ch);
			
			return $xml;
		}
		
		return false;
	}
}
?>
