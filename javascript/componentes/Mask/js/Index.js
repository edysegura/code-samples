/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Objeto Index
*/

var Index = {

	init: function() {
		Index.setMasks();
		Index.setMaskOnInput();
	},


	setMasks: function() {
		var oTelefone = $('telefone');
		var oDinheiro = $('dinheiro');
		var oData  = $('data');
		var oPeso  = $('peso');
		var oCEP   = $('cep');
		var oTeste = $('teste');

		var oMaskTelefone = new Mask("+## (##) ####-####");
		var oMaskDinheiro = new Mask("#,###.00", "number");
		var oMaskPeso  = new Mask("#.##0", "number");
		var oMaskDate  = new Mask("dd/mm/yyyy", "date");
		var oMaskCEP   = new Mask("#####-###");
		var oMaskTeste = new Mask("####/####");

		oMaskTelefone.attach(oTelefone);
		oMaskDinheiro.attach(oDinheiro);
		oMaskPeso.attach(oPeso);
		oMaskDate.attach(oData);
		oMaskCEP.attach(oCEP);
		oMaskTeste.attach(oTeste);
	},
	
	
	setMaskOnInput: function() {
		var oButton = document.getElementsByTagName('button')[0];
		var oInput = $('teste');
		
		oButton.onclick = function() {
			Index.setMask(oInput);
		};
		
	},
	
	
	setMask: function(oInput) {
		var sPattern = $('padrao').value;
		var sType = Index.choice();
		
		if(sPattern) {
			var oMask = new Mask(sPattern, sType);
			oMask.attach(oInput);
		}
	},
	
	
	choice: function() {
		var aInputs = document.getElementsByName('type');
		
		for(var i=0; i<aInputs.length; i++) {
			if(aInputs[i].checked) {
				return aInputs[i].value;
			}
		}
		
		return false;
	}

};

//inicialização
window.onload = Index.init;
