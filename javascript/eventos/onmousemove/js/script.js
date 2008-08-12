/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Técnica para pegar a posição do mouse.
*/

//função para inicialização
function fnInit() {
	var oSpan = $('position');
	
	//sem o parametro (oEvent) na function não funciona no firefox.
	document.onmousemove = function(oEvent) {
		oSpan.innerHTML = fnGetMouseLocation(oEvent);
	};

}
window.onload = fnInit;


//pega a posição do mouse
function fnGetMouseLocation(oEvent) {
	if(typeof(oEvent) == 'undefined') var oEvent = window.event;
	
	//pegando as posições do mouse
	var iPosicaoX = (oEvent.clientX) ? oEvent.clientX : oEvent.pageX;
	var iPosicaoY = (oEvent.clientY) ? oEvent.clientY : oEvent.pageY;
	
	//firula para testar
	$('banner').style.top  = (iPosicaoY + 10) + "px";
	$('banner').style.left = (iPosicaoX + 15) + "px";
	
	//resultado
	return "x: " + iPosicaoX + ", y: " + iPosicaoY;
}


//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}
