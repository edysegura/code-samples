/** 
 *
 * Objeto Literal Index
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.buildTable();
	},
	
	
	buildTable: function() {
		var oLinks = document.getElementsByTagName('link');
		var oTable = document.getElementsByTagName('table')[0];
		var oTBody = oTable.tBodies[0];
		
		if(oLinks.length) {
			oTBody.deleteRow(0);
			
			for(var i=0; i<oLinks.length; i++) {
				if(oLinks[i].rel == "icon") continue;
				
				var oRow = oTBody.insertRow(oTBody.rows.length);
				oRow.insertCell(oRow.cells.length).innerHTML = oLinks[i].title;
				oRow.insertCell(oRow.cells.length).innerHTML = oLinks[i].rel;
				oRow.insertCell(oRow.cells.length).innerHTML = unescape(oLinks[i].href);
				
			}
		}
	}
	
};

//inicializacao
window.onload = Index.init;
