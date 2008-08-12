/**
 *
 * Object Literal for page Index
 * @author Edy Segura, edy@segura.pro.br
 * 
 */
 
var Index = {
	
	flag: "TransacaoB",
	
	
	init: function() {
		Index.setButton();
	},
	
	
	setButton: function() {
		var buttonEnviarTransacao = document.getElementById("enviarTransacoes");
		
		buttonEnviarTransacao.onclick = function() {
			Index.flag = (Index.flag == "TransacaoA") ? "TransacaoB" : 
				(Index.flag == "TransacaoB") ? "TransacaoC" : "TransacaoA";
			Index.showTransaction(eval("(" + Index.flag + ")"));
		}
	},
	
	
	showTransaction: function(transaction) {
		if(transaction) {
			var comerciante = document.getElementById("comerciante");
			var saldo = document.getElementById("saldo");
			
			comerciante.innerHTML = transaction.comerciante;
			saldo.innerHTML = transaction.saldo;
			
			Index.showTranasctionLines(transaction.list);
		}
	},
	
	
	showTranasctionLines: function(transactionList) {
		var tableTransacoes = document.getElementById("lista-transacoes");
		var tbody = document.createElement("tbody");
		var tr, td;
		
		for(var i=0; i<transactionList.length; i++) {
			var list = transactionList[i];
			tr = tbody.insertRow(tbody.rows.length);
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.nome;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.data;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.tipo;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.valor;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.placa;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.km;
			
			td = tr.insertCell(tr.cells.length);
			td.innerHTML = list.litros; 
		}
		
		if(!transactionList.length) {
			tr = tbody.insertRow(tbody.rows.length);
			td = tr.insertCell(tr.cells.length);
			td.colSpan = 7;
			td.innerHTML = "Nenhuma transação foi retornada!";
		}
		
		var firstTbody = tableTransacoes.tBodies[0];
		firstTbody.parentNode.removeChild(firstTbody);
		tableTransacoes.appendChild(tbody);
	}
	
};

//inicialization
window.onload = Index.init;