/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Objeto para manipulação de eventos
Referência: 1 - http://ejohn.org/projects/flexible-javascript-events/
Referência: 2 - http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
Referência: 3 - Livro Professional JavaScript for Web Developer página 292 do livro e 320 do PDF
*/

var Event = {

	//adicionar evento dinâmicamente
	addHandle: function(oElement, sType, oFunction) {
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

};//fim Event

