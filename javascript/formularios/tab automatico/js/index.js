/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Tab automático
*/

var Index = {
	
	init: function() {
		Form.focusOnFirst();
		Index.setTabForward();
		Index.setButton();
	},
	
	
	setTabForward: function() {
		var oInputs = document.getElementsByTagName('input');
		
		for(var i=0; i<oInputs.length; i++) {
			if(oInputs[i].type == "text") {
				
				oInputs[i].onkeyup = function() {
					Form.tabForward(this);
				}
				
			}
		}
	},
	
	
	setButton: function() {
		var oButton = document.getElementsByTagName('button')[0];
		oButton.onclick = function() {
			Form.focusOnFirst();
		};
	}
	
};

//inicialização
window.onload = Index.init;

