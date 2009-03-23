/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Index = {
	
	init: function() {
		Index.setCheckAll();
	},
	
	
	setCheckAll: function() {
		var inputs = [
			document.getElementById('area'),
			document.getElementById('location'),
			document.getElementById('host'),
			document.getElementById('areaLocation')
		];
		
		for(var i=0; i<inputs.length; i++) {
			var input = inputs[i];
			if(input) {
				input.onclick = function() {
					Form.checkAll(this);
				};
			}
		}
	}
	
};

//inicialização
window.onload = Index.init;