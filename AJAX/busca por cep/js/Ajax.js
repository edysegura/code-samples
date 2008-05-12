/* 
* JavaScript Document
* Autor: Edy Segura - edy@segura.eti.br
* Descrição: Objeto Literal AJAX
*
*           Instruções para uso do objeto
* ------------------------------------------------------------
*
* Ajax.run({
* 	method   : "POST",
* 	url      : "action.php",
* 	async    : true,
* 	response : "xml",
* 	callback : fnReferencia,
* 	callerro : fnReferenciaErro,
* 	params   : oDivContent,
* 	loading  : true,
* 	send     : urlEncodedValues
* });
* 
* ------------------------------------------------------------
*/

var Ajax = {
	
	createXmlHttp: function() {
		var oXmlHttp;
		
		//instanciando o objeto XMLHttpRequest
		try{ oXmlHttp = new XMLHttpRequest(); }
		catch(oErr1) {
			 try{ oXmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
			 catch(oErr2) {
					try{ oXmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
					catch(oErr3) { oXmlHttp = false; }
			 }
		}
		
		return oXmlHttp;
	},//fim createXmlHttp
	
	
	createLoading: function() {
		var oLoading = document.createElement('p');
				
		oLoading.className = "loading";
		oLoading.innerHTML = "Carregando...";
		document.body.appendChild(oLoading);
		
		return oLoading;
	},//fim createDivLoading
	
	
	run: function(oParams) {
		var oXmlHttp = Ajax.createXmlHttp();
		
		if(oXmlHttp) {
			var sMethod  = (oParams.method) ? oParams.method : "GET";
			var bAsync   = (typeof oParams.async == 'boolean') ? oParams.async : true;
			var oLoading = (oParams.loading) ? Ajax.createLoading() : false;
			
			oXmlHttp.open(sMethod, oParams.url, bAsync);
			oXmlHttp.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
			oXmlHttp.setRequestHeader("Pragma", "no-cache");
			
			if(sMethod.toUpperCase() == "POST") {
				oXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			}
			
			if(oParams.response == "xml" && oXmlHttp.overrideMimeType) {
				oXmlHttp.overrideMimeType('text/xml');
			}
			
			oXmlHttp.onreadystatechange = function() {
				if(oXmlHttp.readyState == 4) {
					//if(oXmlHttp.status == 200) {
						
						if(oParams.callback) {
							oParams.callback((oParams.response == "xml") ? oXmlHttp.responseXML : oXmlHttp.responseText, 
															 (oParams.params) ? oParams.params : 0);
						}
						
					/*}
					else {
						
						if(oParams.callerro) {
							oParams.callerro(oXmlHttp.status, oXmlHttp.statusText, 
															 (oParams.params) ? oParams.params : 0);
						}
						else {
							var sMessage = new String;
							
							sMessage += "HTTP Status: " + oXmlHttp.status + "\n";
							sMessage += "Message: ";
							sMessage += (oXmlHttp.statusText) ? oXmlHttp.statusText : "Unknown";
							
							alert(sMessage);
							
						}//fim else
					}//fim else*/
					
					if(oLoading) oLoading.parentNode.removeChild(oLoading);
				}//fim if
			};
			
			oXmlHttp.send((oParams.send) ? oParams.send : null);
			delete oXmlHttp;
		}
		else {
			alert("Sem suporte ao objeto XMLHttpRequest");
		}

	}//fim run

};//fim ajax


