/**
 *
 * Objeto Literal para calcular o zoom
 *
 */
var Zoom = {
	
	set: function(porcent) {
		var divContainer = document.getElementById('canvas-container');
		porcent = parseFloat(porcent);
		
		$('div.ring-node', divContainer).each(function() {
			var width, height, node, borderWidth = 4;
			node = Zoom.findNodeInNodes(this.id);
			
			width    = (layoutParams.boxWidth  * porcent) - borderWidth;
			height   = (layoutParams.boxHeight * porcent) - borderWidth;
			fontSize = layoutParams.fontSize   * porcent;
			posx     = node.x * porcent;
			posy     = node.y * porcent;
			
			$(this).css({
				'width' : width  + 'px',
				'height': height + 'px',
				'top'   : posy   + 'px',
				'left'  : posx   + 'px'
			});
			
			$('span', this).css('font-size', fontSize + 'px');
		});
	},
	
	findNodeInNodes: function(nodeName) {
		for(index in nodes) {
			var node = nodes[index];
			if(node.name === nodeName) {
				return node;
			}
		}
		return null;
	}
	
};