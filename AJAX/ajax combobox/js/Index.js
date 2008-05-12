/**
 *
 * Script para uso do Ajax com combobox
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.setForm();
		Index.setComboUF();
	},//fim init
	
	
	setForm: function() {
		var oForm = document.forms[0];

		oForm.onsubmit = function() {
			return false;
		};

	},//fim setForm
	
	
	setComboUF: function() {
		var oComboUF = document.getElementById('uf');

		oComboUF.onchange = function() {
			Index.buscarCidades(this.value);
		};

	},//fim setComboUF
	
	
	buscarCidades: function(sUrl) {
		if(sUrl) {
			var oComboCidade = document.getElementById('cidade');
			var sUrl = "json-estados/" + sUrl.toLowerCase() + ".txt";
	
			//limpando combo cidade
			oComboCidade.options.length = 0;
			oComboCidade.options[0] = new Option("-- Aguarde --");
	
			Ajax.run({
				url      : sUrl,
				callback : Index.mostrarCidades,
				loading  : true,
				params   : oComboCidade
			});
	
		}//fim if
	},//fim buscarCidades
	
	
	mostrarCidades: function(sResponse, oComboCidade) {
		var aCidades = eval('(' + sResponse + ')');
		
		//limpando combo cidade
		oComboCidade.options.length = 0;
		Index.setCombo(oComboCidade);
		
		aCidades = aCidades.sort();
		
		//popula o select com a lista de cidades obtida
		for(var i=0; i<aCidades.length; i++) {
			aCidades[i] = unescape(aCidades[i]);
			oComboCidade.options[oComboCidade.options.length] = new Option(aCidades[i], aCidades[i]);
		}
	},//fim getCidades
	
	
	setCombo: function(oComboCidade) {
		oComboCidade.options[0] = new Option("Cidades", "", true, true);
		oComboCidade.options[0].className = "title";
	}//fim setCombo
	
};//fim Index

//inicialização
window.onload = Index.init;

