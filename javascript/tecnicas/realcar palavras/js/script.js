// JavaScript Document

function init()
{
	document.forms['frmrealcar'].palavra.value="";
	document.forms['frmrealcar'].palavra.focus();
}
window.onload=init;

function realcar(vo_form)
{
	vs_content=$('content').innerHTML;
	vs_content=vs_content.replace(/<\/?span>/gi,"");
	//validação do campo
	if(vo_form.palavra.value!=""&&vo_form.palavra.value!=".")
		vs_content=eval("vs_content.replace(/("+vo_form.palavra.value+")/gi,'<span>$1</span>');");
	//exibindo o resultado.
	$('content').innerHTML=vs_content;
	//init();
	return false;
}

//framework para document.getElementById
function $(vs_id){return document.getElementById(vs_id);}