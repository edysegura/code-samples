/**
 *
 * Exemplo de como executar instrucoes php
 * dentro de arquivos javascript
 *
 * @author: Edy Segura, edy@segura.eti.br
 *
 */

<?php $sUser = "Edy Segura"; ?>

var Index = {

	acceptLanguage: "<?php echo $_SERVER['HTTP_ACCEPT_LANGUAGE']; ?>",
	user: "<?php echo $sUser; ?>",
	
	init: function() {
		Index.insertContent();
	},
	
	insertContent: function() {
		if(!/file:|\W{1}:/.test(document.location)) {
			var oList = document.createElement('ol');
			var aLanguages = Index.acceptLanguage.split(",");
				
			for(var i in aLanguages) {
				var oItem = document.createElement('li');
				oItem.innerHTML = (aLanguages[i].indexOf(';') == -1) ? aLanguages[i] : 
								   aLanguages[i].substring(0, aLanguages[i].indexOf(';'));
				oList.appendChild(oItem);
			}
			
			document.body.appendChild(oList);
			document.title += (" - " + Index.user);
		}
		else {
			alert("Este exemplo deve ser executado em um servidor web.");
		}
	}
}

//inicializacao
window.onload = Index.init;
