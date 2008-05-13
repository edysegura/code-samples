<?php
require_once("paginas/content_negotiation.php");
require_once("paginas/httpaccept.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8" />
<title>Content Negotiation</title>

</head>
<body>

<h1>Content Negotiation</h1>
<p>Servindo páginas XHTML como application/xhtml+xml e não como text/html. Para mais detalhes veja o código fonte.</p>
<p>Esta página só é servida como application/xhtml+xml para user agentes que suportam, como o Mozilla Firefox.</p>

<h2>HTTP ACCEPT</h2>
<ul><?php httpAccept(); ?></ul>

</body>
</html>
