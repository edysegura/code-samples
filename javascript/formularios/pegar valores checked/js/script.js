/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Método para pegar os valores checados no formulário
*/

//limpar o combobox
function fnInit() {
	var oSelect = document.getElementById('cadastrados');
	//técnica para limpar combobox
	oSelect.options.length = 0;
}
window.onload = fnInit;


//valida o formulário antes de submitar
function fnCheckToSubmit(oForm) {
	
	if(fnHasSelectedElement(oForm.nomes) && fnHasSelectedElement("profissao")) {
		
		var sProfissao = fnGetProfissao(oForm.profissao);
		fnCadastrar(oForm.cadastrados, fnGetList(oForm.nomes, sProfissao));
		
		fnClear(oForm.nomes);
		fnClear(oForm.profissao);
	}
	else alert("Nome e profissão devem ser selecionados.");
	//para não enviar o forumlário
	return false;
}


//pega a profissão selecionada no grupo de radio
function fnGetProfissao(oInputsRadio) {
	
	for(var i=0; i<oInputsRadio.length; i++) {
		if(oInputsRadio[i].checked) 
			return oInputsRadio[i].value;
	}
	
}


//monta uma lista com os nome selecionados
function fnGetList(oNomes, sProfissao) {
	var aList = new Array;
	
	for(var i=0; i<oNomes.length; i++)
		if(oNomes[i].checked) aList.push({nome:oNomes[i].value, profissao:sProfissao});

	return aList;
}


//adiciona as opções selecionadas no elemento select
function fnCadastrar(oSelect, aList) {
	for(var i=0; i<aList.length; i++) {
		oSelect.options[oSelect.options.length] = new Option(aList[i].nome, aList[i].profissao);
	}
}


//verifica se pelo menos um elemento contendo o nome especificado está selecioando.
function fnHasSelectedElement(oNodeList) {
	var oElements = (typeof oNodeList == "string") ? 
	                 document.getElementsByName(oNodeList) : oNodeList;

	for(var i=0; i<oElements.length; i++)
		if(oElements[i].checked) return true;
	
	return false;
}


//visualiza dos dados cadastrados
function showDetails(oSelect) {
	alert(["Nome: " + oSelect.options[oSelect.selectedIndex].text, "Profissão: " + oSelect.value].join("\n"));
}

//limpa os valores checados
function fnClear(oNodeList) {
	
	var oElements = (typeof oNodeList == "string") ? 
	                 document.getElementsByName(oNodeList) : oNodeList;
	
	for(var i=0; i<oElements.length; i++) {
		oElements[i].checked = false;
	}
	
}

