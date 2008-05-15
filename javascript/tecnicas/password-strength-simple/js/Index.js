/**
 *
 * Força da Senha
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.setInputPassword();
	},
	
	
	setInputPassword: function() {
		var input = document.getElementById("password");
		
		input.onkeyup = function() {
			Index.showMessage(this.value);
		}
	},
	
	
	showMessage: function(password) {
		var message = document.getElementById("message");
		message.innerHTML = Pwd.getInfo(password);
		
		switch(Pwd.check(password)) {
			case -3:
				message.className = "muito-baixa";
			break;
			
			case -2:
				message.className = "baixa";
			break;
			
			case -1:
				message.className = "bom";
			break;
			
			case 0:
				message.className = "excelente";
			break;
		}
	}
	
}

//inicializacao
window.onload = Index.init;
