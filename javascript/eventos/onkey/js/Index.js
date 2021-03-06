﻿/**
 * 
 * Exemplo do uso dos eventos keypress, keydown e keyup
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Index = {
	
	init: function() {
		Index.setHandles();
	},
	
	
	setHandles: function() {
		if(typeof EventUtils != 'undefined' && EventUtils.getEvent) {
			var tableKeyPress = document.getElementById('keypress');
			var tableKeyDown  = document.getElementById('keydown');
			var tableKeyUp    = document.getElementById('keyup');
			
			document.onkeypress = function () {
				Index.buildTable(EventUtils.getEvent(), tableKeyPress);
			};
			
			document.onkeydown = function () {
				Index.buildTable(EventUtils.getEvent(), tableKeyDown);
			};
			
			document.onkeyup = function () {
				Index.buildTable(EventUtils.getEvent(), tableKeyUp);
			};
		}
		else {
			alert("O componente EventUtils.js é necessário. \nVerifique se o componente está sendo carregado corretamente.");
		}
	},
	
	
	buildTable: function(pageEvent, table) {
		var tableData;
		
		//json com os dados do evento
		if(table.id == "keypress") {
			
			tableData = [
				(pageEvent.charCode) ? pageEvent.charCode : pageEvent.keyCode,
				String.fromCharCode(pageEvent.charCode),
				pageEvent.ctrlKey,
				pageEvent.altKey,
				pageEvent.shiftKey
			];
			
		}
		else {
			
			tableData = [
				pageEvent.keyCode,
				pageEvent.ctrlKey,
				pageEvent.altKey,
				pageEvent.shiftKey
			];
			
		}
		
		Index.clearTable(table);
		
		var tbody = table.tBodies[0];
		var row   = tbody.insertRow(tbody.rows.length);
		
		for(var i=0; i<tableData.length; i++) {
			row.insertCell(row.cells.length).innerHTML = 
			(tableData[i].toString() != 'true') ? tableData[i] : "<span>" + tableData[i] + "</span>";
		}
	},
	
	
	clearTable: function(table) {
		table.removeChild(table.tBodies[0]);
		table.appendChild(document.createElement('tbody'));
	}
	
};

//inicializacao
window.onload = Index.init;
