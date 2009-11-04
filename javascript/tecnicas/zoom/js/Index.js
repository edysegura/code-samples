/**
 *
 * Objeto Literal Index.js
 *
 */
var Index = {
	
	init: function() {
		Index.drawNodes();
		Index.setCombo();
	},
	
	drawNodes: function() {
		for(index in nodes) {
			var node = nodes[index], nodeString;
			
			nodeString = 
			'<div id="'+ node.name +'" title="'+ node.name +'" class="ring-node" style="top: '+ node.y +'px; left: '+ node.x +'px; width: '+ (layoutParams.boxWidth-4) +'px; height: '+ (layoutParams.boxHeight-4) +'px;" nodeId="'+ node.id +'">'
				+ '<span style="top: 2px; position: relative;">'+ node.name +'</span>' +
			'</div>'
			
			$('#canvas-container').append(nodeString);
		}
	},
	
	setCombo: function() {
		var combo = document.getElementById('zoom-controller');
		if(combo) {
			combo.onchange = function() {
				Zoom.set(this.value);
			};
		}
	}
	
};

//inicializacao
window.onload = Index.init;