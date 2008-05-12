/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Content 3
*/

var Content3 = {
	
	showContent: function() {
		Index.showContent('Script "content-3.js" incluído.');
	}
	
};//fim Content1

//inicialização
Event.addHandle(window, 'load', Content3.showContent);