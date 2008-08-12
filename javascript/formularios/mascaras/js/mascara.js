/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Script para máscaras
*/

//script para máscara
function fnMask(oInput, sMask) {
	var iInputLength = oInput.value.length;
	var sCharMask    = sMask.substring(0,1);
	var sCharInput   = sMask.substring(iInputLength);
	
	if(sCharInput.substring(0,1) != sCharMask) {
		oInput.value += sCharInput.substring(0,1);
	}
}
