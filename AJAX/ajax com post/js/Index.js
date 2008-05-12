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
	},//fim init


	setForm: function() {
		var oForm = document.forms[0];

		oForm.onsubmit = function() {
			return Index.checkToSubmit(this);
		};

		Form.focusOnFirst();
	},//fim setForm


	createDivInfo: function() {
		var oDivInfo  = document.createElement('div');
		var oFieldset = document.getElementsByTagName('fieldset')[0];
		var oLabel    = oFieldset.getElementsByTagName('label')[0];

		oDivInfo.setAttribute('id', 'info');
		oDivInfo.innerHTML = "&nbsp;";

		oFieldset.insertBefore(oDivInfo, oLabel);
	},//fim createDivInfo
	
	
	checkToSubmit: function(oForm) {
		var rePattern = new RegExp("text|password|textarea", "i");
		var oDivInfo  = document.getElementById('info');

		oDivInfo.innerHTML = "&nbsp;";

		//percorrendo os elementos do formulário
		for(var i=0; i<oForm.elements.length; i++) {
			var oElement = oForm.elements[i];

			if(rePattern.test(oElement.type) && Form.isEmpty(oElement.value)) {
				oDivInfo.innerHTML = "\"" + oElement.title + "\" é um campo obrigatório.";
				oElement.focus();
				oElement.className = "cmperro";
				return false;
			}

			oElement.className = (rePattern.test(oElement.type)) ? "campo" : oElement.className;
		}

		oForm.pessoas.options[0].text = "Carregando...";

		Ajax.run({
			method   : "POST",
			url      : "actions/action.php",
			callback : Index.buildCombo,
			callerro : Index.displayError,
			params   : oForm,
			loading  : true,
			send     : Form.getFormUrlEncodedValues(oForm)
		});
	
		return false;
	},//fim checkToSubmit


	buildCombo: function(sResponse, oForm) {
		var oDados = eval('(' + sResponse + ')'); //parse json
		
		oForm.pessoas.options[oForm.pessoas.options.length] = new Option(oDados.nome, oDados.email);
		oForm.pessoas.options[0].text = "Pessoas";
		
		oForm.reset();
		Form.focusOnFirst();
	},//fim buildCombo


	displayError: function(iHttpStatus, sMessage, oForm) {
		var oDivInfo = document.getElementById('info');
		
		sMessage = (!sMessage) ? "Servidor web não inicializado!" : sMessage;
		oDivInfo.innerHTML = ("HTTP Status: " + iHttpStatus + "<br />" + "Message: " + sMessage);
		
		oForm.pessoas.options[0].text = "Pessoas";
	}//fim displayError

};//fim Index

//inicializacao
window.onload = Index.init;

