/**
 *
 * Objeto Literal Index para uso do canvas
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

//IEca
var mapaSP = new Image();
var mapaCidadeSP = new Image();

mapaSP.src = 'images/mapa_sp.jpg';
mapaCidadeSP.src = 'images/mapa_cidade_sp.jpg';


var Index = {
	
	init: function() {
		Index.drawAnel();
		Index.drawRedeSDH();
		Index.drawVisaoLinear();
	},
	
	
	drawAnel: function() {
		var canvas = document.getElementById('ringviewer');
		if (canvas && canvas.getContext) {
		  var c = canvas.getContext('2d');
			
			c.beginPath();
			c.strokeStyle = 'rgb(8,206,8)';
			c.lineWidth = 5;
			c.arc(290, 200, 160, 0, Math.PI * 2, false); //arc(x, y, radius, startAngle, endAngle, anticlockwise)
			c.stroke();
 		}
		else {
			throw new Error("Implementação do canvas é requerido!");
		}
	},
	
	
	drawRedeSDH: function() {
		var canvas = document.getElementById('rede-sdh');
		if (canvas && canvas.getContext) {
		  var c = canvas.getContext('2d');
			
			
			c.drawImage(mapaSP, 0, 0);
			c.lineWidth = 2;
			
			//região 4 to região 3
			c.beginPath();
			c.strokeStyle = 'rgb(0,153,0)';
			c.moveTo(140,65);
			c.lineTo(205,160);
			c.stroke();
			
			//região 3 to região 1
			c.beginPath();
			c.strokeStyle = 'rgb(0,153,0)';
			c.moveTo(205,160);
			c.lineTo(290,188);
			c.stroke();
			
			//região 3 to região 2
			c.beginPath();
			c.strokeStyle = 'rgb(0,153,0)';
			c.moveTo(205,160);
			c.lineTo(288,88);
			c.stroke();
			
			//região 1 to região 2
			c.beginPath();
			c.strokeStyle = 'rgb(255,0,0)';
			c.moveTo(288,188);
			c.lineTo(288,88);
			c.stroke();
			
			//região 2 to região 4
			c.beginPath();
			c.strokeStyle = 'rgb(255,255,0)';
			c.moveTo(288,88);
			c.lineTo(140,65);
			c.stroke();
 		}
		else {
			throw new Error("Implementação do canvas é requerido!");
		}
	},
	
	
	drawVisaoLinear: function() {
		var canvas = document.getElementById('visao-linear');
		if (canvas && canvas.getContext) {
		  var c = canvas.getContext('2d');
			
			c.drawImage(mapaCidadeSP, 160, 0);
			c.lineWidth = 2;
			
			//região 4 to região 3
			c.beginPath();
			c.strokeStyle = 'rgb(9,155,56)';
			c.moveTo(182,80);
			c.lineTo(182,370);
			c.stroke();
			
			//região 3 to região 1
			c.beginPath();
			c.strokeStyle = 'rgb(9,155,56)';
			c.moveTo(182,370);
			c.lineTo(355,325);
			c.stroke();
			
			//região 1 to região 2
			c.beginPath();
			c.strokeStyle = 'rgb(255,0,0)';
			c.moveTo(355,325);
			c.lineTo(390,80);
			c.stroke();
			
			//região 1 to região 2
			c.beginPath();
			c.strokeStyle = 'rgb(9,155,56)';
			c.moveTo(390,80);
			c.lineTo(182,80);
			c.stroke();
			
			//região 1 to região 4
			c.beginPath();
			c.strokeStyle = 'rgb(255,255,0)';
			c.moveTo(355,325);
			c.lineTo(180,80);
			c.stroke();
			
 		}
		else {
			throw new Error("Implementação do canvas é requerido!");
		}
	}
	
};

//inicializacao
window.onload = Index.init;
