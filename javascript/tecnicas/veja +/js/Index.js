/**
 *
 * Script para aplicar a tecnica veja +
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.setBehavior();
	},
	
	
	setBehavior: function() {
		var links = document.getElementById("information").getElementsByTagName("a");
		
		for(var i=0; i<links.length; i++) {
			var link = links[i];
			
			link.onclick = function() {
				Index.showInformation(this);
				return false;
			}
		}
	},
	
	
	showInformation: function(link) {
		var div = link.parentNode.parentNode;
		Index.hideInformation();
		div.className = "show";
	},
	
	
	hideInformation: function() {
		var divs = document.getElementById("information").getElementsByTagName("div");
		
		for(var i=0; i<divs.length; i++) {
			divs[i].className = "";
		}
	}
}


//inicializacao
window.onload = Index.init;