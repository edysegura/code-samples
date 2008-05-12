/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Percorrendo JSON
*/

//função para inicialização
function fnInit() {
	var oJson = [
		{"CPE"   : {"Nó": "CTA300", "WAN IP": "10.1.2.123", "LAN IP": "192.168.0.37"} },
		{"DSLAM" : {"Nó": "CTB348", "Slot": "PCI", "Porta": "37" } },
		{"BPX"   : {"Nó": "CTB857", "Slot": "ISA", "Porta": "168"} },
		{"AGREGADOR" : {"Nó": "CTB758", "Slot": "AGP", "Porta": "25"} }
	];
	
	fnCreateTop(oJson);
}
window.onload = fnInit;

//criação das divs dentro de topologia
function fnCreateTop(oJson) {
	var oTopologia = $('topologia');
	var iCont = 0;
	
	for(var i=0; i<oJson.length; i++) {
		for(sIndex in oJson[i]) {
			
			var oDiv = document.createElement('div');
			var oH3  = document.createElement('h3');
			var oTable = document.createElement('table');
			
			oH3.innerHTML = sIndex;
			oDiv.appendChild(oH3);
			oDiv.appendChild(oTable);
			oDiv.id = "top-" + (++iCont);
			oDiv.className = "normal";
			
			for(sAtributo in oJson[i][sIndex]) {
				
				var oRow = oTable.insertRow(oTable.rows.length);
				var oTH  = document.createElement('th');
				
				oTH.innerHTML = sAtributo + ":";
				oRow.appendChild(oTH);
				oRow.insertCell(oRow.cells.length).innerHTML = oJson[i][sIndex][sAtributo];
			}
			
			oRow = oTable.insertRow(oTable.rows.length);

			var oCell = oRow.insertCell(oRow.cells.length);
			oCell.colSpan = 2;
			oCell.className = "detalhes";
			oCell.innerHTML = '<a href="javascript:void(0);" class="detalhes">Mais detalhes</a>';
			
			var oDivImg = document.createElement('div');
			var oInputCheck = document.createElement('input');
			var oImgOk  = new Image;
			var oImgErro = new Image;
			
			oImgOk.src = "imagens/sinal_verde.gif";
			oImgErro.src = "imagens/sinal_vermelho.gif";
			
			oDivImg.id = "painel";
			oImgOk.alt = "Nenhum problema encontrado";
			oImgErro.alt = "Problema encontrado";
			
			oImgOk.onclick = fnGetFunc('normal verde', oDiv.id);
			oImgErro.onclick = fnGetFunc('normal vermelho', oDiv.id);
			
			oInputCheck.type = "checkbox";
			oInputCheck.name = "cselecionado";
			oInputCheck.value = oDiv.id;
			oInputCheck.onclick = fnSetOneCheck;
			
			oDivImg.appendChild(oImgOk);
			oDivImg.appendChild(oImgErro);
			oDivImg.appendChild(oInputCheck);
			oDiv.appendChild(oDivImg);
		}
		
		oTopologia.appendChild(oDiv);
	}
}

//função laranja para adição dinâmica da função fnSetColor
function fnGetFunc(sColor, oDiv) {
	return function(){ fnSetColor(sColor, oDiv); };
}

//função para ajustar a cor
function fnSetColor(sColor, oDiv) {
	$(oDiv).className = ($(oDiv).className != sColor) ? sColor : "normal";
}

//verificar que somente um elemento está selecioando
function fnSetOneCheck() {
	var oDiv = this.parentNode.parentNode;
	
	if(this.checked) {
		var oChecks = oDiv.parentNode.getElementsByTagName('input');

		for(var i=0; i<oChecks.length; i++) {
			oChecks[i].checked = false;
		}
		
		this.checked = true;
	}
	else {
		this.checked = false;
	}
}

//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}
