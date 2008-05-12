/**
 *
 * Objeto Literal Index que exemplifica o uso do
 * objeto Date e seus métodos
 * 
 * Autor: Edy Segura, edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.showDate();
	},//fim Init
	
	
	showDate: function() {
		
		var fnShowDate = function() {
			var oElementP = document.getElementsByTagName('p')[1];
			oElementP.innerHTML = Index.getDates();
		};
		
		window.setInterval(fnShowDate, 1000);
	},//fim showDate
	
	
	getDates: function() {
		return [Index.getFormatDate(), (new Date()).toLocaleString()].join("<br />");
	},//fim getDates
	
	
	getFormatDate: function() {
		var sResult;
		
		var oDate  = new Date();          //Data completa.
		var iDay   = oDate.getDate();     //Dia do mês.
		var iWeek  = oDate.getDay();      //Dia da semana.
		var iMonth = oDate.getMonth();    //Mês representado em números.
		var iYear  = oDate.getFullYear(); //Ano representado em números.
		
		var aWeek  = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
		var aMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
									"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
		
		iDay    = (iDay < 10) ? "0" + iDay : iDay;
		sResult = aWeek[iWeek] + ", " + iDay + " de " + aMonth[iMonth] + " de " + iYear + ".";
		
		return sResult;
	}//fim showDate
	
};//fim Index

//inicializacao
window.onload = Index.init;

