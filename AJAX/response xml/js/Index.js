/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Uso do método responseXML
*/

var Index = {

	init: function() {
		Index.setLink();
	},//fim init


	setLink: function() {
		var oLink = document.links[0];
		
		oLink.onclick = function() {
			Index.getXML();
			return false;
		};
		
	},//fim fasd


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

	},//fim getXML


	showXML: function(oXMLDocument) {
		var aRepublicanos = oXMLDocument.getElementsByTagName('nome');
	
		if(aRepublicanos.length) {
			var oList = document.createElement("ol");
			
			for(var i=0; i<aRepublicanos.length; i++) {
				var oListItem = document.createElement("li");
				
				oListItem.innerHTML = aRepublicanos[i].firstChild.nodeValue;
				oList.appendChild(oListItem);

			}//fim for
			
			document.body.appendChild(oList);
		
		}//fim if
	}//fim showXML

};//fim Index

//inicialização
window.onload = Index.init;


