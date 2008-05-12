// JavaScript Document

//variaveis globais
var vo_divs;

//evento intrseco onload
window.onload = function init()
{
	vo_divs = document.getElementById('frases').getElementsByTagName('div');
	for(var i=0; i<vo_divs.length; i++)
	{
		vo_divs[i].className="fraseHide";
		vo_divs[i].getElementsByTagName('a')[0].onclick=showFrase;
	}
}

//exibe o paragrafo dentro da div
function showFrase()
{
	for(var i=0; i<vo_divs.length; i++) vo_divs[i].className="fraseHide";	
	this.parentNode.className="fraseShow";
	return false;
}
