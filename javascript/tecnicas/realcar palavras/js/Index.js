/**
 *
 * JavaScript para apresentação da técnica de realçar palavras
 * @author Edy Segura, edy@segura.pro.br
 *
 */
var Index = {
	
	init: function() {
		Index.setForm();
	},
	
	setForm: function() {
		var form = document.getElementById('frmrealcar');
		
		if(form) {
			form.onsubmit = function() {
				if(form.search) {
					Index.highlight(form.search.value);
				}
				return false;
			}
		}
		else {
			alert('form#frmrealcar não foi encontrado!');
		}
		
		if(form.search) {
			form.search.onkeyup = function() {
				Index.highlight(this.value);
			}
			form.search.value = "";
			form.search.focus();
		}
		else {
			alert('input#search não foi encontrado');
		}
	},
	
	highlight: function(chars) {
		var divContent = document.getElementById('content');
		
		if(divContent) {
			var contentString = divContent.innerHTML;
			var re = new RegExp("(" + chars + ")", "gi");
			
			contentString = contentString.replace(/<\/?span>/gi, "");
			
			if(chars != "" && chars != ".") {
				contentString = contentString.replace(re, "<span>$1</span>");
			}
			
			divContent.innerHTML = contentString;
		}
		else {
			alert('div#content não foi encontrado!');	
		}
	}
	
}

//inicialização
window.onload = Index.init;