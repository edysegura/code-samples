<?php

// Constantes: variaveis que não mudam em todo o programa 
// path do win2k. no unix, mude de 'd:/path' para '/home/usuario/www' 
define('PATH_IMG', "img_prod/"); 
define('MAX_WIDTH', 130); 
define('MAX_HEIGHT', 130); 

# Pega onde está a imagem 
$image_file = str_replace('thumb.php?', '', $_SERVER['QUERY_STRING']); 

#$image_path = $image_file; 
$image_path = PATH_IMG . $image_file;

# Carrega a imagem 
$img = null; 

$extensao = strtolower(end(explode('.',$image_path))); 

if ($extensao == 'jpg' || $extensao == 'jpeg') { 
$img = @imagecreatefromjpeg($image_path); 
} else if ($extensao == 'png') { 
$img = @imagecreatefrompng($image_path); 

// Se a versão do GD incluir suporte a GIF, mostra... 
} elseif ($extensao == 'gif') { 
$img = @imagecreatefromgif($image_path); 
} 

// Se a imagem foi carregada com sucesso, testa o tamanho da mesma 
if ($img) { 

// Pega o tamanho da imagem e proporção de resize 
$width = imagesx($img); 
$height = imagesy($img); 
$scale = min(MAX_WIDTH/$width, MAX_HEIGHT/$height); 

// Se a imagem é maior que o permitido, encolhe ela! 
if ($scale < 1) { 
$new_width = floor($scale * $width); 
$new_height = floor($scale * $height); 

// Cria uma imagem temporária 
$tmp_img = imagecreatetruecolor($new_width, $new_height); 

// Copia e resize a imagem velha na nova 
imagecopyresampled($tmp_img, $img, 0, 0, 0, 0, $new_width, $new_height, $width, $height); 
imagedestroy($img); 
$img = $tmp_img; 
} 
} 


//Cria uma imagem de erro se necessário 
if (!$img) { 
$img = imagecreate(MAX_WIDTH, MAX_HEIGHT); 
imagecolorallocate($img, 204, 204, 204); 
$c = imagecolorallocate($img, 153, 153, 153); 
$c1 = imagecolorallocate($img, 230, 20, 100); 
imageline($img, 0, 0, MAX_WIDTH, MAX_HEIGHT, $c); 
imageline($img, MAX_WIDTH, 0, 0, MAX_HEIGHT, $c); 
imagestring($img, 2, 7, 55, 'Não existe imagem', $c1); 
} 

// Mostra a imagem 
header('Content-Type: image/jpeg');
imagejpeg($img); 
?> 