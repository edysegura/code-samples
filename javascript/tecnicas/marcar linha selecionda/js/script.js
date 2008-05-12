// JavaScript Document

function init() {
	//stripedTable
	stripedTable(document.getElementsByTagName('table')[0]);
	setAllTR();
}
window.onload=init;

//pegando todas as table rows
function setAllTR() {
	var vo_trs=document.getElementsByTagName('table')[0].tBodies[0].getElementsByTagName('tr');
	for(var i=0;i<vo_trs.length;i++) {
		vo_trs[i].onclick=setClassTR;
		vo_trs[i].onmouseover=setClassOver;
		vo_trs[i].onmouseout=removeClassOver;
	}
}

//adiciona ou remove a cor na tr
function setClassTR(e) {
	var vo_source=getSource(e);
	var vo_check=this.cells[0].firstChild;
	var vo_tr=this;
	vo_check.checked=(vo_source.nodeName.toLowerCase()=="input")?vo_source.checked:!vo_check.checked;
	if(vo_check.checked) vo_tr.className+=" selected";
	else vo_tr.className=vo_tr.className.replace(new RegExp(" selected\\b"),"");
}

//muda a cor no evento over
function setClassOver() {
	this.className+=" over";
}

//retorna a cor no envento out
function removeClassOver() {
	this.className=this.className.replace(new RegExp(" over\\b"),"");
}
//-------------------------------------------------------------------------------------------------

/*
Autor: Edy Segura (edy@segura.eti.br)
Descr: stripedTable ou zebra table
*/
function stripedTable(vo_table) {
	//verifica se o parametro é um objeto ou uma string
	var vo_table=(typeof vo_table=="string")?($(vo_table))?$(vo_table):vo_table:vo_table;
	//verifica se a tabela existe.
	if(typeof vo_table=="object" && vo_table.nodeName.toLowerCase()=="table") {
		for(var i=0;i<vo_table.tBodies.length;i++) {
			var vo_rows=vo_table.tBodies[i].rows;
			for(var j=0;j<vo_rows.length;j++) vo_rows[j].className=(j%2)?"normal":"alternada";
		}
	}
	else alert("Table \""+vo_table+"\" não encontrada!");
}

//-------------------------------------------------------------------------------------------------

/*
Autor: Edy Segura (edy@segura.eti.br)
Descr: retorna o elemento em que está ocorrendo o evento.
*/
function getSource(e) {
	if(typeof(e)=='undefined') var e=window.event;
	var vo_source=(typeof e.target!='undefined')?e.target:
	              (typeof e.srcElement!='undefined')?e.srcElement:false;
	//necessário para os navegadores safari e konqueror
	if(vo_source.nodeType==3) vo_source=vo_source.parentNode;
	return vo_source;
}
//-------------------------------------------------------------------------------------------------

//shortcut para document.getElementById()
function $(vs_id){return document.getElementById(vs_id);}

