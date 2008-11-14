/** 
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setButton();
		Index.setInput();
	},
	
	
	setInput: function() {
		var input = document.getElementById('location');
		
		input.onfocus = function() {
			this.select();
		};
		
	},
	
	
	setButton: function() {
		var button = document.getElementById('botao');
		
		button.onclick = function() {
			var input   = document.getElementById('location');
			var result  = document.getElementById('result');
			result.innerHTML = input.value.replace(/\\/g, "/");
		};
		
	}
	
};

//inicializacao
window.onload = Index.init;
