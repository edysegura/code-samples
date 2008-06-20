<?php require("functions/getrss.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Edy Segura" />
<meta name="reply-to" content="edy@segura.pro.br" />
<meta name="description" content="Exemplo do uso do RSS" />
<title>RSS Reader</title>

</head>
<body>

<h1>RSS Reader</h1>
<p>Leitura do RSS de outros sites. Para mais detalhes veja o código fonte.</p>

<!-- Resultado -->
<h2>Resultado</h2>

<div id="noticias">
	
	<ul id="uol">
		<?php fnGetRss("http://rss.home.uol.com.br/index.xml", 5); ?>
	</ul>
	
	<ul id="revolucao">
		<?php fnGetRss("http://feeds.feedburner.com/Revolucao", 5); ?>
	</ul>
	
	<ul id="maujor">
		<?php fnGetRss("http://www.maujor.com/rss.xml", 5); ?>
	</ul>
	
	<ul id="blogmaujor">
		<?php fnGetRss("http://www.flickr.com/services/feeds/photos_public.gne?id=52309888@N00&amp;format=rss_200", 5); ?>
	</ul>
	
	<!-- fim div#noticias -->
</div>

</body>
</html>
