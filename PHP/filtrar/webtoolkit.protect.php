/**
*
*  PHP password protect
*  http://www.webtoolkit.info/
*
**/

function passwordProtect($username, $password){
	if (
			(
				!isset($_SERVER['PHP_AUTH_USER']) ||
				(
					isset($_SERVER['PHP_AUTH_USER']) &&
					$_SERVER['PHP_AUTH_USER'] != $username
				)
			) &&
			(
				!isset($_SERVER['PHP_AUTH_PW']) ||
				(
					isset($_SERVER['PHP_AUTH_PW']) &&
					$_SERVER['PHP_AUTH_PW'] != $password
				)
			)
		)
	{
		header('WWW-Authenticate: Basic realm="Login"');
		header('HTTP/1.0 401 Unauthorized');
		echo 'Please login to continue.';
		exit;
	}
}