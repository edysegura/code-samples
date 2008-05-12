/**
 *
 * Objeto Literal Index
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.setLinksAjax();
		Index.setLinkClear();
	},//fim init
	
	
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
			};//fim function aLinks
		}//fim for

	},//fim setLinksAjax
	

	setLinkClear: function() {
		var oLink = document.links[2];
		
		oLink.onclick = function() {
			$('content-1').innerHTML = 
			$('content-2').innerHTML = "";
			return false;
		};

	},//fim setLinkClear
	
	
	showContent: function(sResponse, oTarget) {
		oTarget.innerHTML = sResponse;
	},//fim showContent
	
	
	showContent1: function(sResponse) {
		var oTarget = $('content-1');
		Common.includeJS("js/script.js");
		Index.showContent(sResponse, oTarget);
	},//fim showContent1
	
	
	showContent2: function(sResponse) {
		var oTarget = $('content-2');
		Index.showContent(sResponse, oTarget);
	}//fim showContent2
	
};//fim Index

//inicialização
window.onload = Index.init;
