/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Exemplo da utilização do prototype
*/

function fnInit() {
	
	var oElementP = document.getElementsByTagName('p')[1];
	var iNumber   = new Number(oElementP.innerHTML.replace(/\D/g, ""));
	
	oElementP.innerHTML = iNumber.media(10);
}
window.onload = fnInit;


function fnMedia(iNumber) {
	return "A média de " + this.valueOf() + " e " + iNumber + " é: " + ((this.valueOf() + iNumber) / 2);
}

//atribuindo novo método
Number.prototype.media = fnMedia;