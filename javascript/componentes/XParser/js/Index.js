/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br, edy@segura.pro.br
Descrição: Descrição
*/

var Index = {

	init: function() {
		Index.setLinks();
	},
	
	
	setLinks: function() {
		var oLinkLoadRSS   = document.links[0];
		var oLinkGetAuthor = document.links[1];

		oLinkLoadRSS.onclick = function() {
			Index.loadFeed(this.href);
			return false;
		};
		
		oLinkGetAuthor.onclick = function() {
			Index.getAuthor();
			return false;
		};
		
	},
	
	
	loadFeed: function(sFileName) {
		oFeed = null;
		oFeed = new XParser(sFileName);
		
		for(var i=0; i<oFeed.items.length; i++) {
			var oDiv = document.createElement("div");
			oDiv.className = "Item";
			
			var oTitle = document.createElement("h2");
			oTitle.className = "ItemTitle";
			oTitle.innerHTML = oFeed.items[i].title.value;
			
			var oDescricao = document.createElement("p");
			oDescricao.className = "ItemDesc";
			oDescricao.innerHTML = oFeed.items[i].description.value;
			
			oDiv.appendChild(oTitle);
			oDiv.appendChild(oDescricao);
			$('FeedContent').appendChild(oDiv);
		}
		
		$("FeedTitle").innerHTML = oFeed.title.value;
		$("FeedDesc").innerHTML  = oFeed.description.value;
		$("FeedCopy").innerHTML  = oFeed.copyright.value;
	},
	
	
	getAuthor: function() {
		try {
			alert(oFeed.author.value);
		}
		catch(e) {
			alert("Feed não carregado.");
		}
	}
	
};

//inicialização
window.onload = Index.init;

