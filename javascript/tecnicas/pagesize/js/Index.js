/**
 *
 * Objeto Literal Index para uso do componente Browser.js
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

var Index = {
	
	init: function() {
		Index.setWinResize();
	},
	
	
	setWinResize: function() {
		Index.getPageSize();
		window.onresize = Index.getPageSize;
	},
	
	
	getPageSize: function() {
		var pageSize   = Browser.getPageSize();
		var pageWidth  = document.getElementById('pageWidth');
		var pageHeight = document.getElementById('pageHeight');
		var viewWidth  = document.getElementById('viewWidth');
		var viewHeight = document.getElementById('viewHeight');
		
		pageWidth.innerHTML  = pageSize.pageWidth;
		pageHeight.innerHTML = pageSize.pageHeight;
		viewWidth.innerHTML  = pageSize.viewWidth;
		viewHeight.innerHTML = pageSize.viewHeight;
	}

};

//inicializacao
window.onload = Index.init;

