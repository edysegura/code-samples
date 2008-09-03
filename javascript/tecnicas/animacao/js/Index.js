/**
 *
 * Script para pagina index.html
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Index = {
	
	count: 0,
	container: null,
	
	init: function() {
		Index.setAnimate();
	},
	
	
	setAnimate: function() {
		var h2 = document.getElementsByTagName("h2")[0];
		var text = h2.innerHTML;
		var textConcat = "";
		
		for(var i=0; i<text.length; i++) {
			textConcat += "<span>" + text.charAt(i) + "</span>";
		}
		
		h2.innerHTML = textConcat;
		Index.container = h2;
		
		window.setInterval(Index.animate, 300);
	},
	
	
	animate: function() {
		var h2 = Index.container;
		
		//animando o conteúdo
		h2.childNodes[!Index.count ? h2.childNodes.length-1 : Index.count-1].className = "";
		h2.childNodes[Index.count].className = "selected";
		
		//contador
		Index.count = ++Index.count % h2.childNodes.length; // n%n=0 volta do incio;
	}
}

//inicializacao
window.onload = Index.init;
