/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Evento onError
Referência: Página 448 do PDF JavaScript for Web Developer
*/

//function para inicialização
function fnInit() {
	fnFuncaoNaoExiste();
}
window.onload = fnInit;

//evento onerror
//return true é para evitar a mensagem de
//erro do navegador
window.onerror = function (sMessage, sUrl, sLine) {
	
	alert("Algo de errado nesta página:\n" + 
				sMessage + "\nURL: " + sUrl +"\nNúmero da Linha: " + sLine);

	return true;
}