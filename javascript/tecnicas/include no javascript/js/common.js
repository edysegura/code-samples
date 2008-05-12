/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Objeto Literal Common
*/

var Common = {

	includeJS: function(sSource) {
		
		if(!Common.checkExistScript(sSource)) {
			var oScript  = document.createElement('script');
			
			oScript.type = "text/javascript";
			oScript.src  = sSource; //+ "?" + (new Date()).getTime();
			document.getElementsByTagName('head')[0].appendChild(oScript);
		}//fim if

	},//fim includeJs
	
	
	checkExistScript: function(sSource) {
		var oScripts  = document.getElementsByTagName('script');
		var rePattern = new RegExp(sSource, "g");
		
		for(var i=0; i<oScripts.length; i++) {
			if(rePattern.test(oScripts[i].src)) {
				return true;
			}
		}//fim for
	
		return false;
	}//fim checkExistScript

};//fim Common

