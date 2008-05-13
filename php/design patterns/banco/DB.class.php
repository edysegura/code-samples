<?php
/* 
 * DB.class.php
 *
 * Pattern para acesso ao banco de dados
 * @author: Edy Segura - infoedy@gmail.com
 *
 */

class DB {

	private $host;
	private $username;
	private $password;
	private $squema;
	private $connection;
	
	/*
	 * construtor da classe DB
	 */
	public function DB($host     = "", 
	                   $username = "", 
	                   $password = "", 
	                   $squema   = "") {

		$this->host     = empty($host)     ? "localhost" : $host;
		$this->username = empty($username) ? "root"      : $username;
		$this->password = empty($password) ? "root"      : $password;
		$this->squema   = empty($squema)   ? "test"      : $squema;
	}


	/*
	 * Conecta ao servidor de banco de dados MySQL
	 */
	public function connect() {
		$this->connection = mysql_connect($this->host, $this->username, $this->password);
		$this->selectDB($this->squema);
	}


	/*
	 * Seleciona o banco no servidor de banco de dados
	 */
	public function selectDB($squema) {
		mysql_select_db($squema, $this->connection);
	}


	/*
	 * Desconecta ao servidor de banco de dados MySQL
	 */
	public function closeConnection() {
		if(is_resource($this->connection)) {
			@mysql_close($this->connection);
		}
	}


	/*
	 * Faz update da SQL especificada
	 */
	public function updateSQL($sql) {
		$resultSet = mysql_query($sql, $this->connection);
		if($resultSet == 0) {
			return false;
		}
		else {
			return true;
		}
	}


	/*
	 * Executa a SQL especificada
	 */
	public function executeSQL($sql) {
		$result = mysql_query($sql, $this->connection);
		return $result;
	}


	/*
	 * Último ID inserido
	 */
	public function getLastId() {
		$result = mysql_query("SELECT LAST_INSERT_ID() as id", $this->connection);
		
		if($result) {
			$row = mysql_fetch_array($result);
			return $row['id'];
		}
		
		return FALSE;
	}


	/*
	 * Inicia uma transação
	 */
	public function initiateTransaction() {
		$this->executeSQL("begin");
	}


	/*
	 * Efetiva a transação corrente
	 */
	public function commitTransaction() {
		$this->executeSQL("commit");
	}


	/*
	 * Cancela a transação corrente
	 */
	public function rollbackTransaction() {
		$this->executeSQL("rollback");
	}
}
?>
