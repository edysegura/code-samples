/* JavaScript Document
Autor: Edy Segura - edy@liveware.com.br, edy@segura.eti.br
Descrição: Scripts da página principal
*/

//função para requisitar a imagem
function fnSetImg(sUrl) {
	//pegando a imagem
	document.images['paulo'].src = sUrl;
	
	//manipulando o link
	var oLink = document.links[0];
	oLink.href = "javascript:void(0);";
	oLink.innerHTML = "Tirar a imagem do Paulo.";
	oLink.onclick = fnReset;
}

//função para recarregar a página
function fnReset() {
	document.location.reload();
}
