<?php
// Variavel recebendo a string a ser tratada
$var = "Jс estс na hora de comerчar a programaчуo";

// Variavel recebendo a string que nуo serс tratada para futura comparaчуo
$ant = $var;

// Variavel recebendo a string jс fazendo as substituiчѕes
$var = ereg_replace("[СРТУ]","A",$var);
$var = ereg_replace("[сртуЊ]","a",$var);
$var = ereg_replace("[ЩШЪ]","E",$var);
$var = ereg_replace("[щшъ]","e",$var);
$var = ereg_replace("[гвде]","O",$var);
$var = ereg_replace("[ѓђєѕК]","o",$var);
$var = ereg_replace("[кйлм]","U",$var);
$var = ereg_replace("[њљћќ]","u",$var);
$var = str_replace("Ч","C",$var);
$var = str_replace("ч","c",$var);

// Listando o resultado anterior sem substituiчуo
echo "Resultado anterior: ".$ant."\n";

// Listando o resultado com a subtituiчуo
echo "Resultado posterior: ".$var."\n";
?>