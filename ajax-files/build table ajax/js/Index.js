/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Script para Build Table
*/

var Index = {
	
	init: function() {
		Index.setLink();
	},//fim init
	
	
	setLink: function() {
		var oLink = document.links[0];
		
		oLink.title   = "Construir tabela com AJAX e JSON";
		oLink.onclick = function() {
			Index.getCustomer();
			return false;
		};
		
	},//fim setLink
	
	
	getCustomer: function() {
		var sUrl = "json/customer-sales-history.txt";
		
		Ajax.run({
			url      : sUrl,
			callback : Index.buildTable,
			loading  : true
		});
		
	},//fim getCustomer
	
	
	buildTable: function(sResponse) {
		var aDados = eval('(' + sResponse + ')');
		
		var oTable = $create('table');
		var oThead = $create('thead');
		var oTbody = $create('tbody');
		var oTfoot = $create('tfoot');
		
		var iNumColunas = aDados[0].length;
		var iColSpan = iNumColunas - aDados[aDados.length-1].length;
		var oTableResultado = $('filtro-resultado');
		
		//inserção dos elementos col para formatação
		for(var i=0; i<iNumColunas; i++) {
			var oCol = $create('col');
			oCol.className = "coluna-" + (i+1);
			oTable.appendChild(oCol);
		}
		
		//inserção do cabeçalho da tabela
		var oRowTh = oThead.appendChild($create('tr'));
		for(var i=0; i<iNumColunas; i++) {
			var oCellTh = $create('th');
			oCellTh.innerHTML = aDados[0][i];
			oRowTh.appendChild(oCellTh);
		}
			
		//inserção do rodapé da tabela
		var oRowTf = oTfoot.appendChild($create('tr'));
		var oCellTf = $create("th");
		
		oCellTf.colSpan = iColSpan;
		oCellTf.innerHTML = "Resultado Total da Pesquisa";
		oRowTf.appendChild(oCellTf);
		
		for(var i=0; i<iNumColunas-iColSpan; i++) {
			
			var oCellTf = oRowTf.appendChild($create('td'));
			oCellTf.innerHTML = aDados[aDados.length-1][i];
			
			if(!isNaN(parseFloat(aDados[aDados.length-1][i]))) {
				oCellTf.className = "number";
			}
			
		}
		
		//inserção do conteúdo da tabela
		for(var i=1; i<aDados.length-1; i++) {
			var oRowTb = oTbody.appendChild($create('tr'));
			
			for(var j=0; j<iNumColunas; j++) {
				
				var oCellTb = oRowTb.appendChild($create('td'));
				oCellTb.innerHTML = aDados[i][j];
				
				if(!isNaN(parseFloat(aDados[i][j]))) {
					oCellTb.className = "number";
				}
				
			}
		}
		
		oTable.appendChild(oThead);
		oTable.appendChild(oTfoot);
		oTable.appendChild(oTbody);
			
		if(oTableResultado) {
			$remove(oTableResultado);
		}
		
		oTable.id = "filtro-resultado";
		document.body.appendChild(oTable);
		
	}//fim buildTable
	
};//fim Index

//inicialização
window.onload = Index.init;

