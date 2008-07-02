/**
 *
 * Script para contagem regressiva
 * @author: Edy Segura, edy@segura.pro.br
 *
 */

var Index = {

	nowDate: new Date("March 20, 2009"),
	endDate: new Date("March 22, 2009"),
	
	
	init: function() {
		window.setInterval(Index.calculateDiffDate, 1000);
	},
	
	
	calculateDiffDate: function() {
		var diffDate = Index.endDate.getTime() - Index.nowDate.getTime();
		Index.setSpansDate(diffDate);
		Index.nowDate.setSeconds(Index.nowDate.getSeconds() + 1);
	},
	
	
	setSpansDate: function(diffDate) {
		var days   = Math.floor(diffDate / (1000 * 60 * 60 * 24)) + 1;
		var date   = new Date(diffDate);
		var day    = document.getElementById("day");
		var hour   = document.getElementById("hour");
		var minute = document.getElementById("minute");
		var second = document.getElementById("second");
		
		day.innerHTML    = days;
		hour.innerHTML   = date.getHours();
		minute.innerHTML = date.getMinutes();
		second.innerHTML = date.getSeconds();
		//console.info("%d dias, %d horas, %d minutos e %d segundos", days, date.getHours(), date.getMinutes(), date.getSeconds());
	}
	
}

//inicializacao
window.onload = Index.init;
