// JavaScript Document

window.onload = function init()
{
	var vo_paragrafo = document.body.getElementsByTagName('p')[1];
	var vs_innerText = vo_paragrafo.innerHTML;
	var vs_escape    = escape(vs_innerText);
	
	vo_paragrafo.innerHTML  = "Usando escape(): "+ vs_escape +"<br />";
	vo_paragrafo.innerHTML += "Usando unescape(): "+ unescape(vs_escape);
}