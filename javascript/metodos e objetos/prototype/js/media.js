/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descri��o: Exemplo da utiliza��o do prototype
*/

function fnInit() {
	
	var oElementP = document.getElementsByTagName('p')[1];
	var iNumber   = new Number(oElementP.innerHTML.replace(/\D/g, ""));
	
	oElementP.innerHTML = iNumber.media(10);
}
window.onload = fnInit;


function fnMedia(iNumber) {
	return "A m�dia de " + this.valueOf() + " e " + iNumber + " �: " + ((this.valueOf() + iNumber) / 2);
}

//atribuindo novo m�todo
Number.prototype.media = fnMedia;