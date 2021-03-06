/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Script para validação de e-mail
*/

var Index = {
	
	init: function() {
		Index.setCheckToSubmit();
		Index.createDivInfo();
	},
	
	
	setCheckToSubmit: function() {
		var oForm = document.forms[0];
		
		oForm.onsubmit = function() {
			return Index.checkToSubmit(this);
		};

	},
	
	
	createDivInfo: function() {
		var oDivInfo = document.createElement('div');
		var oParent  = $('fieldset-check-mail');
		var oLabel   = $('label-email');
		
		oDivInfo.setAttribute("id", "info");
		oParent.insertBefore(oDivInfo, oLabel);

	},
	
	
	checkToSubmit: function(oForm) {
		var oDivInfo = $('info');
		
		oDivInfo.innerHTML = (Form.isMail(oForm.email.value)) ?
		"String \"" + oForm.email.value + "\", <span class=\"valida\">é valida como e-mail.</span>" :
		"String \"" + oForm.email.value + "\", <span class=\"invalida\">não é válida como e-mail.</span>";
		oDivInfo.style.display = "block";
		
		return false;
	}
	
};

//inicialização
window.onload = Index.init;
