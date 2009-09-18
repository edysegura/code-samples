<?php
/**
 *
 * Classe para representar uma pessoa
 * @author Edy Segura, edy@segura.pro.br
 *
 */
class Pessoa {

	private $nome;
	private $sobrenome;
	
	public function setNome($nome) {
		$this->nome = $nome;
	}
	public function getNome()	{
		return $this->nome;
	}
	
	public function setSobrenome($sobrenome) {
		$this->sobrenome = $sobrenome;
	}
	public function getSobrenome()	{
		return $this->sobrenome;
	}
	
	public function getFullName() {
		return $this->nome . " " . $this->sobrenome;
	}
	
}
?>