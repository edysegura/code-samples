<?php
/**
 *
 * Conexão com FTP
 * @author Edy Segura, edy@segura.pro.br
 *
 */

class FTP {
	
	private $connection;
	private $host;
	private $username;
	private $password;
	
	public function __construct($host = "ftp.edysegura.com", 
	                            $username = "alunosctec", 
															$password = "4lunosctec") {
		$this->host     = $host;
		$this->username = $username;
		$this->password = $password;
		$this->connect();
	}
	
	public function __destruct() {
		ftp_close($this->connection);
	}
	
	public function connect() {
		$this->connection = ftp_connect($this->host);
		$result = ftp_login($this->connection, $this->username, $this->password);
	}
	
	public function listDir($path = ".") {
		$paths = ftp_nlist($this->connection, $path);
		return $paths;
	}
	
	public function listForXhtml($dirname) {
		$list = $this->listDir($dirname);
		
		if(sizeof($list)>0) {
			echo "<ul>";
				
				foreach($list as $item) {
					if(preg_match("/^Maildir|logs/i", $item)) continue;
					
					$sublist = $this->listDir($item);
					if(sizeof($sublist)) {
						$subitems = "<ul>";
							foreach($sublist as $subitem) {
								$subitems .= "<li>" . str_replace("$item/", "", $subitem) . "</li>";
							}
						$subitems .= "</ul>";
					}
					
					echo utf8_encode("<li>" . str_replace($dirname, "", $item) . $subitems . "</li>");
				}
				
			echo "</ul>";
		}
	}
}
?>