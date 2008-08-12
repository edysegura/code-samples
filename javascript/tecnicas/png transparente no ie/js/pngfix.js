/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Transparência correta do PNG no IE 5.5 e 6
Referência: http://homepage.ntlworld.com/bobosola
*/

function fnCorrectPNG() {
	for(var i=0; i<document.images.length; i++) {
		//trabalhando com a imagem corrente
		var oImg = document.images[i];
		var sImgName = oImg.src.toUpperCase();
		//verificando se a imagem é PNG
		if(sImgName.substring(sImgName.length - 3, sImgName.length) == "PNG") {
			var sImgID = (oImg.id) ? "id='" + oImg.id + "' " : "";
			var sImgClass = (oImg.className) ? "class='" + oImg.className + "' " : "";
			var sImgTitle = (oImg.title) ? "title='" + oImg.title + "' " : "title='" + oImg.alt + "' ";
			var sImgStyle = "display:inline-block;" + oImg.style.cssText;
			//verificando atributos da imagem
			if(oImg.align == "left")    sImgStyle = "float:left;"  + sImgStyle;
			if(oImg.align == "right")   sImgStyle = "float:right;" + sImgStyle;
			if(oImg.parentElement.href) sImgStyle = "cursor:hand;" + sImgStyle;
			//concatenando um novo html
			var sNewHTML = "<span " + sImgID + sImgClass + sImgTitle
										 + " style=\"" + "width:" + oImg.width + "px; height:" + oImg.height + "px;" 
										 + sImgStyle + "; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
										 + "(src=\'" + oImg.src + "\', sizingMethod='scale');\"></span>";
			//substituição da imagem sem alpha c/ imagem com alpha
			oImg.outerHTML = sNewHTML;
			i = i-1;
		}
	}
}
//adicionando a imagem ao evento onload
window.attachEvent("onload", fnCorrectPNG);
