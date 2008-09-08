/* JavaScript Document
Autor: Edy Segura - infoedy@gmail.com
Descrição: Modulariação do AJAX
*/

var Ajax = {
	
	createXmlHttp: function() {
		var oXmlHttp;
		
		//Instanciando o objeto XMLHttpRequest
		try{ oXmlHttp = new XMLHttpRequest(); }
		catch(oErr1) {
			 try{ oXmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
			 catch(oErr2) {
					try{ oXmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
					catch(oErr3) { oXmlHttp = false; }
			 }
		}
		
		return oXmlHttp;
	},
	
	
	run: function(oParams) {
		var oXmlHttp = Ajax.createXmlHttp();
		
		if(oXmlHttp) {
			var sMethod = (oParams.method) ? oParams.method : "GET";
			
			oXmlHttp.open(sMethod, oParams.url, true);
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
					if(oXmlHttp.status == 200) {
						
						if(oParams.callBack) {
							oParams.callBack((oParams.response == "xml") ? oXmlHttp.responseXML : oXmlHttp.responseText, 
															 (oParams.params) ? oParams.params : 0);
						}
						
					}
					else {
						
						if(oParams.callErro) {
							oParams.callErro(oXmlHttp.status, (oXmlHttp.statusText) ? oXmlHttp.statusText : "Unknown", 
															 (oParams.params) ? oParams.params : 0);
						}
						else {
							var sMessage = new String;
							
							sMessage += "HTTP Status: " + oXmlHttp.status + "\n";
							sMessage += "Message: " + oXmlHttp.statusText;
							sMessage += (oXmlHttp.statusText) ? oXmlHttp.statusText : "Unknown";
							
							alert(sMessage);
							
						}//fim else
						
					}//fim else
				}//fim if
			};
			
			try {
				oXmlHttp.send((oParams.send) ? oParams.send : null);
			}
			catch(oErr) {
				alert(oErr.description);
			}
			
			delete oXmlHttp;
		}
		else
			alert("Sem suporte ao objeto XMLHttpRequest");

	}//fim run

}//fim ajax


