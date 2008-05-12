<?php
class ExecutionTimer {
	private $executionTime;

	public function __construct()	{
		$this->executionTime = microtime(true);
	}

	public function __destruct() {
		print(&#039;<hr>&#039;.(microtime(true)-$this->executionTime));
	}
}
?>