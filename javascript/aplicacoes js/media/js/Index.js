/**
 * 
 * Script para calcular média dos alunos
 * @author Edy Segura, edy@segura.pro.br
 * 
 */

//ajustes iniciais ao carregar a página
function fnInit() {
	oTbody = $('talunos').tBodies[0];
	oTbody.deleteRow(0);
}
window.onload = fnInit;

//pegando os valores do formulário
function fnCheckToSubmit(oForm) {

	if(oForm.nome.value != "") {
		//pegando os valores do form
		sNomeAluno        = oForm.nome.value;
		fNotaTrabalho     = oForm.trabalho.value;
		fNotaExercicios   = oForm.exercicios.value;
		fNotaAvParcial    = oForm.avparcial.value;
		fNotaAvRegimental = oForm.avregimental.value;
		
		//calculando a média e inserindo na table.
		if(media()) if(insertTable()) oForm.reset();
		oForm.nome.focus();
	}
	else alert("Informe o nome do aluno(a).");
	return false;

}

//pegando os dados via prompt
function fnGetPrompt() {
	sTexto = prompt("Informe o nome e as notas separadas por pipe(|).\nex.: edy segura|78|65.5|85.5|90","");
	if(sTexto) {
		aDados = sTexto.split("|");
		
		//pegando os valores do prompt
		sNomeAluno        = aDados[0];
		fNotaTrabalho     = aDados[1];
		fNotaExercicios   = aDados[2];
		fNotaAvParcial    = aDados[3];
		fNotaAvRegimental = aDados[4];
		
		//calculando a mdia e inserindo na table.
		if(media()) insertTable();
	}
}

//insere uma nova linha na tabela
function insertTable() {
	//inserindo nova linha
	var oNewRow = oTbody.insertRow(oTbody.rows.length);
	
	//inserindo novas células
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = sNomeAluno;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = fNotaTrabalho;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = fNotaExercicios;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = fNotaAvParcial;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = fNotaAvRegimental;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = fMedia;
	oNewRow.insertCell(oNewRow.cells.length).innerHTML = 
	'<a href="javascript:void(0);" onclick="return fnExcluir(this)">Excluir</a>';
	
	return true;
}

//calculando a média.
function media() {
	
	fMedia = (fNotaTrabalho * 0.15)  + (fNotaExercicios * 0.1) +
	         (fNotaAvParcial * 0.25) + (fNotaAvRegimental * 0.5);
					 
	return true;
}

//excluir linha da tabela
function fnExcluir(oLink) {
	
	var oRow = oLink.parentNode.parentNode;
	var sNomeAluno = oRow.cells[0].innerHTML;
	
	if(confirm("Excluir a média do(a) aluno(a) " + sNomeAluno + "?")) {
		oTbody.deleteRow(oRow.rowIndex-1);
	}
	
	return false;
}

//ocultar ou exibir formulário
function fnShowHide(sState) {
	$('frmaluno').style.display = sState;
	if(sState == 'block') document.forms['frmaluno'].nome.focus();
}

//shortcut for document.getElementById()
function $(sElementId) {
  return document.getElementById(sElementId);
}
