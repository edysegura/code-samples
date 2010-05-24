/**
 *
 * Objeto Literal Index.js para uso da metodologia Ajax
 * com JSON
 * @author Edy Segura, edy@segura.pro.br
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
		var cep = form.cep.value.replace(/\D/g, "");
		
		if(cep.length != 8) {
			alert("Preencha corretamente seu CEP."); 
			return form.cep.focus();
		}
		
		form.rua.value = "Aguarde, buscando endereço...";
		
		Ajax.request({
			url      : "json/cep" + cep + ".txt",
			params   : form,
			callback : Index.preencherCampos,
			update   : true
		});
	},

	preencherCampos: function(response, form) {
		var address = eval('(' + response + ')');
		form.rua.value    = address.logradouro;
		form.bairro.value = address.bairro;
		form.cidade.value = address.cidade;
		form.estado.value = address.estado;
		form.numero.focus();
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
	
	fastCEP: function(cep) {
		var form = document.forms['frmCEP'];
		form.reset();
		form.cep.value = cep;
	}

};

//inicialização
window.onload = Index.init;
