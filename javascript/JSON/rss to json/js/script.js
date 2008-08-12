/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: RSS to JSON
Referência: http://ejohn.org/projects/rss2json/
*/

//função para inicialização
function fnInit() {
	var oLink = document.links[0];
	oLink.onfocus = new Function("if(this.blur) this.blur();");
}
window.onload = fnInit;

//função para manipulação dos RSS
function fnBuildRSS(oRss) {
	//declaração de variáveis
	var oOL = document.createElement("ol");
	var oLink = document.links[0];
	
	fnVoltarLink();
	
	//percorrendo os feeds
	for(var iIndex in oRss.entries) {
		var oLi = document.createElement("li");
		var oLink = document.createElement("a");
		
		oLink.href = oRss.entries[iIndex].link;
		oLink.innerHTML = (oRss.title == "Edy Segura's Photos") ? 
		                   oRss.entries[iIndex].content :
											 oRss.entries[iIndex].title;
		
		oLi.appendChild(oLink);
		oOL.appendChild(oLi);
	}
	document.body.appendChild(oOL);
}

//pegando os feeds do RSS
function fnGetRSS(sUrl, sCallback) {
	//fnFeedLoaded é a função a ser chamada depois da inclução dos feeds
	fnFeedLoaded = sCallback;
	var oScript = document.createElement('script');
	
	oScript.type = 'text/javascript';
	oScript.src = "http://ejohn.org/apps/rss2json/?url=" + sUrl
							+ "&callback=fnFeedLoaded&t=" + (new Date()).getTime();
	
	if($('rss').options[1].selected)
		oScript.charset = "utf-8";
	
	fnLoading();
	document.getElementsByTagName("head")[0].appendChild(oScript);
}

//só para a manipulação do link
function fnLoading() {
	var oLink = document.links[0];
	
	//tirando o link da ação
	oLink.innerHTML = "Carregando feeds...";
	oLink.onclick = "";
	oLink.className = "texto";
}

//voltando o estado inicial do link
function fnVoltarLink() {
	var oLink = document.links[0];
	oLink.innerHTML = "Pegar Feeds";
	oLink.className = "";
	oLink.onclick = fnGo;
}

//função para validar quel rss vai ser carregado
function fnGo() {
	if($('rss').value != "") {
		
		if(document.getElementsByTagName('ol')[0]) {
			var oOL = document.getElementsByTagName('ol')[0];
			oOL.parentNode.removeChild(oOL);
		}
		
		fnGetRSS($('rss').value, fnBuildRSS);
	}
	else alert("Por favor selecione algum RSS.");
}

//shortcut for document.getElementById()
function $(sElementId) {
	return document.getElementById(sElementId);
}
