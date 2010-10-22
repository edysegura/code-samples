/**
 *
 * Exemplo do uso do for in
 * @author: Edy Segura - edy@segura.pro.br
 *
 */
var Index = {
	
	init: function() {
		Index.each();
	},
	
	each: function() {
		var firstOL  = document.createElement("ol");
		var secondOL = firstOL.cloneNode(false);
		var li;
		
		//usando a estrutura for in
		for(var i in Nomes) {
			li = document.createElement("li");
			li.appendChild(document.createTextNode(Nomes[i]));
			firstOL.appendChild(li);
		}
		
		Nomes = Nomes.sort();
		
		//usando a estrutura for
		for(var i=0; i<Nomes.length; i++) {
			li = document.createElement("li");
			li.appendChild(document.createTextNode(Nomes[i]));
			secondOL.appendChild(li);
		}
		
		document.body.appendChild(firstOL);
		document.body.appendChild(secondOL);
	}
	
};

//inicializacao
window.onload = Index.init;
