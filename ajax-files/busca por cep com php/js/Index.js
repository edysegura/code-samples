/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Script para busca do endereço por CEP
*/

var Index = {

	init: function() {
		Index.setForm();
		Index.setBuscarEndereco();
		Index.setFastCEP();
	},//fim init

	
	setForm: function() {
		var oForm = document.forms['frmCEP'];
		
		oForm.onsubmit = function() {
			return false;
		};

	},//fim setForm
	
	
	setFastCEP: function() {
		var oSpans = document.getElementsByTagName('span');
		
		for(var i=0; i<oSpans.length; i++) {
			oSpans[i].onclick = function() {
				Index.fastCEP(this.innerHTML);
			};
		}
		
	},//fim setFastCep
	
	
	setBuscarEndereco: function() {
		var oButton = document.getElementsByTagName('button')[0];
		var oCEPInput = document.getElementById('cep');
		
		var fnBuscarEndereco = function() {
			Index.buscarEndereco(this.form);
		};
		
		oButton.onclick = fnBuscarEndereco;
		oCEPInput.onblur = fnBuscarEndereco;
		
	},//fim setButton
	
	
	buscarEndereco: function(oForm) {
		//remove qualquer coisa q não seja um digito.
		var iCEP = oForm.cep.value.replace(/\D/g, "");

		if(iCEP.length != 8) {
			alert("Preencha corretamente seu CEP."); 
			return oForm.cep.focus();
		}

		Ajax.run({
			url      : "cep/endereco.php?cep=" + iCEP,
			params   : oForm,
			callBack : Index.preencherCampos,
			callErro : Index.limparCampo
		});
		
		Index.disabledCampos(oForm, true);

	},//fim fasda


	preencherCampos: function(sResponse, oForm) {
		//eval abaixo resulta em var resultadoCEP = {...}
		eval(sResponse);
		
		oForm.rua.value    = unescape(resultadoCEP.logradouro);
		oForm.bairro.value = unescape(resultadoCEP.bairro);
		oForm.cidade.value = unescape(resultadoCEP.cidade);
		oForm.estado.value = unescape(resultadoCEP.uf);
		
		Index.disabledCampos(oForm, false);
	},//fim preencherCampos
	
	
	limparCampo: function(iHttpStatus, sMessage, oForm) {
		alert(["HTTP Status: " + iHttpStatus, "Message: " + sMessage].join("\n"))
		Index.disabledCampos(oForm, false);
	},//fim limparCampo
	
	
	disabledCampos: function(oForm, bDisabled) {
		with(oForm) {
			
			rua.disabled = 
			bairro.disabled = 
			cidade.disabled = 
			estado.disabled = bDisabled;
			
			if(bDisabled) {
				rua.value = 
				bairro.value =
				cidade.value =
				estado.value = "Carregando...";
			}
			
		}//fim with
	},//fim disabledCampos
	
	
	fastCEP: function(sCep) {
		var oForm = document.forms['frmCEP'];
		
		oForm.reset();
		oForm.cep.value = sCep;
	}//fim fastSetCEP

};//fim Index

//inicialização
window.onload = Index.init;
