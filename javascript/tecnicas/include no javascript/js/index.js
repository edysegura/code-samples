/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Incluindo novos scripts
*/

var Index = {
	
	showContent: function(sMessage) {
		if(typeof sMessage == "string") {
		
			var oParagrafo = document.createElement("p");
			oParagrafo.innerHTML = sMessage;
			document.body.appendChild(oParagrafo);
		
		}//fim if
	}//fim showContent
	
};//fim Index
