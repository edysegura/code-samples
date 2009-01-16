<?php
/**
 *
 * PDO Connection Factory
 * @author Edy Segura, edy@segura.pro.br
 * 
 */
class PDOConnectionFactory {

	public $connection = null;
	public $dbType     = "mysql";
	public $host       = "localhost";
	public $user       = "root";
	public $pass       = "root";
	public $db         = "contact";
	public $persistent = false;


	/**
	 *
	 * Constructor
	 * $pdo = new PDOConnectionFactory(true); //conexao persistente
	 * $pdo = new PDOConnectionFactory(); //conexao nao persistente
	 *
	 */
	public function __construct($persistent = false) {
		if($persistent != false) { $this->persistent = true; }
	}

	
	public function getConnection() {
		try {
			$this->connection = new PDO (
				$this->dbType . ":host=" . $this->host . ";dbname=" . $this->db, 
				$this->user, 
				$this->pass,
				array( PDO::ATTR_PERSISTENT => $this->persistent )
			);
			
			return $this->connection;
		}
		catch (PDOException $e) { 
			echo "Erro: " . $e->getMessage();
		}
	}


	public function closeConnection() {
		if($this->connection != null) {
			$this->connection = null;
		}
	}
	
}
?>