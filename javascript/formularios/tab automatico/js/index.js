/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Tab automático
*/

var Index = {
	
	init: function() {
		Form.focusOnFirst();
		Index.setTabForward();
		Index.setButton();
	},//fim init
	
	
	setTabForward: function() {
		var oInputs = document.getElementsByTagName('input');
		
		for(var i=0; i<oInputs.length; i++) {
			if(oInputs[i].type == "text") {
				
				oInputs[i].onkeyup = function() {
					Form.tabForward(this);
				}
				
			}//fim if
		}//fim for
	},//fim setTabForward
	
	
	setButton: function() {
		var oButton = document.getElementsByTagName('button')[0];
		oButton.onclick = function() {
			Form.focusOnFirst();
		};
	}//fim setButton
	
};//fim Index

//inicialização
window.onload = Index.init;

