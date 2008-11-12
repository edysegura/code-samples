/**
 *
 * Objeto Literal para carregar as imagens usadas no canvas
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var GetImages = function() {
	this.mapaSP       = new Image();
	this.mapaCidadeSP = new Image();
	this.regionalIcon = new Image();
	this.anelIcon     = new Image();

	this.mapaSP.src       = 'images/mapa_sp.jpg';
	this.mapaCidadeSP.src = 'images/mapa_cidade_sp.jpg';
	this.regionalIcon.src = 'images/building-1.gif';
	//this.regionalIcon.src = 'images/building-2.png';
	//this.regionalIcon.src = 'images/building-3.png';
	//this.regionalIcon.src = 'images/bolinha.gif';
	this.anelIcon.src     = 'images/anel.png';
};

//inicializacao
var PreloadImages = new GetImages();

