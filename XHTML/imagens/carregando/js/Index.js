/** 
 *
 * Script para carregar as imagens dinamicamente
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

var Index = {
	
	imageConter: 2,
	
	init: function() {
		Index.getImages();
	},	
	
	
	getImages: function() {
		var image = new Image();
		var container = document.getElementById("image-container");
		
		image.setAttribute("src", "imagens/loading_" + Index.imageConter + ".gif");
		image.setAttribute("alt", "Carregando...");
		
		image.onload = function() {
			newP = document.createElement("p");
			newP.appendChild(this);
			container.appendChild(newP);
			
			Index.imageConter++;
			
			window.setTimeout(function(){
				Index.getImages();
			}, 500);
			
		};
	}

};

//inicializacao
window.onload = Index.init;
