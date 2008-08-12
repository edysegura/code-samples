/**
 *
 * Objeto Literal Index para uso do metodo element.removeChild(child)
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.setActionFirstTable();
		Index.setActionSecondTable();
	},

	
	setActionFirstTable: function() {
		var table = document.getElementById("first");
		var spans = table.getElementsByTagName("span");
		
		for(var i=0; i<spans.length; i++) {
			spans[i].onclick = function() {
				Index.removeColumn(this, table);
			}
		}
	},
	
	
	setActionSecondTable: function() {
		var span  = document.getElementById("action-remove");
		
		if(span) {
			span.onclick = function() {
				Index.removeColumnByAttribute();
			}
		}
	},
	
	
	removeColumn: function(span, table) {
		var cellIndex = span.parentNode.cellIndex;
		
		if(confirm("Deseja realmente remover esta coluna?")) {
			for(var i=0; i<table.rows.length; i++) {
				var row  = table.rows[i];
				var cell = row.cells[cellIndex];
				
				//removendo a coluna
				row.removeChild(cell);
			}
		}
	},
	
	
	removeColumnByAttribute: function() {
		if(confirm("Deseja realmente remover esta coluna?")) {
			var table = document.getElementById("second");
			var THs   = table.getElementsByTagName('th');
			var TDs   = table.getElementsByTagName('td');
			
			for(var i=0; i<THs.length; i++) {
				if(THs[i].axis == "remove") {
					THs[i].parentNode.removeChild(THs[i]); //removendo a coluna
				}
			}
			
			for(var i=0; i<TDs.length; i++) {
				if(TDs[i].axis == "remove") {
					TDs[i].parentNode.removeChild(TDs[i]); //removendo a coluna
				}
			}
		}
	}

};

//inicializacao
window.onload = Index.init;