/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Script para aplicar a técnica da régua
*/

var oRegua = {
	init: function() {
		var oHRs = document.getElementsByTagName("hr");
		
		for(var i=0; i<oHRs.length; i++) {
			var oHR  = oHRs[i];
			var oDiv = document.createElement('div');
			
			oDiv.className = 'line';
			oHR.parentNode.replaceChild(oDiv, oHR);
			oDiv.appendChild(oHR);
		
		}
	}//fim do método
}

window.onload = oRegua.init;