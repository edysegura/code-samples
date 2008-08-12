/**
 *
 * Componente Browser.js
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Browser = {

	getPageSize: function() {
		var iScrollX, iScrollY, oPageSize;
		var iViewWidth, iViewHeight;
		var iPageWidth, iPageHeight;
		
		if(window.innerHeight && window.scrollMaxY) {	
			iScrollX = document.body.scrollWidth;
			iScrollY = window.innerHeight + window.scrollMaxY;
		} 
		else if(document.body.scrollHeight > document.body.offsetHeight){
			iScrollX = document.body.scrollWidth;
			iScrollY = document.body.scrollHeight;
		} 
		else { 
			iScrollX = document.body.offsetWidth;
			iScrollY = document.body.offsetHeight;
		}
		
		if(self.innerHeight) {
			iViewWidth = self.innerWidth;
			iViewHeight = self.innerHeight;
		} 
		else if(document.documentElement && document.documentElement.clientHeight) { 
			iViewWidth = document.documentElement.clientWidth;
			iViewHeight = document.documentElement.clientHeight;
		} 
		else if(document.body) {
			iViewWidth = document.body.clientWidth;
			iViewHeight = document.body.clientHeight;
		}
		
		//coordenada X
		if(iScrollX < iViewWidth){	
			iPageWidth = iViewWidth;
		} 
		else {
			iPageWidth = iScrollX;
		}
		
		//coordenada Y
		if(iScrollY < iViewHeight){
			iPageHeight = iViewHeight;
		} 
		else { 
			iPageHeight = iScrollY;
		}
		
		//retorna objeto
		return oPageSize = {
			pageWidth  : iPageWidth,
			pageHeight : iPageHeight,
			viewWidth  : iViewWidth,
			viewHeight : iViewHeight
		};
		
	}//getPageSize

};
