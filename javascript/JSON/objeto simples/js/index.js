/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Exemplo simples de JSON - http://www.json.org
*/

var Index = {

	init: function() {
		Index.getPropertys();
	},


	getPropertys: function() {
		var oParagrafo = document.createElement('p');
		
		oParagrafo.innerHTML = (Pessoa.nome + " / " + Pessoa.sexo + " / " + Pessoa['profissão']);
		document.body.appendChild(oParagrafo);
	}

};

//inicialização
window.onload = Index.init;
