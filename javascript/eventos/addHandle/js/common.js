/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Biblioteca comum de script
*/

//atalho document.getElementById()
function $() {
 	var aElements = new Array;

	for(var i=0; i<arguments.length; i++) {
		var vElement = arguments[i];

		vElement = (typeof vElement == 'string') ? 
		            document.getElementById(vElement) : vElement;

		if(arguments.length == 1) return vElement;
		aElements.push(vElement);
	}
	
	return aElements;
}//fim $
