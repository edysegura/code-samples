/**
 * 
 * Evento window.onmousemove
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

var Index = {

	init: function() {
		Index.setOnMouseMove();
	},
	
	
	setOnMouseMove: function() {
		window.onmousemove = function(e) {
			Index.setSpan(e);
			Index.setBanner(e);
		}
	},
	
	
	setSpan: function(e) {
		var mousePosition = Index.getMousePosition(e);
		var span = document.getElementById("position");
		if(span) span.innerHTML = "x: " + mousePosition.x + ", y: " + mousePosition.y;
	},
	
	
	setBanner: function(e) {
		var mousePosition = Index.getMousePosition(e);
		var banner = document.getElementById("banner");
		
		if(banner) {
			banner.style.top  = (mousePosition.y + 10) + "px";
			banner.style.left = (mousePosition.x + 15) + "px";
		}
	},
	
	
	getMousePosition: function(e) {
		e = e || window.event;
		
		var positionX = (e.clientX) ? e.clientX : e.pageX;
		var positionY = (e.clientY) ? e.clientY : e.pageY;
		
		return {x:positionX, y:positionY};
	}
	
};

//inicializacao
window.onload = Index.init;
