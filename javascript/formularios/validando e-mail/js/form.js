/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Objeto Form
*/

var Form = {

	isMail: function(sEmail) {
		//var rePattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		//var rePattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		
		var rePattern = /^[a-zA-Z0-9_\.-]{2,}@([A-Za-z0-9_-]{2,}\.)+[A-Za-z]{2,4}$/;
		return rePattern.test(sEmail);
		
	}

};

