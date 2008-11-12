/**
 *
 * Objeto Literal Index para uso do canvas
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var RingCanvas = {
	
	draw: function(Ring) {
		var canvas = document.getElementById('ringviewer');
		if (canvas && canvas.getContext) {
		  var c = canvas.getContext('2d');
			var canvasContainer = document.getElementById('ringviewer-content');
			
			c.beginPath();
			c.strokeStyle = Ring.strokeStyle;
			c.lineWidth   = Ring.lineWidth;
			c.arc (
				canvasContainer.offsetWidth/2, 
				canvasContainer.offsetHeight/2, 
				Ring.radius, 
				0,
				Math.PI * 2,
				false
			); //arc(x, y, radius, startAngle, endAngle, anticlockwise);
			c.stroke();
			
			RingCanvas.drawEquipments(Ring, canvasContainer);
 		}
		else {
			throw new Error("Implementação do canvas é requerido!");
		}
	},
	
	
	drawEquipments: function(Ring, canvasContainer) {
		for(i in Ring.equipments) {
			var equipment     = Ring.equipments[i];
			var divEquipment  = RingCanvas.createDivEquipment(i, equipment);
			var divLinkTop    = RingCanvas.createDivLink('linktop', equipment);
			var divContent    = RingCanvas.createDivContent(equipment);
			var divLinkBottom = RingCanvas.createDivLink('linkbottom', equipment);
			
			divEquipment.appendChild(divLinkTop);
			divEquipment.appendChild(divContent);
			divEquipment.appendChild(divLinkBottom);
			canvasContainer.appendChild(divEquipment);
		}
	},
	
	
	createDivEquipment: function(i, equipment) {
		var div = document.createElement('div');
		var idn = parseInt(i) + 1;
		
		div.className = 'equipment';
		div.id = 'equipment-' + idn;
		
		div.style.top  = equipment.positionY + "px";
		div.style.left = equipment.positionX + "px";
		
		return div;
	},

	
	createDivContent: function(equipment) {
		var div = document.createElement('div');
		div.className = 'ring-content ' + equipment.status;
		div.innerHTML = equipment.ringContent.join('<br />');
		return div;
	},
	
	
	createDivLink: function(where, equipment) {
		var div  = document.createElement('div');
		var a    = document.createElement('a');
		var span = document.createElement('span');
		
		if(where == 'linktop') {
			div.className = 'linktop';
			a.innerHTML = equipment.linkTop.name;
			span.innerHTML = equipment.linkTop.location.join('<br />');
		}
		else if(where == 'linkbottom') {
			div.className = 'linkbottom';
			a.innerHTML = equipment.linkBottom.name;
			span.innerHTML = equipment.linkBottom.location.join('<br />');
		}
		
		a.href = '#';
		a.onclick = function() { return false; }
		
		a.appendChild(span);
		div.appendChild(a);
		
		return div;
	}
	
};
