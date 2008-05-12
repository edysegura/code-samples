/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Exemplos de javascript orientado a objetos
*/

//função para inicialização
function fnInit() {
	oParagrafo = document.getElementsByTagName('p')[1];
	oBotao = document.getElementsByTagName('button')[0];

	fnAddEvent(oParagrafo, 'click', getFunc("Você clicou no parágrafo"));
	fnAddEvent(oBotao, 'click', getFunc("Edy Segura"));
}
fnAddEvent(window, 'load', fnInit);

//obj json
var oJson = {
	//atributos
	"versão" : "v1.0",
	"string" : "",
	
	//método msgBox
	"msgBox": function(sTexto) {
		
		alert([sTexto, this.versão].join(": "));
		
		this.string = [sTexto, this.versão].join(": ");
		this.result();
	},
	
	//método result
	"result": function(){ oParagrafo.innerHTML = this.string; }
}

//função laranja para pegar a função com parametro
function getFunc(sTexto){ return function(){ oJson.msgBox(sTexto); }; }

//função para adicionar eventos dinâmicamente
function fnAddEvent(oElement, sType, oFunction) {
	if(oElement.attachEvent) {
		oElement['e' + sType + oFunction] = oFunction;
		oElement[sType + oFunction] = function(){ oElement['e' + sType + oFunction](window.event); };
		oElement.attachEvent('on' + sType, oElement[sType + oFunction]);
	}
	else if(oElement.addEventListener) {
		oElement.addEventListener(sType, oFunction, false);
		return true;
	}
	else return false;
}

