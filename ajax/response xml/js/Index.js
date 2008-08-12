/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Uso do método responseXML
*/

var Index = {

	init: function() {
		Index.setLink();
	},


	setLink: function() {
		var oLink = document.links[0];
		
		oLink.onclick = function() {
			Index.getXML();
			return false;
		};
		
	},


	getXML: function() {
		var oOldList = document.getElementsByTagName('ol')[0];
				
		if(oOldList) {
			oOldList.parentNode.removeChild(oOldList);
		}
		
		Ajax.run({
			url      : "xml/republicanos.xml",
			callback : Index.showXML,
			response : "xml",
			loading  : true
		});

	},


	showXML: function(oXMLDocument) {
		var aRepublicanos = oXMLDocument.getElementsByTagName('nome');
	
		if(aRepublicanos.length) {
			var oList = document.createElement("ol");
			
			for(var i=0; i<aRepublicanos.length; i++) {
				var oListItem = document.createElement("li");
				
				oListItem.innerHTML = aRepublicanos[i].firstChild.nodeValue;
				oList.appendChild(oListItem);

			}
			
			document.body.appendChild(oList);
		
		}
	}

};

//inicialização
window.onload = Index.init;


