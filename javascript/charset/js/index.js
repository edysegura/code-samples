/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.showResult();
	},
	
	showResult: function() {
		document.getElementsByTagName('p')[1].innerHTML = result;
	}
	
};

//inicializacao
window.onload = Index.init;