/**
 *
 * Objeto para literal para manipulacao da pagina index.html
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {

	init: function() {
		Index.setButton();
		Index.setForm();
	},//fim init

	
	setButton: function() {
		$("input[type='button']").click(function(){
			$.get("actions/detranNet.action.php",
			  { cnh: $("#cnh").val(), tipocnh: "1" },
			  Index.showValues
			);
		});
		
		$("#msg").ajaxStart(function(){
		  $(this).text("Carregando informações...");
			$("#nome,#cnh,#uf,#pontos,#msg").text("Buscando informações...");
		});
	},
	
	
	showValues: function(json) {
		var oDados = eval("(" + json + ")");
		$("#nome").text(oDados.nome ? oDados.nome : "");
		$("#cnh").text(oDados.cnh ? oDados.cnh : "");
		$("#uf").text(oDados.uf ? oDados.uf : "");
		$("#pontos").text(oDados.pontos ? oDados.pontos : "");
		$("#msg").text(oDados.msg ? oDados.msg : "");
	},
	
	
	setForm: function() {
		var oForm = document.forms[0];
		oForm.onsubmit = function() {
			return false;
		};
	}
	
};//fim Index

//inicializacao
$(function(){ Index.init(); });


