/**
 *
 * Objeto Literal Index.js para uso da metodologia Ajax
 * com XML
 * @author Edy Segura, edy@segura.pro.br
 *
 */ 
var Index = {

	init: function() {
		Index.setLink();
	},

	setLink: function() {
		var link = document.links[0];
		link.onclick = function() {
			Index.getXML();
			return false;
		};
	},

	getXML: function() {
		var oldList = document.getElementsByTagName('ol')[0];
		
		if(oldList) {
			oldList.parentNode.removeChild(oldList);
		}
		
		Ajax.request({
			url      : "xml/republicanos.xml",
			callback : Index.showXML,
			response : "xml",
			update   : true,
			loading  : true
		});

	},

	showXML: function(XMLDocument) {
		var listNamesXML = XMLDocument.getElementsByTagName('nome');
		
		if(listNamesXML.length) {
			var newList = document.createElement("ol"),
			    listItem;
			
			for(var i=0; i<listNamesXML.length; i++) {
				listItem = document.createElement("li");
				
				listItem.innerHTML = listNamesXML[i].firstChild.nodeValue;
				newList.appendChild(listItem);
			}
			
			document.body.appendChild(newList);
		}
	}
};

//inicialização
window.onload = Index.init;


