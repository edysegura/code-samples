/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Index = {
	
	init: function() {
		Index.setLimitToTextArea();
	},
	
	
	setLimitToTextArea: function() {
		var textarea = document.getElementById('mytext');
		Form.setLimitTextArea(textarea);
	}
	
};

//inicialização
window.onload = Index.init;