/**
 *
 * Script para uso da metodologia Ajax em combobox
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setForm();
		Index.setComboUF();
	},
	
	
	setForm: function() {
		var form = document.forms[0];

		form.onsubmit = function() {
			return false;
		};

	},
	
	
	setComboUF: function() {
		var comboUF = document.getElementById('uf');

		comboUF.onchange = function() {
			Index.buscarCidades(this.value);
		};

	},
	
	
	buscarCidades: function(estado) {
		var comboCidade = document.getElementById('cidade');
		
		if(estado) {
			var estadoUrl   = "json-estados/" + estado.toLowerCase() + ".txt";
	
			//limpando combo cidade
			comboCidade.options.length = 0;
			comboCidade.options[0] = new Option("-- Aguarde --");
	
			Ajax.request({
				url      : estadoUrl,
				callback : Index.mostrarCidades,
				loading  : true,
				params   : comboCidade,
				update   : true
			});
		}
		else {
			comboCidade.options.length = 0;
			comboCidade.options[0] = new Option("-- Selecione o estado --");
		}
	},
	
	
	mostrarCidades: function(response, comboCidade) {
		var cidades = eval('(' + response + ')');
		
		//limpando combo cidade
		comboCidade.options.length = 0;
		Index.setCombo(comboCidade);
		
		cidades = cidades.sort();
		
		//popula o select com a lista de cidades obtida
		for(var i=0; i<cidades.length; i++) {
			cidades[i] = unescape(cidades[i]);
			comboCidade.options[comboCidade.options.length] = new Option(cidades[i], cidades[i]);
		}
	},
	
	
	setCombo: function(comboCidade) {
		comboCidade.options[0] = new Option("Cidades", "", true, true);
		comboCidade.options[0].className = "title";
	}
	
};

//inicializacao
window.onload = Index.init;
