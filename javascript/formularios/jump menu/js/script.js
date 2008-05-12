/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Implementação do jump menu
*/

//função para redirecionar para outra página especificada
function fnGoto(oCombo) {
	if(oCombo.value && confirm("Ir para o site " + oCombo.options[oCombo.selectedIndex].text + "?"))
		document.location = oCombo.value;
}