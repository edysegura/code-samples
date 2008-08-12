/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Adicionando bordas aredondas a div#box
*/

var Index = {

	init: function() {
		//aplica cantos arredondados ao elemento com id box
		Nifty("div#box","big fixed-height");
	}

};

//inicialização
window.onload = Index.init;
