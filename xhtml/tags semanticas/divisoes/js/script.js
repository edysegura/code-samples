// JavaScript Document

function init() {
	$("header").innerHTML = "<h1>Uso de Divisões</h1>";
	$("content").innerHTML = "<p>Exemplo do uso do elemento div, para definir escopos no documento.</p>";
}
window.onload=init;

//shortcut for document.getElementById()
function $(vs_id){return document.getElementById(vs_id);}