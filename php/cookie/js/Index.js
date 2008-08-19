/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setForm();
	},
	
	setForm: function() {
		var form = document.forms[0];
		if(form) {
			form.setAttribute("autocomplete", "off");
		}
	}
	
};

//inicializacao
window.onload = Index.init;