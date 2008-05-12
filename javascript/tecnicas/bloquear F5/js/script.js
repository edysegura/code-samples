/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Script para cancelar teclas pressionadas
*/

//função para inicialização
function fnInit() {
	oElementP = document.getElementsByTagName("p")[1];
	window.setInterval("oElementP.innerHTML = new Date()", 1000);
}
window.onload = fnInit;


//função para tratar os caracteres pressionados
function fnShowDown(oEvent) {
	oEvent = (oEvent) ? oEvent : ((window.event) ? window.event : null);
	
	if(oEvent) {
		if(navigator.appName == "Netscape") {
			// When F5 is pressed
			if(oEvent.which == 116) fnCancelKey(oEvent);
			// When ctrl is pressed with R or N
			else if(oEvent.ctrlKey && (oEvent.which == 82))
				fnCancelKey(oEvent);
		}
		else {
			// When F5 is pressed
			if(event.keyCode == 116) fnCancelKey(oEvent);
			// When ctrl is pressed with R or N
			else if(event.ctrlKey && (event.keyCode == 78 || event.keyCode == 82))
				fnCancelKey(oEvent);
		}
	}
}


//função para concelar tecla pressionada
function fnCancelKey(oEvent) {
	if(oEvent.preventDefault) {
		oEvent.preventDefault();
		return false;
	}
	else {
		oEvent.keyCode = 0;
		oEvent.returnValue = false;
	}
}

//adicionando eventos
document.onkeypress = document.onkeydown = fnShowDown;

