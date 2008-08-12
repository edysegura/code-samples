/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Content 2
*/

var Content2 = {
	
	showContent: function() {
		Index.showContent('Script "content-2.js" incluído.');
	}
	
};

//inicialização
Event.addHandle(window, 'load', Content2.showContent);