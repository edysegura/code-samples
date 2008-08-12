/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Objeto Form
Referência: Livro JavaScript for Web Developer, página do livro 339, página do PDF 367.
*/

var Form = {
	
	focusOnFirst: function() {
		if(document.forms.length > 0) {
			var oForm = document.forms[0];
			
			for(var i=0; i<oForm.elements.length; i++) {
				var oField = oForm.elements[i];
				
				if(typeof oField.type != "undefined" && oField.type != "hidden") {
					if(!oField.value) oField.focus();
					else continue;
					return;
				}
				
			}
		}
	},
	

	tabForward: function(oField) {
		var oForm = oField.form;
		
		if(oForm.elements[oForm.elements.length-1] != oField && 
			 oField.value.length == oField.getAttribute("maxlength")) {
			
			for(var i=0; i<oForm.elements.length; i++) {
				if(oForm.elements[i] == oField) {
					for(var j=i+1; j<oForm.elements.length; j++) {
						var oElement = oForm.elements[j];

						if(typeof oElement.type != "undefined" && oElement.type != "hidden") {
							oForm.elements[j].focus();
							return;
						}
						
					}
				}
			}
		}
	}
	
};

