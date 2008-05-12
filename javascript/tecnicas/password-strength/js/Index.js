/**
 *
 * Força da Senha
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setCheckToSubmit();
	},
	
	
	setCheckToSubmit: function() {
		var form = document.forms[0];
		
		form.onsubmit = function() {
			if(Index.checkPassword(this.senha.value)) {
				Index.setMessage({
					message   : "Senha válida!",
					className : "valid"
				});
			}
			else {
				Index.setMessage({
					message   : "Essa senha não é válida!",
					className : "no-valid"
				});
			}
			return false;
		};
	},
	
	
	setMessage: function(params) {
		var span = document.getElementById("message");
		span.innerHTML = params.message;
		span.className = params.className;
	},
	
	
	checkPassword: function(senha) {
		var result = true;
		var checks = [];
		
		if(senha != "") {
			checks["digito"]  = /\d+/;
			checks["noAlpha"] = /\W+/;
			checks["az"]      = /[a-z]+/;
			checks["AZ"]      = /[A-Z]+/;
			checks["numChar"] = /.{6,12}/;
			
			for(var pattern in checks) {
				if(!checks[pattern].test(senha)) {
					result = false;
					break;
				}
			}
		}
		else {
			result = false;
		}
		
		return result;
	}
	
};

//inicializacao
window.onload = Index.init;