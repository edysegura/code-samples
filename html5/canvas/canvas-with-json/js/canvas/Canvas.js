/**
 *
 * Objeto Literal para uso do canvas
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Canvas = {

	draw: function(params) {
		var canvas = document.getElementById(params.canvas);
		if (canvas && canvas.getContext) {
		  var c = canvas.getContext('2d');
			var canvasContainer = document.getElementById(params.canvas + '-content');
			
			c.drawImage (
				params.backgroundImage,
				params.imagePositionX,
				params.imagePositionY
			);
			
			Canvas.drawLines(canvasContainer, c, params);
			Canvas.drawPoints(canvasContainer, params);
 		}
		else {
			throw new Error("Implementação do canvas é requerido!");
		}
	},


	drawLines: function(canvasContainer, c, params) {
		for(var i in params.lines) {
			var line = params.lines[i];
			
			c.beginPath();
			c.lineWidth = params.lineWidth;
			c.strokeStyle = params.strokeStyle;
			c.moveTo(line.x1, line.y1);
			c.lineTo(line.x2, line.y2);
			c.stroke();
			
			if(line.link) {
				Canvas.createLink(canvasContainer, line.link);
			}
		}
	},
	
	
	drawPoints: function(canvasContainer, params) {
		for(var i in params.points) {
			var point    = params.points[i];
			var divPoint = Canvas.createDivPoint(i, point);
			canvasContainer.appendChild(divPoint);
		}
	},
	
	
	createDivPoint: function(i, point) {
		var id   = parseInt(i) + 1;
		var div  = document.createElement('div');
		var icon = point.icon;
		
		div.id         = point.className + '-' + id;
		div.className  = point.className;
		div.style.top  = point.positionY + 'px';
		div.style.left = point.positionX + 'px';
		div.innerHTML  = point.label;
		
		div.onclick = function() {
			document.location.href = point.location;
			return false;
		};
		
		icon.alt   = point.label;
		icon.title = point.label;
		
		div.insertBefore(icon, div.firstChild);
		return div;
	},
	
	
	createLink: function(canvasContainer, link) {
		var div = document.createElement('div');
		
		div.className  = 'link';
		div.style.top  = link.y + 'px';
		div.style.left = link.x + 'px';
		
		div.onclick = function() {
			document.location.href = link.location;
			return false;
		};
		
		canvasContainer.appendChild(div);
	}

};
