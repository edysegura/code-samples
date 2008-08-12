/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Lib
*/

//pega os elementos pelo className
document.getElementsByClassName = function(sClassName) {
	var oChildren = document.getElementsByTagName('*') || document.all;
	var aElements = new Array();
  
	for(var i = 0; i < oChildren.length; i++) {
		var oChild = oChildren[i];
		var aClassNames = oChild.className.split(' ');
		
		for(var j = 0; j < aClassNames.length; j++) {
			if(aClassNames[j] == sClassName) {
				aElements.push(oChild);
				break;
			}
		}
	}
	return aElements;
}

//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}