/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Script para adicionar novos options
*/

function fnCheckToSubmit(oForm) {
	//validando o formulário
	if(oForm.email.value != "" && oForm.nome.value != "") {
		if(oForm.emails.options[0].value == "") oForm.emails.options[0] = null;
		fnAddOption(oForm.emails, oForm.nome.value, oForm.email.value);
	}
	else
		alert("Preencha os campos corretamente.");

	return false;
}

//adiciona novos options
function fnAddOption(oSelect, sText, sValue) {
	oSelect.options[oSelect.options.length] = new Option(sText, sValue);
}

//remove os options selecionados
function fnRemoveOption(oSelect) {
	for(var i=0; i<oSelect.options.length; i++) {
		if(oSelect.options[i].selected) {
			if(confirm("Remover " + oSelect.options[i].text + " - " + oSelect.options[i].value + "?"))
				oSelect.options[i] = null;
		}
	}
}

//remove todos os options
function fnClearOptions(oSelect) {
	oSelect.options.length = 0;
}

//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}

