/**
  *
  * Script para busca por cep com Ajax
  * @author: Edy Segura - edy@segura.pro.br
  *
  */

var Index = {

	init: function() {
		Index.setForm();
		Index.setButton();
		Index.setFastCEP();
	},

	
	setForm: function() {
		var form = document.forms['frmCEP'];
		
		form.onsubmit = function() {
			return false;
		};

	},
	
	
	buscarEndereco: function(form) {
		//remove qualquer coisa q não seja um digito.
		var CEP = form.cep.value.replace(/\D/g, "");

		if(CEP.length != 8) {
			alert("Preencha corretamente seu CEP."); 
			return form.cep.focus();
		}

		Ajax.request({
			url      : "cep/endereco.php?cep=" + CEP,
			params   : form,
			callback : Index.preencherCampos,
			callerro : Index.limparCampo
		});
		
		Index.disabledCampos(form, true);
	},


	preencherCampos: function(response, form) {
		//eval abaixo resulta em var resultadoCEP = {...}
		try {
			eval(response);
		}
		catch(e) {
			Index.disabledCampos(form, false);
		}
		
		
		form.rua.value    = unescape(resultadoCEP.logradouro);
		form.bairro.value = unescape(resultadoCEP.bairro);
		form.cidade.value = unescape(resultadoCEP.cidade);
		form.estado.value = unescape(resultadoCEP.uf);
		
		form.numero.focus();
		Index.disabledCampos(form, false);
	},
	
	
	limparCampo: function(httpStatus, message, form) {
		Index.disabledCampos(form, false);
		form.rua.focus();
	},
	
	
	disabledCampos: function(form, disabled) {
		with(form) {
			rua.disabled = disabled;
			bairro.disabled = disabled;
			cidade.disabled = disabled;
			estado.disabled = disabled;
			
			rua.value = (disabled) ? "aguarde, carregando..." : (rua.value) ? rua.value : "";
			bairro.value = (disabled) ? "aguarde, carregando..." : (bairro.value) ? bairro.value : "";
			cidade.value = (disabled) ? "aguarde, carregando..." : (cidade.value) ? cidade.value : "";
			estado.value = (disabled) ? "aguarde, carregando..." : (estado.value) ? estado.value : "";
		}
	},
	
	
	setFastCEP: function() {
		var spans = document.getElementsByTagName('span');
		
		for(var i=0; i<spans.length; i++) {
			spans[i].onclick = function() {
				Index.fastCEP(this.innerHTML);
			};
		}
		
	},
	
	
	setButton: function() {
		var button = document.getElementsByTagName('button')[0];
		
		button.onclick = function() {
			Index.buscarEndereco(this.form);
		};
		
	},
	
	
	fastCEP: function(sCep) {
		var form = document.forms['frmCEP'];
		
		form.reset();
		form.cep.value = sCep;
	}

};

//inicializacao
window.onload = Index.init;
