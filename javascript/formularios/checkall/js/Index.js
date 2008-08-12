/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.setCheckAll();
	},
	
	
	setCheckAll: function() {
		var aInputs = $('area', 'location', 'host', 'areaLocation');
		
		for(var i=0; i<aInputs.length; i++) {
			aInputs[i].onclick = function() {
				Form.checkAll(this);
			};
		}

	}
	
};//fim Index.js


function $() {
 	var elements = new Array;
	var element;

	for(var i=0; i<arguments.length; i++) {
		element = document.getElementById(arguments[i])
		elements.push(element);
	}
	
	return elements;
}//fim $

//inicialização
window.onload = Index.init;