/**
 *
 * Object Literal for page Index
 * @author Edy Segura, edy@liveware.com.br
 * 
 */

var Index = {

	init: function() {
		Index.setButton();
	},
	
	
	setButton: function() {
		var button = document.getElementById('botao');
		
		button.onclick = function() {
			var table = document.getElementById('territorios');
			Index.buildTable(table, TableJSON);
			this.parentNode.removeChild(this);
		};
		
	},
	
	
	buildTable: function(table, TableJSON) {
		Index.clearTable(table);
		var tbody = table.tBodies[0];
		
		for(var i=0; i<TableJSON.length; i++) {
			var row = tbody.insertRow(tbody.rows.length);
			
			for(var index in TableJSON[i]) {
				row.insertCell(row.cells.length).innerHTML = 
				(TableJSON[i][index]) ? unescape(TableJSON[i][index]) : "";
			}
			
		}
	},
	
	
	clearTable: function(table) {
		if(table) {
			table.removeChild(table.tBodies[0]);
			table.appendChild(document.createElement('tbody'));
		}
	}
	
};

//inicializacao
window.onload = Index.init;