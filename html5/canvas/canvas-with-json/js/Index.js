/**
 *
 * Objeto Literal para uso do canvas
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Canvas.draw(RedeSDH);
		Canvas.draw(Regional);
		RingCanvas.draw(Ring);
	}
	
};

//inicializacao
window.onload = Index.init;
