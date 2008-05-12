// ==UserScript==
// @name           OI Tab
// @namespace      http://edysegura.com
// @description    Tab para o campo da OI
// @include        http://www.oiloja.com.br/wb/POi/*
// ==/UserScript==

(function() {
    
		var oInputDDD    = document.getElementById('para_ddd');
		var oInputNumero = document.getElementById('para_numero');
		var oInputNome   = document.getElementById('de_nome');
		var oTextArea    = document.getElementsByName('mensagem')[0];
		
		try {
			oInputDDD.tabIndex = "1";
			oInputDDD.value    = "35"
			
			oInputNumero.tabIndex = "2";
			oInputNumero.value    = "99999999";
			
			oInputNome.tabIndex = "3";
			oInputNome.value    = "Seu nome";
			
			oTextArea.tabIndex  = "4";
			oTextArea.focus();
		}
		catch(oErr) {
			//alert([oErr.name, oErr.message]);
		}
		
})();