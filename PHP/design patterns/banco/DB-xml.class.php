<?php

class Banco {

	private $host;
	private $username;
	private $password;
	private $connection;
	private $squema;

	public function BancodeDados($resource) {
	
		$xml = simplexml_load_file($resource);
		
		$this->host = $xml->sessionfactory->host;
		$this->username = $xml->sessionfactory->username;
		$this->password = $xml->sessionfactory->password;
		$this->squema = $xml->sessionfactory->database;
	
	}

	public function conecta() {
	
		$this->connection = mysql_connect($this->host, $this->username,$this->password);
		mysql_select_db($this->squema,$this->connection);
		
		return $this->connection;
	
	}

	public function desconecta() {
	
		mysql_close($this->connection);
	
	}

	public function updateSQL($sql) {
	
		$r = mysql_query($sql,$this->connection);
		if($r == 0) {
		return false;
		} else {
		return true;
		}
	
	}

	public function executaSQL($sql) {
	
		$retorno = mysql_query($sql,$this->connection);
		return $retorno;
	
	}

	public function iniciarTransacao() {
	
		$this->executaSQL("begin");
	
	}

	public function efetivarTransacao() {
	
		$this->executaSQL("commit");
	
	}

	public function desfazerTransacao() {
	
		$this->executaSQL("rollback");
	
	}

} 
?>