<?php require('paginas/action.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Session Regenerate Id</title>

</head>
<body>

<h1>Session Regenerate Id</h1>
<p>A função <code>session_regenerate_id()</code> gera um novo indicador de sessão, mantendo as variáveis atualmente registradas. Para mais detalhes veja o código fonte.</p>

<!-- Resultado -->
<h2>Resultado</h2>
<p>Atualize a página para ver a sessão trocando.</p>
<ul><?php session_ids(); ?></ul>

</body>
</html>
