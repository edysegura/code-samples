/* 
 * Index.js
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@liveware.com.br
 *
 */

var Index = {
	
	init: function() {
		Index.setButton();
		Index.setField();
	},
	
	
	setField: function() {
		var oField = document.getElementById('location');
		
		oField.onfocus = function() {
			this.select();
		};
		
	},
	
	
	setButton: function() {
		var oButton = document.getElementById('botao');
		
		oButton.onclick = function() {
			var oField   = document.getElementById('location');
			oField.value = oField.value.replace(/\\/g, "/");
		};
		
	}
	
};

//inicializacao
window.onload = Index.init;
