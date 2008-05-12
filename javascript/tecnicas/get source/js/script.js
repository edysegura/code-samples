// JavaScript Document

function init() {
	var vo_span=document.getElementsByTagName('fieldset')[0].getElementsByTagName('span')[0];
	//sem o parametro (e) na function não funciona no firefox.
	document.onmousemove=function(e){vo_span.innerHTML=getSource(e).nodeName;}
}
window.onload=init;

//retornar o elemento em que está ocorrendo o evento
function getSource(e) {
	if(typeof(e)=='undefined') var e=window.event;
	var vo_source=(typeof e.target!='undefined')?e.target:
	              (typeof e.srcElement!='undefined')?e.srcElement:false;
	//necessário para os navegadores safari e konqueror
	if(vo_source.nodeType==3) vo_source=vo_source.parentNode;
	return vo_source;
}
