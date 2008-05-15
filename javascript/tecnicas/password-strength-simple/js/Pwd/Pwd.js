/**
 *
 * Força da Senha
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Pwd = {

	getInfo: function(password) {
		return Pwd.getMessage(Pwd.check(password));
	},
	
	
	check: function(password) {
		var points = 0;
		
		if(password.length < 6) points = points - 1;
		if(!password.match(/[a-z_]/i) || !password.match(/[0-9]/)) points = points - 1;
		if(!password.match(/\W/)) points = points - 1;
		
		return points;
	},
	
	
	getMessage: function(messageNumber) {
		var message = "";
		
		switch(messageNumber) {
			case -3:
				message = "MUITO BAIXA";
			break;
			
			case -2:
				message = "BAIXA";
			break;
			
			case -1:
				message = "BOM";
			break;
			
			case 0:
				message = "EXCELENTE";
			break;
		}
		
		return message;
	}
	
}