<?php
/*
* example.php
* class_http.php example usage
* Author: Troy Wolf (troy@troywolf.com)
* Comments: Please be a good neighbor when screen-scraping. Don't write code
            that will needlessly make hits to third-party websites. Use
            class_http's caching feature whenever possible. It is designed to
            make you a good neighbor!
*/

/*
Include the http class. Modify path according to where you put the class
file.
*/
require_once(dirname(dirname(__FILE__)) . "/libs/class_http/class_http.php");

$h1 = new http();

/*
Screen-scrape the Google home page without caching.
*/
//"http://estadao.com.br/ext/economia/financas/historico/dolarfp.htm"
if (!$h1->fetch("http://economia.uol.com.br/cotacoes/")) {
  /*
  The class has a 'log' property that contains a log of events. This log is
  useful for testing and debugging.
  */
  echo "<h2>There is a problem with the http request!</h2>";
  echo $h1->log;
  exit();
}

$dom = new DOMDocument();
@$dom->loadHTML($h1->body);

$xpath = new DOMXPath($dom);
$fonts = $xpath->evaluate('//td');

$dolarCompra   = $fonts->item(1);
$dolarParalelo = $fonts->item(2); //old 8
?>