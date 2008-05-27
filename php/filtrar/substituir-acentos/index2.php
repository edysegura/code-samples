<?php
$substituicoes = array(
	//�
	"�" => "c",
	"�" => "c",
	//A
	"�" => "a",
	"�" => "A",
	"�" => "a",
	"�" => "A",
	"�" => "a",
	"�" => "a",
	"�" => "a",
	//E
	"�" => "e",
	"�" => "E",
	"�" => "e",
	"�" => "E",
	"�" => "e",
	"�" => "E",
	//I
	"�" => "i",
	"�" => "I",
	"�" => "i",
	"�" => "I",
	//O
	"�" => "o",
	"�" => "O",
	"�" => "o",
	"�" => "O",
	"�" => "o",
	"�" => "O",
	"�" => "o",
	"�" => "O",
	//U
	"�" => "u",
	"�" => "U",
	"�" => "u",
	"�" => "U",
	"�" => "u",
	"�" => "U",
	//espa�o para underline
	" " => "_",
	//maiusculas para minusculas
	"A" => "a",
	"B" => "b",
	"C" => "c",
	"D" => "d",
	"E" => "e",
	"F" => "f",
	"G" => "g",
	"H" => "h",
	"I" => "i",
	"J" => "j",
	"L" => "l",
	"W" => "w",
	"M" => "m",
	"N" => "n",
	"O" => "o",
	"P" => "p",
	"Q" => "q",
	"R" => "r",
	"S" => "s",
	"T" => "t",
	"U" => "u",
	"V" => "v",
	"X" => "x",
	"Z" => "z",
);
?>
<title>Substituir Acentos</title>
<h1>Substituir Acentos</h1>
<p>
	<?php
		if(!empty($_POST['texto'])){
			$textoRuim = preg_replace("/[^\s|\w]/", "", $_POST['texto']);
			$textoBom  = strtr($textoRuim, $substituicoes);
			echo $_POST['texto'], " = ", $textoBom;
		}
	?>
</p>
<form action="" method="post">
	<p>Informe qualquer palavra com acento e pressione a tecla enter!
	<p><input type="text" name="texto" /></p>
	<p><input type="submit" /></p>
</form>