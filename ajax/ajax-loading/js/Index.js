/** 
 *
 * Script para carregar as imagens dinamicamente
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

var Index = {
	
	imageCounter: 2,
	
	
	init: function() {
		Index.getImages();
	},	
	
	
	getImages: function() {
		var image = new Image();
		
		image.setAttribute("src", "images/loading_" + Index.imageCounter + ".gif");
		image.setAttribute("alt", "Carregando...");
		
		image.onload = function() {
			var container = document.getElementById("image-container");
			var p = document.createElement("p");
			
			p.appendChild(this);
			container.appendChild(p);
			
			Index.imageCounter++;
			
			window.setTimeout(function(){
				Index.getImages();
			}, 500);
			
		};
	}

};

//inicializacao
window.onload = Index.init;
