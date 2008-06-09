/**
 *
 * Objeto para literal para manipulacao da pagina index.html
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {

	init: function() {
		Index.createDivInfo();
		Index.setForm();
	},


	setForm: function() {
		var form = document.forms[0];
		
		form.onsubmit = function() {
			return Index.checkToSubmit(this);
		};
		
		Form.focusOnFirst();
	},


	createDivInfo: function() {
		var divInfo  = document.createElement('div');
		var fieldset = document.getElementsByTagName('fieldset')[0];
		var label    = fieldset.getElementsByTagName('label')[0];
		
		divInfo.setAttribute('id', 'info');
		divInfo.innerHTML = "&nbsp;";
		
		fieldset.insertBefore(divInfo, label);
	},
	
	
	checkToSubmit: function(form) {
		var rePattern = new RegExp("text|password|textarea", "i");
		var divInfo   = document.getElementById('info');
		
		divInfo.innerHTML = "&nbsp;";
		
		//percorrendo os elementos do formulário
		for(var i=0; i<form.elements.length; i++) {
			var element = form.elements[i];
			
			if(rePattern.test(element.type) && element.value != "") {
				divInfo.innerHTML = "\"" + element.title + "\" é um campo obrigatório.";
				element.focus();
				element.className = "cmperro";
				return false;
			}
			
			element.className = (rePattern.test(element.type)) ? "campo" : element.className;
		}
		
		form.pessoas.options[0].text = "Carregando...";
		
		Ajax.request({
			method   : "POST",
			url      : "actions/action.php",
			callback : Index.buildCombo,
			callerro : Index.displayError,
			params   : form,
			loading  : true,
			send     : Form.getFormUrlEncodedValues(form)
		});
		
		return false;
	},


	buildCombo: function(response, form) {
		var dados = eval('(' + response + ')'); //parse json
		
		form.pessoas.options[form.pessoas.options.length] = new Option(dados.nome, dados.email);
		form.pessoas.options[0].text = "Pessoas";
		
		form.reset();
		Form.focusOnFirst();
	},


	displayError: function(httpStatus, message, form) {
		var divInfo = document.getElementById('info');
		
		message = (!message) ? "Servidor web não inicializado!" : message;
		divInfo.innerHTML = ("HTTP Status: " + httpStatus + "<br />" + "Message: " + message);
		
		form.pessoas.options[0].text = "Pessoas";
	}

};

//inicializacao
window.onload = Index.init;

