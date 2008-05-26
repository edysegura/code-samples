/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: funções para adição e remoção de funções dinâmicamente
*/

//objeto da página index.html
var Index = {
	
	//atributos
	nome  : "Edy Segura",
	sexo  : "Masculino",
	idade : "23 Anos",
	
	//métodos
	getNome: function() {
		alert(Index.nome);
	},
	
	getSexo: function() {
		alert(Index.sexo);
	},
	
	getIdade: function() {
		alert(Index.idade);
	},
	
	withParams: function(oJson) {
		alert([oJson.nome, oJson.sobrenome].join("\n"));
	},
	
	resetChecks: function(oChecks) {
		for(var i=0; i<oChecks.length; i++) {
			oChecks[i].checked = false;
		}
	},
	
	addEventos: function(bAdd) {
		var oP = document.getElementsByTagName('p')[1];
		var oChecks = document.getElementsByName('eventos');
		var oLog = $('log');
		
		oLog.value = "";
		
		for(var i=0; i<oChecks.length; i++) {
			
			if(bAdd && oChecks[i].checked && oChecks[i].id == "event4") {
				Event.addHandle(oP, 'click', Event.getFunction(Index.withParams, eval('(' + oChecks[i].value + ')')));
				oLog.value += "Evento Index.withParams adicionado.\n";
				continue;
			}
			else if(oChecks[i].checked && oChecks[i].id == "event4") {
				oLog.value += "Não é possivel remover o evento Index.withParams.\n";
				continue;
			}
			
			if(bAdd && oChecks[i].checked) {
				Event.addHandle(oP, 'click', eval(oChecks[i].value));
				oLog.value += "Evento " + oChecks[i].value + " adicionado.\n";
			}
			else if(oChecks[i].checked) {
				Event.removeHandle(oP, 'click', eval(oChecks[i].value));
				oLog.value += "Evento " + oChecks[i].value + " removido.\n";
			}
		
		}//fim do for
		
		Index.resetChecks(oChecks);
		
	}//fim addEventos
}//fim Index

