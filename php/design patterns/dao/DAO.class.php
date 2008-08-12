<?php 
/* 
 * DAO.class.php
 *
 * Data Access Object 
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

abstract class DAO {

	public $DB;

	public function setDB(DB $DB) {
		$this->DB = $DB;
	}

	public function getDB() {
		$DB = new DB();
		$DB->connect();
		$this->setDB($DB);
		return $this->DB;
	}
	
}
?>
