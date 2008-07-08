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
		return [Index.getFormatDate(), (new Date()).toLocaleString()].join("<br />");
	},
	
	
	getFormatDate: function() {
		var result;
		
		var date  = new Date();         //Data completa.
		var day   = date.getDate();     //Dia do mês.
		var week  = date.getDay();      //Dia da semana.
		var month = date.getMonth();    //Mês representado em números.
		var year  = date.getFullYear(); //Ano representado em números.
		
		var weekLabel = [
			"Domingo", 
			"Segunda", 
			"Terça", 
			"Quarta", 
			"Quinta", 
			"Sexta", 
			"Sábado"
		];
		
		var monthLabel = [
			"Janeiro", 
			"Fevereiro", 
			"Março", 
			"Abril", 
			"Maio", 
			"Junho", 
			"Julho", 
			"Agosto", 
			"Setembro", 
			"Outubro", 
			"Novembro", 
			"Dezembro"
		];
		
		day    = (day < 10) ? "0" + day : day;
		result = weekLabel[week] + ", " + day + " de " + monthLabel[month] + " de " + year + ".";
		
		return result;
	}
	
};

//inicializacao
window.onload = Index.init;

