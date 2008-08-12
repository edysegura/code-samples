/**
 * 
 * Objeto Literal Index
 * @autor: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	botoes: 0,
	
	init: function() {
		Index.botoes = document.getElementById('botoes').getElementsByTagName('button');
	},
	
	
	noFocus: function(bNoFocus, sParent) {
		Common.noFocus(bNoFocus, sParent);
		Index.setButton();
	},
	
	
	setButton: function() {
		var oBotoes = Index.botoes;
		
		for(var i=0; i<oBotoes.length; i++) {
			oBotoes[i].disabled = (oBotoes[i].disabled) ? false : true;
		}
	}
	
};

//inicialização
window.onload = Index.init;


