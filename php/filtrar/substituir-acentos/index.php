<?php
// Variavel recebendo a string a ser tratada
$var = "J� est� na hora de comer�ar a programa��o";

// Variavel recebendo a string que n�o ser� tratada para futura compara��o
$ant = $var;

// Variavel recebendo a string j� fazendo as substitui��es
$var = ereg_replace("[����]","A",$var);
$var = ereg_replace("[����]","a",$var);
$var = ereg_replace("[���]","E",$var);
$var = ereg_replace("[���]","e",$var);
$var = ereg_replace("[����]","O",$var);
$var = ereg_replace("[�����]","o",$var);
$var = ereg_replace("[����]","U",$var);
$var = ereg_replace("[����]","u",$var);
$var = str_replace("�","C",$var);
$var = str_replace("�","c",$var);

// Listando o resultado anterior sem substitui��o
echo "Resultado anterior: ".$ant."\n";

// Listando o resultado com a subtitui��o
echo "Resultado posterior: ".$var."\n";
?>