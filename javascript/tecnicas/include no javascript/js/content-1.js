/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Content 1
*/

var Content1 = {
	
	showContent: function() {
		Index.showContent('Script "content-1.js" incluído.');
	}
	
};

//inicialização
Event.addHandle(window, 'load', Content1.showContent);