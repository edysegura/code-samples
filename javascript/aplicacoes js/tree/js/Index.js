/**
 *
 * Script para aplicar a funcionalidades da tree
 * @author Edy Segura, edy@segura.pro.br
 *
 */
var Index = {

	init: function() {
		Index.setTree();
	},
	
	setTree: function() {
		var divContainer = document.getElementById('measure-type');
		if(divContainer) {
			$('ul.tree li:last-child', divContainer).addClass('last');
		}
		Index.setBehavior();
	},
	
	setBehavior: function() {
		var divContainer = document.getElementById('measure-type');
		$('a.measure-type', divContainer).toggle(
			function(){
				$("ul", this.parentNode).show();
				return false;
			},
			function(){
				$("ul", this.parentNode).hide();
				return false;
			}
		);
	}
	
};

$(function(){ Index.init() });