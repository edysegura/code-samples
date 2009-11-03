/**
 * 
 * Event.target
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */
var Index = {

	init: function() {
		Index.showTarget();
	},
	
	
	showTarget: function() {
		var span = document.getElementById("element");
		document.onmousemove = function(e) {
			span.innerHTML = Index.getSource(e).nodeName;
		}
	},
	
	
	getSource: function(e) {
		e = e || window.event;
		
		var target = (e.target) ? e.target : 
		             (e.srcElement) ? e.srcElement : null;
		
		//necessario para safari e konqueror
		if(target && target.nodeType == 3) target = target.parentNode;
		return target;
	}
	
};

//inicializacao
window.onload = Index.init;