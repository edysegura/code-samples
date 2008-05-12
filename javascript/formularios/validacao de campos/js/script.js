/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Script para validação do campo
*/

//validação do formulário
function fnCheckToSubmit(oForm) {
	return false;
}


//validação para aceitar somente caracteres alpha
function fnCheckIsLetter(oEvent, sElementId) {
	
	var oElement  = $(sElementId);
	var sMensagem = new String;
	var bIsLetter = true;
	var iCharCode;
	
	oEvent = (oEvent) ? oEvent : window.event;
	iCharCode = (oEvent.which) ? oEvent.which : oEvent.keyCode;
	
	if((iCharCode < 65 || iCharCode > 90) && (iCharCode < 97 || iCharCode > 122) &&
		 (iCharCode != 32 || iCharCode != 8 || iCharCode != 13)) {
		sMensagem = "Este campo aceita somente letras";
		bIsLetter = false;
	}
	
	if(oElement) {
		oElement.innerHTML = sMensagem;
	}
	
	return bIsLetter;
}


//validação para aceitar somente caracteres numéricos
function fnCheckIsNumber(oEvent, sElementId) {
	
	var oElement  = $(sElementId);
	var sMensagem = new String;
	var bIsNumber = true;
	var iCharCode;
	
	
	oEvent = (oEvent) ? oEvent : window.event;
	iCharCode = (oEvent.which) ? oEvent.which : oEvent.keyCode;

	if(iCharCode > 31 && (iCharCode < 48 || iCharCode > 57)) {
		sMensagem = "Este campo aceita somente números";
		bIsNumber = false;
  }
	
	if(oElement) {
		oElement.innerHTML = sMensagem;
	}
	
	return bIsNumber;
}


//remove qualquer caractere que não seja um dígito
function fnOnlyNumber(sValue) {
	var iNumbers = sValue.replace(/\D/g, "");
	alert([iNumbers, sValue.length + " caractere(s)"].join("\n"));
}


//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}
