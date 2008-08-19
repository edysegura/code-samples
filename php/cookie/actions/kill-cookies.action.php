<?php
/**
 * 
 * Remoção dos cookies
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

if(isset($_GET['name']) && !empty($_GET['name'])) {
	setcookie($_GET['name'], null, time()-1, "/cookie/");
}
else {
	foreach($_COOKIE as $name => $value) {
		setcookie($name, null, time()-1, "/cookie/");
	}
}

header("Location: /cookie/?time=" . time());
?>