/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: DOM-Kit
Referência: Prototype - http://prototype.conio.net/
Referência: freeDOM   - http://www.metzen.com.br/freedom/
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


//cria um elemento novo
function $create(sElement) {
	var oElement = document.createElement(sElement);
	
	if(typeof oElement == 'object' && arguments.length > 0) {
		for(var i=1; i<arguments.length; i++) {
			var aAttribute = arguments[i].split(":");
			oElement[aAttribute[0]] = aAttribute[1];
		}
	}
	
	return oElement;
}//fim $create


//remover o elemento
function $remove() {
	for(var i=0; i<arguments.length; i++) {
		var oElement = $(arguments[i]);
		
		if(oElement) {
			oElement.parentNode.removeChild(oElement);
		}
	
	}
}//fim $remove