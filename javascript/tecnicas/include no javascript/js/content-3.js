/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Content 3
*/

var Content3 = {
	
	showContent: function() {
		Index.showContent('Script "content-3.js" incluído.');
	}
	
};

//inicialização
Event.addHandle(window, 'load', Content3.showContent);