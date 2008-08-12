/**
 *
 * Objeto Literal Index para uso do metodo document.getElementsByTagName("*")
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.getAllElements();
	},
	
	
	getAllElements: function() {
		var elements = document.getElementsByTagName("*"); //seletor estrela
		var list     = document.createElement("ol");
		
		for(var i=0; i<elements.length; i++) {
			var item    = document.createElement("li");
			var element = elements[i];
			item.appendChild(document.createTextNode(element.nodeName));
			list.appendChild(item);
		}
		
		document.body.appendChild(list);
	}
	
}

//inicializacao
window.onload = Index.init;