/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Scripts para a técnica liveEdit
*/


//função para inicialização
function fnInit() {
	fnSetSpansLiveEdit();
}
window.onload = fnInit;


//função adicionar a funcionalidade live-edit
function fnSetSpansLiveEdit() {
	var oSpansLiveEdit = document.getElementsByClassName('live-edit');
	
	for(var i=0; i<oSpansLiveEdit.length; i++) {
		
		oSpansLiveEdit[i].title = "Clique para editar.";
		oSpansLiveEdit[i].onclick = function() {
			fnSpanLiveEdit(this);
		};

	}
}


//live-edit
function fnSpanLiveEdit(oSpan) {
	var oInput = fnCreateInput(oSpan.innerHTML);
	var oParent = oSpan.parentNode;
	
	oSpan.style.display = "none";
	oParent.insertBefore(oInput, oSpan.nextSibling);	
	oInput.focus();
	oInput.select();
}


//função para criar o elemento input
function fnCreateInput(sValue) {
	var oInput = document.createElement('input');
	
	oInput.type  = "text";
	oInput.name  = oInput.id = "liveEdit";
	oInput.value = sValue;
	
	oInput.onblur = fnOnBlurLiveEdit;
	oInput.onkeypress = fnOnKeyPressLiveEdit;
	
	return oInput;
}


//evento blur do elemento input
function fnOnBlurLiveEdit() {
	var oSpan = this.previousSibling;
	var oInput = this;
	
	oSpan.innerHTML = oInput.value;
	oSpan.style.display = "";
	oInput.parentNode.removeChild(oInput);
}


//evento keypress do elemento input
function fnOnKeyPressLiveEdit(oEvent) {
	var iKeyCode = new Number;
	var oInput = this;
	
	//correção para o IE
	oEvent = (typeof oEvent == 'undefined') ? window.event : oEvent;
	iKeyCode = (oEvent.keyCode) ? oEvent.keyCode : oEvent.which;
	
	if(iKeyCode == 13) {
		oInput.onblur();
		return false;
	}
	
}

