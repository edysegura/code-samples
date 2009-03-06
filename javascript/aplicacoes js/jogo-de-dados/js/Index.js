/**
 *
 * Objeto Literal Index
 * @author Edy Segura, edy@segura.pro.br
 *
 */
var Index = {

	images: [],
	
	init: function() {
		Index.preloadImages();
		Index.setForm();
	},
	
	
	preloadImages: function() {
		for(var i=1; i<=6; i++) {
			var image = new Image();
			image.src = "images/dado0" + i + ".gif";
			Index.images.push(image);
		}
	},
	
	
	setForm: function() {
		var form = document.forms[0];
		if(form) {
			form.onsubmit = function() {
				Index.showResult(this);
				return false;
			}
		}
	},
	
	
	showResult: function(form) {
		var imgDado1  = document.getElementById('imgD1');
		var imgDado2  = document.getElementById('imgD2');
		
		var valorD1   = Index.lancaDado();
		var valorD2   = Index.lancaDado();
		
		form.d1.value = valorD1;
		form.d2.value = valorD2;
		
		imgDado1.src  = Index.images[valorD1-1].src; //"images/dado0" + valorD1 + ".gif";
		imgDado2.src  = Index.images[valorD2-1].src; //"images/dado0" + valorD2 + ".gif";
	},
	
	
	lancaDado: function() {
	  // é somado + 1 para nunca retornar zero.
		// e multiplicado por 6 para gerar números randônicos de 1 a 6.
		return parseInt(1 + Math.random() * 6);
	}
}

//inicializacao
window.onload = Index.init;