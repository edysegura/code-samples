// JavaScript Document

window.onload = function init()
{
	vo_anchor = document.getElementsByTagName('a')[0];
	vo_anchor.onclick = function()
	{
		document.location.replace("paginas/next.html");
		return false;
	}
}