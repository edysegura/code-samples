/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Script para busca do endereço por CEP
*/

var Index = {

	init: function() {
		Index.setForm();
		Index.setButton();
		Index.setFastCEP();
	},//fim init

	
	setForm: function() {
		var oForm = document.forms['frmCEP'];
		
		oForm.onsubmit = function() {
			return false;
		};

	},//fim setForm
	
	
	buscarEndereco: function(oForm) {
		//remove qualquer coisa q não seja um digito.
		var iCEP = oForm.cep.value.replace(/\D/g, "");

		if(iCEP.length != 8) {
			alert("Preencha corretamente seu CEP."); 
			return oForm.cep.focus();
		}

		oForm.rua.value = "Aguarde, buscando endereço...";

		Ajax.run({
			url      : "json/cep" + iCEP + ".txt",
			params   : oForm,
			callback : Index.preencherCampos
		});

	},//fim fasda


	preencherCampos: function(sResponse, oForm) {
		var oEndereco = eval('(' + sResponse + ')');

		oForm.rua.value    = oEndereco.logradouro;
		oForm.bairro.value = oEndereco.bairro;
		oForm.cidade.value = oEndereco.cidade;
		oForm.estado.value = oEndereco.estado;
		oForm.numero.focus();

	},//fim preencherCampos
	
	
	setFastCEP: function() {
		var oSpans = document.getElementsByTagName('span');
		
		for(var i=0; i<oSpans.length; i++) {
			oSpans[i].onclick = function() {
				Index.fastCEP(this.innerHTML);
			};
		}
		
	},//fim setFastCep
	
	
	setButton: function() {
		var oButton = document.getElementsByTagName('button')[0];
		
		oButton.onclick = function() {
			Index.buscarEndereco(this.form);
		};
		
	},//fim setButton
	
	
	fastCEP: function(sCep) {
		var oForm = document.forms['frmCEP'];
		
		oForm.reset();
		oForm.cep.value = sCep;
	}//fim fastSetCEP

};//fim Index

//inicialização
window.onload = Index.init;
