<?php
include "class.feedback.php";
include "configuration.php";

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['comments'])) {
	$feedback = new Feedback();
	
	$feedback->name     = $_POST['name'];
	$feedback->email    = $_POST['email'];
	$feedback->comments = $_POST['comments'];

	if($feedback->Save()) {
		echo "Comentário salvo com sucesso!<br /><a href='/sqlite-with-pdo/'>Listar comentários</a>";
	}
	else {
		echo "Comentário não pode ser salvo!<br /><a href='/sqlite-with-pdo/'>Listar comentários</a>";
	}
}
else {
	echo "Informe os dados corretamente!<br /><a href='/sqlite-with-pdo/'>Voltar</a>";
}
?>