/**
 *
 * Script para pagina index.html
 * @author Edy Segura, edy@segura.pro.br
 *
 */
var Index = {
	
	count: 0,
	
	init: function() {
		Index.setAnimate();
	},
	
	
	setAnimate: function() {
		var h2 = Index.getH2(),
		    text = h2.innerHTML,
		    textConcat = "", charactere;
		
		for(var i=0; i<text.length; i++) {
			charactere = text.charAt(i);
			if(/\s+/.test(character)) {
				textConcat += "<span>" + character + "</span>";
			}
		}
		
		h2.innerHTML = textConcat;
		window.setInterval(Index.animate, 300);
	},
	
	
	animate: function() {
		var h2 = Index.getH2(),
		    numChilds = h2.childNodes.length;
		
		//animando o conteúdo
		h2.childNodes[!Index.count ? numChilds-1 : Index.count-1].className = "";
		h2.childNodes[Index.count].className = "selected";
		
		//contador
		Index.count = ++Index.count % numChilds; // n%n=0 volta do incio;
	},
	
	
	getH2: function() {
		var h2 = document.getElementsByTagName('h2')[0];
		if(h2) {
			return h2;
		}
		return null;
	}
	
}

//inicializacao
window.onload = Index.init;
