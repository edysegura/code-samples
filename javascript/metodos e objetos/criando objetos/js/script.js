// JavaScript Document

function init() {
	var vo_table=document.getElementsByTagName('table')[0];
	//Monta a tabela
	buildTable(vo_table);
}
window.onload=init;

//Objeto cls_aluno
function cls_aluno() {
	//Atributos
	this.nome   = (arguments[0])?arguments[0]:"Sem Nome";
	this.notaB1 = (arguments[1])?arguments[1]:0.0;
	this.notaB2 = (arguments[2])?arguments[2]:0.0;
	this.notaB3 = (arguments[3])?arguments[3]:0.0;
	this.notaB4 = (arguments[4])?arguments[4]:0.0;
	//Método média
	this.media=function() {
		return (this.notaB1+this.notaB2+this.notaB3+this.notaB4)/4;
	};
	//Método situação
	this.situacao=function() {
		return (this.media()>=70)?"Aprovado":(this.media()>=50&&this.media()<70)?"Em recuperação":"Reprovado";
	};
}

//JSON
vo_alunos = [
	new cls_aluno("Edy Segura",98,87,77,90),
	new cls_aluno("Lidy Bernardes",80,88,90,95),
	new cls_aluno("João Mendes",50,50,60,55),
	new cls_aluno()
];

//Exibe o resultado em uma tabela
function buildTable(vo_table) {
	//Variáveis locais
	var vo_tbody=vo_table.tBodies[0],vo_row;
	//Deleta a primeira linha do tbody.
	vo_tbody.deleteRow(0);
	//Insere os alunos na tabela.
	for(var i=0;i<vo_alunos.length;i++) {
		//Inserção da linha
		var vo_row=vo_tbody.insertRow(vo_tbody.rows.length);
		//Inserção do elemento th para o nome do aluno.
		vo_row.appendChild(document.createElement('th'));
		vo_row.cells[0].innerHTML=vo_alunos[i].nome;
		//Notas, Média e Situação do aluno.
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].notaB1;
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].notaB2;
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].notaB3;
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].notaB4;
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].media().toFixed(1);
		vo_row.insertCell(vo_row.cells.length).innerHTML = vo_alunos[i].situacao();
	}	
}
