/**
 *
 * Metodo para selecionar todos os checkboxes especificados
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Form = {
	
	checkAll: function(inputCheck) {
		var form    = inputCheck.form;
		var inputs  = (form || document.body).getElementsByTagName('input');
		var pattern = new RegExp("^" + inputCheck.id + "\\b");
		
		for(var i=0; i<inputs.length; i++) {
			if(inputs[i].type.toLowerCase() == "checkbox" && pattern.test(inputs[i].name)) {
				inputs[i].checked = inputCheck.checked;
			}
		}
	}
	
};