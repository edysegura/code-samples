/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Exemplo da utilização do prototype
*/

//função para inicialização
function fnInit() {
	var oElement = document.body.getElementsByTagName('p')[1];
	var aJson = eval(oElement.innerHTML);
	
	oElement.innerHTML  = "Array: " + aJson.join(", ") + "<br />";
	oElement.innerHTML += "Maior valor do array: " + aJson.max();
}
window.onload = fnInit;


//método do objeto Array
function fnArrayMax() {
	var iMax = this[0];
	
	for(var i=1; i<this.length; i++) {
		if(iMax < this[i]) iMax = this[i];
	}
	
	return iMax;
}
Array.prototype.max = fnArrayMax;