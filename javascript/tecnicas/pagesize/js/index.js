/* JavaScript Document
Autor: Edy Segura - edy@segura.eti.br
Descrição: Script da página inicial
*/

var Index = {
	
	init: function() {
		Index.getPageSize();
		Index.setWinResize();
	},//fim init
	
	
	setWinResize: function() {
		window.onresize = Index.getPageSize;
	},//fim setWinResize
	
	
	getPageSize: function() {
		var oPageSize   = Common.getPageSize();
		var oPageWidth  = $('pageWidth');
		var oPageHeight = $('pageHeight');
		var oViewWidth  = $('viewWidth');
		var oViewHeight = $('viewHeight');
		
		oPageWidth.innerHTML  = oPageSize.pageWidth;
		oPageHeight.innerHTML = oPageSize.pageHeight;
		oViewWidth.innerHTML  = oPageSize.viewWidth;
		oViewHeight.innerHTML = oPageSize.viewHeight;
	}//fim buildTable

};//fim Index

//inicialização
window.onload = Index.init;

