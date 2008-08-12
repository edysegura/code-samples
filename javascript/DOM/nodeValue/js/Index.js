/** 
 *
 * Exemplo do uso da propriedade nodeValue
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	//atributos
	textNode: 0,
	indexMsg: 0,
	
	//metodos
	init: function() {
		Index.getTextNode();
		Index.setMessages();
	},
	
	getTextNode: function() {
		this.textNode = document.getElementsByTagName('p')[1].firstChild;
	},
	
	setMessages: function() {
		window.setInterval(Index.showMessages, 2500);
	},
	
	showMessages: function() {
		var textNode = Index.textNode;
		var i = Index.indexMsg;
		textNode.nodeValue = Messages[!i ? Messages.length-1 : i];
		Index.indexMsg = ++i % Messages.length;
	}
	
};

//inicializacao
window.onload = Index.init;