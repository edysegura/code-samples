/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Index = {
	
	init: function() {
		Index.setLinksAjax();
		Index.setLinkClear();
	},
	
	
	setLinksAjax: function() {
		var aLinks = $(document.links[0], document.links[1]);
		
		for(var i=0; i<aLinks.length; i++) {
			aLinks[i].onclick = function() {
				var oUrlParams = new QueryString(this.href);
				
				Ajax.run({
					url      : this.href,
					callback : (oUrlParams.callback) ? eval('(' + oUrlParams.callback + ')') : null,
					loading  : true
				});
				
				return false;
			};
		}

	},
	

	setLinkClear: function() {
		var oLink = document.links[2];
		
		oLink.onclick = function() {
			$('content-1').innerHTML = 
			$('content-2').innerHTML = "";
			return false;
		};

	},
	
	
	showContent: function(sResponse, oTarget) {
		oTarget.innerHTML = sResponse;
	},
	
	
	showContent1: function(sResponse) {
		var oTarget = $('content-1');
		Common.includeJS("js/script.js");
		Index.showContent(sResponse, oTarget);
	},
	
	
	showContent2: function(sResponse) {
		var oTarget = $('content-2');
		Index.showContent(sResponse, oTarget);
	}
	
};

//inicialização
window.onload = Index.init;
