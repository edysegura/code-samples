/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: JavaScript para exemplificar o uso dos métodos charAt, charCodeAt e fromCharCode
*/

//função para inicialização
function init() {
	vo_obj = document.getElementsByTagName('p')[1];
	vs_str = vo_obj.innerHTML;
	vo_obj.innerHTML = vs_str + "<br />" + result();
}
window.onload=init;

//função para teste dos métodos charAt, charCodeAt e fromCharCode
function charCodeAtTest(pi_pos) {
  var vs_result = new String;
  vs_result += vs_str.charAt(pi_pos-1);
  vs_result += " = ";
  vs_result += vs_str.charCodeAt(pi_pos-1);
	vs_result += " = ";
	vs_result += String.fromCharCode(vs_str.charCodeAt(pi_pos-1));
  return vs_result;
}

//função para exibir o resultado
function result() {
	var vs_result = new String;
	vs_result += charCodeAtTest(5);
	vs_result += "&nbsp;|&nbsp;";
	vs_result += charCodeAtTest(4);
	vs_result += "&nbsp;|&nbsp;";
	vs_result += charCodeAtTest(25);
	return vs_result;
}
