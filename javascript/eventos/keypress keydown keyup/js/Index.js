/* 
 * Index.js
 * 
 * Exemplo do uso dos eventos keypress, keydown e keyup
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.setHandles();
	},//fim init
	
	
	setHandles: function() {
		var oTableKeyPress = document.getElementById('key-press');
		var oTableKeyDown  = document.getElementById('key-down');
		var oTableKeyUp    = document.getElementById('key-up');
		
		document.onkeypress = function () {
			Index.buildTable(Event.getEvent(), oTableKeyPress);
		};
		
		document.onkeydown = function () {
			Index.buildTable(Event.getEvent(), oTableKeyDown);
		};
		
		document.onkeyup = function () {
			Index.buildTable(Event.getEvent(), oTableKeyUp);
		};
	},//fim setHandlers
	
	
	buildTable: function(oEvent, oTable) {
		var aDados;
		
		//json com os dados do evento
		if(oTable.id == "key-press") {
			
			aDados = [
				(oEvent.charCode) ? oEvent.charCode : oEvent.keyCode,
				String.fromCharCode(oEvent.charCode),
				oEvent.ctrlKey,
				oEvent.altKey,
				oEvent.shiftKey
			];
			
		}
		else {
			
			aDados = [
				oEvent.keyCode,
				oEvent.ctrlKey,
				oEvent.altKey,
				oEvent.shiftKey
			];
			
		}
		
		Index.clearTable(oTable);
		
		var oTbody = oTable.tBodies[0];
		var oRow   = oTbody.insertRow(oTbody.rows.length);
		
		for(var i=0; i<aDados.length; i++) {
			oRow.insertCell(oRow.cells.length).innerHTML = 
			(aDados[i].toString() != 'true') ? aDados[i] : "<span>" + aDados[i] + "</span>";
		}
	},//fim buildTable
	
	
	clearTable: function(oTable) {
		oTable.removeChild(oTable.tBodies[0]);
		oTable.appendChild(document.createElement('tbody'));
	}//fim clearTable
	
};//fim Index

//inicializacao
window.onload = Index.init;
