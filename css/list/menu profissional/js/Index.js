/**
 * 
 * Script para troca dos temas
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

var Index = {
	
	init: function() {
		Index.setLinks();
		Index.preloadImages();
	},
	
	
	setLinks: function() {
		var links = document.getElementById('themes').getElementsByTagName('a');
		
		for(var i in links) {
			var link = links[i];
			link.onclick = function() {
				Index.setTheme(this.href.substring(this.href.indexOf("#")+1));
				return false;
			};
		}
	},
	
	
	setTheme: function(theme) {
		var links = document.getElementsByTagName('link');
		
		if(theme == "t1") {
			links[0].disabled = false;
			links[0].rel = "stylesheet";
			
			links[1].disabled = true;
			links[1].rel = "alternate stylesheet";
		}
		else if(theme == "t2") {
			links[0].disabled = true;
			links[0].rel = "alternate stylesheet"
			
			links[1].disabled = false;
			links[1].rel = "stylesheet"
		}
		else {
			links[0].disabled = links[1].disabled = true;
		}
	},
	
	
	preloadImages: function() {
		var image1 = new Image();
		var image2 = new Image();
		var image3 = new Image();
		var image4 = new Image();
		image1.src = "css/t1/images/six_0a.gif";
		image2.src = "css/t1/images/six_1a.gif";
		image3.src = "css/t2/images/six_0a.gif";
		image4.src = "css/t2/images/six_1a.gif";
	}
	
};

//inicializacao
window.onload = Index.init;
