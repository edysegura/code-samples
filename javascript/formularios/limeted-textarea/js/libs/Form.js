/**
 *
 * Objeto para manipulação de formulário
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Form = {
	
	
	/**
	 *
	 *  Método para configurar a limitação no textarea
	 *
	 */
	setLimitTextArea: function(textarea) {
		textarea.onmousemove = textarea.onkeydown = textarea.onkeyup = function() {
			try {
				var arrayResult = this.className.match(/limit:(\d)+/g);
				var maxLength   = arrayResult[0].replace(/\D/g, "");
				Form.limitTextArea(this, maxLength);
			}
			catch(e) {
				alert('Error: ' + e.message);
			}
		}
	},
	
	
	/**
	 *
	 *  Método para limitar textarea
	 *  Chamar os eventos onkeydown e onkeypress e onmouseup
	 *
	 */
	limitTextArea: function(textarea, maxLength, restInfo) {
		if (textarea.value.length > maxLength) {
			textarea.value = textarea.value.substring(0, maxLength);
		}
		
		var restInfo = document.getElementById(textarea.id + '-infoLength');
		if(restInfo) {
			restInfo.innerHTML = maxLength - textarea.value.length;
		}
	}
	
};