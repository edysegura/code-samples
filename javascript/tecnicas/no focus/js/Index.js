/**
 * 
 * Objeto Literal Index
 * @autor: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	botoes: 0,
	
	init: function() {
		Index.botoes = document.getElementById('botoes').getElementsByTagName('button');
	},//fim init
	
	
	noFocus: function(bNoFocus, sParent) {
		Common.noFocus(bNoFocus, sParent);
		Index.setButton();
	},//fim noFocus
	
	
	setButton: function() {
		var oBotoes = Index.botoes;
		
		for(var i=0; i<oBotoes.length; i++) {
			oBotoes[i].disabled = (oBotoes[i].disabled) ? false : true;
		}
	}//fim setButton
	
};//fim Index

//inicialização
window.onload = Index.init;


