/* 
 * Index.js
 *
 * Objeto Literal Index para uso do firebug lite
 * @author: Edy Segura - edy@liveware.com.br
 *
 */

var Index = {
	
	init: function() {
		console.time("Tempo");
		
		console.group("Grupo 1");
			Index.setValues("Lidy Bernardes", "Feminino", "21");
		console.groupEnd("Grupo 1");
		
		Index.setValues("Edy Segura", "Masculino", "23");
		
		console.timeEnd("Tempo");
	},
	
	
	setValues: function(sName, sSexo, iIdade) {
		var oPessoa = {nome:sName, sexo:sSexo, idade:iIdade};
		console.dir(oPessoa);
	}
	
};

//inicializacao
window.onload = Index.init;
