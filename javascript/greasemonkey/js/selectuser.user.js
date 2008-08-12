// ==UserScript==
// @name           Select User
// @namespace      http://edysegura.com
// @description    Selecionar o meu usuário no dotProject
// @include        http://www.liveware.com.br/dotproject/index.php?m=projects&a=reports&report_type=tasklogs
// ==/UserScript==


(function() {
    
		var oCombo = document.getElementsByName('log_userfilter')[0];
		var oInput = document.getElementsByName('log_start_date')[0];
		var oSDate = document.getElementsByName('start_date')[0];
		var sValue = 67;
		
		try {
			
			oInput.value = oInput.value.substring(0,6) + "01";
			oSDate.value = "01" + oSDate.value.substring(2);
			
			for(var i=0; i<oCombo.options.length; i++) {
				
				if(oCombo.options[i].value == sValue) {
					oCombo.options[i].selected = true;
					return;
				}
				
			}
		}
		catch(e){}
		
})();