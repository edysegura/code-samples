/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Script para o Timer
*/

//função para inicialização
function fnInit() {
	$('botoes').getElementsByTagName('button')[0].onclick = fnContinueTimer;
}
window.onload = fnInit;

//variáveis para funções abaixo
var iSeconds = 0;
var iMinutes = 0;
var iTimerId = 0;

//função para incrementar o contador
function fnSetMinutes() {
	
	var sTimer = "";
	
	if(++iSeconds == 60) {
		iSeconds = 0;
		iMinutes++;
	}
	
	sTimer += (iMinutes < 10) ? "0" + iMinutes : iMinutes;
	sTimer += ":";
	sTimer += (iSeconds < 10) ? "0" + iSeconds : iSeconds;
	
	$('minutos').innerHTML = sTimer;
	
	iTimerId = setTimeout("fnSetMinutes()", 1000);
}

//função para parar de contar
function fnStopTimer() {
	clearTimeout(iTimerId);
	$('botoes').getElementsByTagName('button')[0].onclick = fnContinueTimer;
}

//função para continuar contando
function fnContinueTimer() {
	fnSetMinutes();
	this.onclick = null;
}

//função para zerar contador
function fnReset() {
	iSeconds = 0;
	iMinutes = 0;
	$('minutos').innerHTML = "00:00";
}

//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}
