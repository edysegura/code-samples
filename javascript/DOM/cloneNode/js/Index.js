/** 
 *
 * Objeto Literal Index para uso do metodo element.cloneNode
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Index = {
	
	cloneNumber: 0,

	init: function() {
		Index.setSource();
	},
	
	
	setSource: function() {
		var element = document.body.getElementsByTagName('dl')[0];
		Index.setEvent(element);
	},
	
	
	setEvent: function(element) {
		element.onclick = function() {
			Index.clone(this);
		};
	},
	
	
	//elemento sendo clonado
	clone: function(element) {
		var clone = element.cloneNode(true);
		Index.modifyClone(clone);
		document.body.appendChild(clone);
	},
	
	
	modifyClone: function(clone) {
		Index.cloneNumber++;
		Index.setEvent(clone);
		clone.getElementsByTagName('dt')[1].innerHTML = "Título clone " + Index.cloneNumber;
		clone.getElementsByTagName('dd')[0].innerHTML = "Desc. clone "  + Index.cloneNumber;
	}
	
};

//inicializacao
window.onload = Index.init;