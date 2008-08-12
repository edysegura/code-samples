/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Content 2
*/

var Content2 = {
	
	showContent: function() {
		Index.showContent('Script "content-2.js" incluído.');
	}
	
};

//inicialização
Event.addHandle(window, 'load', Content2.showContent);