/**
 *
 * Expressão regular para validar hora
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.setInput();
	},
	
	
	checkHour: function(hour) {
		var pattern = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
		return pattern.test(hour);
	},
	
	
	setInput: function() {
		var input = document.getElementById("hours");
		input.onkeyup = function() {
			var status = document.getElementById("status");
			var result = Index.checkHour(this.value);
			status.innerHTML = (result) ? "Hora válida" : "Hora inválida";
		}
	}
	
}

//inicializacao
window.onload = Index.init;