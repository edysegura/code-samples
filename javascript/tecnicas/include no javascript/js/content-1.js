/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Content 1
*/

var Content1 = {
	
	showContent: function() {
		Index.showContent('Script "content-1.js" incluído.');
	}
	
};

//inicialização
Event.addHandle(window, 'load', Content1.showContent);