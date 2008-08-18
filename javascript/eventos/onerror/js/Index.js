/**
 * 
 * Evento window.onerror
 * Estudo detalhado na página 448 no PDF Javascript for Web Developer
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

var Index = {
	
	init: function() {
		Index.funcaoNaoExiste();
	},
	
	
	showError: function(message, url, line) {
		var errorMessage  = "Algo errado nesta página:\n";
		errorMessage += message + "\n";
		errorMessage += "URL: " + url + "\n";
		errorMessage += "Line: " + line + "\n";
		
		alert(errorMessage);
		
		//return true é para evitar a mensagem de error default
		return true;
	}
	
};

//inicializacao
window.onload  = Index.init;
window.onerror = Index.showError;
