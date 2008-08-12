/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Scripts da página index
*/

//script para inicialização
function fnInit() {
	fnSetMaskInputs();
}
window.onload = fnInit;

//script para atribuir as respectivas máscaras
function fnSetMaskInputs() {
	var oInputs = document.getElementsByTagName('input');
	
	for(var i=0; i<oInputs.length; i++) {
		var oInput = oInputs[i];
		
		switch(oInput.className) {
			case "cep" :
				oInput.onkeypress = function() {
					fnMask(this, '#####-###');
				};
			break;
			
			case "data" :
				oInput.onkeypress = function() {
					fnMask(this, '##/##/####');
				};
			break;
			
			case "cpf" :
				oInput.onkeypress = function() {
					fnMask(this, '###.###.###-##');
				};
			break;

			case "telefone" :
				oInput.onkeypress = function() {
					fnMask(this, '## ## ####-####');
				};
			break;
			
			case "pesoLiquido" :
				oInput.onkeypress = function() {
					fnMask(this, '###.###,###');
				};
			break;
			
		}
	}
}

