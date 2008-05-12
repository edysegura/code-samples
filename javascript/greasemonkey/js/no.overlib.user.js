// ==UserScript==
// @name           No Overlib
// @namespace      http://edysegura.com
// @description    Retira do dotproject a popup chata do overlib
// @include        http://www.liveware.com.br/dotproject/*
// @include        http://dotproject.srs.liveware.com.br/*
// ==/UserScript==

(function() {
	
	var fn = function() {
		var aLinks = document.getElementsByTagName('a');
		
		if(aLinks.length > 0) {
			for(var i in aLinks) {
				if(aLinks[i].setAttribute) {
					aLinks[i].setAttribute('onmouseover', null);
				}
			}
		}
	}
	
	window.addEventListener("load", fn, true);

})();