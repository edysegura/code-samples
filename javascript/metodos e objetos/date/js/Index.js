/**
 *
 * Objeto Literal Index que exemplifica o uso do
 * objeto Date e seus métodos
 * @author: Edy Segura, edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setShowDate();
	},
	
	
	setShowDate: function() {
		Index.showDate();
		window.setInterval(Index.showDate, 1000);
	},


	showDate: function() {
		var p = document.getElementsByTagName("p")[1];
		p.innerHTML = Index.getDates();
	},
	
	
	getDates: function() {
		return [
			DateUtil.getFormatDate(), 
			(new Date()).toLocaleString()
		]
		.join("<br />");
	}
	
};

//inicializacao
window.onload = Index.init;

