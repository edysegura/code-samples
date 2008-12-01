/**
 *
 * Objeto Literal DateUtil
 * @author: Edy Segura, edy@segura.pro.br
 *
 */

var DateUtil = {
	
	getFormatDate: function() {
		var result;
		
		var date  = new Date();         // objeto do tipo date.
		var day   = date.getDate();     // dia do mês.
		var week  = date.getDay();      // dia da semana.
		var month = date.getMonth();    // mês representado em números.
		var year  = date.getFullYear(); // ano representado em números.
		
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
