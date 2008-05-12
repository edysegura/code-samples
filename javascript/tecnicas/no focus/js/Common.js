/**
 * 
 * Objeto Common com o método noFocus para tirar o outline dos elementos
 * @autor: Edy Segura - edy@segura.eti.br
 *
 */

var Common = {

	noFocus: function(bNoFocus, oParentNode) {
		var oElements  = (document.getElementById(oParentNode) || document.body).getElementsByTagName('*');
		var rePattern  = /button|submit|reset|image|checkbox|radio/;
		var fnSetBlur  = new Function("if(this.blur)this.blur();");
		var fnSetFocus = new Function("if(this.focus)this.focus();");
		
		bNoFocus = (typeof(bNoFocus) != "boolean") ? true : bNoFocus;
		
		for(var i=0; i<oElements.length; i++) {
			var oElement = oElements[i];
			
			switch(oElement.nodeName.toLowerCase()) {
				case 'a'      :
				case 'button' :
					oElement.onfocus = (bNoFocus) ? fnSetBlur : fnSetFocus;
				break;
				
				case 'input'  :
					if(rePattern.test(oElement.type)) {
						oElement.onfocus = (bNoFocus) ? fnSetBlur : fnSetFocus;
					}
				break;
				
			}//fim do switch
		}//fim do for
	},//fim noFocus

};//fim Common

