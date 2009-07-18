/**
 *
 * Collection element.attributes
 * @author: Edy Segura, edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.listAttributes();
	},
	
	
	listAttributes: function() {
		var element = document.body.getElementsByTagName("p")[0];
		var list = document.body.getElementsByTagName("ol")[0];
		
		list.innerHTML = "";
		
		for(var i=0; i<element.attributes.length; i++) {
			var attribute = element.attributes[i];
			
			if(attribute.value) {
				var item = document.createElement("li");
				item.innerHTML = attribute.name.toLowerCase() + " / " + attribute.value;
				list.appendChild(item);
			}
		}
	}
	
};

//inicializacao
window.onload = Index.init;