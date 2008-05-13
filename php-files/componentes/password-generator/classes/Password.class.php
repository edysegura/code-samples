<?php
/**
 *
 * Componente para gerar senha
 * @author Edy Segura, edy@segura.eti.br
 *
 */
class PasswordComponent {
	private $length = 6;
	
	function setLength($length = 6) {
		$this->length = $length;
	}

	function generate(){
		srand((double)microtime() * 1000000);
		
		$vowels = array("a", "e", "i", "o", "u");
		$cons = array("b", "c", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "u", "v",
		"cr", "br", "fr", "tr", "dr", "pr", "sl", "cl", "bl","fl");
		
		$num_vowels = count($vowels);
		$num_cons = count($cons);
		
		$password = "";
		
		for($i = 0; $i < $this->length; $i++){
				$password .= $cons[rand(0, $num_cons - 1)] . $vowels[rand(0, $num_vowels - 1)];
		}
		
		return substr($password, 0, $this->length);
	}
}
?>