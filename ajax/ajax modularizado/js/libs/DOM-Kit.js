/*
 * DOM-Kit
 *
 * DOM-Kit é um conjunto de funções para simplificação
 * do uso da API do DOM - Document Object Model
 *
 * @author: Edy Segura - edy@segura.eti.br
 * Referência: Prototype - http://www.prototypejs.org/
 * Referência: freeDOM   - http://www.metzen.com.br/freedom/
 *
 */


/*
 * Atalho para o método document.getElementById()
 * @param: sElementId => String
 * @return: Node Object, Array of Node Objects
 */
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

