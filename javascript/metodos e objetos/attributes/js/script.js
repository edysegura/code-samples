// JavaScript Document

//função para inicialização
function init() {
	var vo_pa = document.getElementsByTagName('p')[0];
	var vo_ol = document.getElementsByTagName('ol')[0];
	//listagem dos atributos
	listAttributes(vo_pa,vo_ol);
}
window.onload=init;

//função para listar os atributos
function listAttributes(vo_pa,vo_ol) {
	vo_ol.innerHTML = ""; //limpa o contedo do elemento ol.
	for(var i=0; i<vo_pa.attributes.length; i++) {
		if(vo_pa.attributes[i].value!="null" && vo_pa.attributes[i].value!="") {
			var vo_li = document.createElement('li');
			vo_li.innerHTML = vo_pa.attributes[i].name.toLowerCase()+" = "+vo_pa.attributes[i].value;
			vo_ol.appendChild(vo_li);
		}
	}
}
