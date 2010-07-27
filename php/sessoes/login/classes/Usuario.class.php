<?php
/**
 * classe usuário
 */ 
class Usuario {
	private $usuario;
	private $senha;
	private $usuarios = array('gui' => 'gu1*', 'edysegura' => '3dy*');
	
	function __construct($usuario, $senha) {
		$this->usuario = $usuario;
		$this->senha = $senha;
	}
	
	public function isValidUser() {
		foreach ($this->usuarios as $usuario => $senha) {
			if($this->usuario == $usuario && $this->senha == $senha) {
				return true;
			}
		}
		return false;
	}
}
?>