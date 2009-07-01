/**
 *
 * JavaScript para adicionar a class last nos 
 * últimos <li></li> de cada <ul></ul>
 * @author Edy Segura, edy@segura.pro.br
 * 
 */
var Index = {

	init: function() {
		Index.setClassOnLastLi();
	},
	
	setClassOnLastLi: function() {
		var tree = document.getElementById('tree');
		var list = [tree];
		var uls  = tree.getElementsByTagName('ul');
		
		for(var i=0; i<uls.length; i++) {
			list[list.length] = uls[i];
		}
		
		for(var i=0; i<list.length; i++) {
			var item = list[i].lastChild;
			
			while(!item.tagName || item.tagName.toLowerCase() != 'li')
				item = item.previousSibling;
				
			item.className += "last";
		}
	}
	
};

//inicializacao
window.onload = Index.init;

//com jquery
/*
$(document).ready(function() {
	$('ul.tree li:last-child').addClass('last'); 
}); 
*/