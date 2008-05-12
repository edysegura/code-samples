// JavaScript Image Replacement
// Referência: http://www.quirksmode.org/dom/fir.html

function init()
{
	//verificação se o navegador suporta o DOM da W3C
	var vb_dom=(document.createElement&&document.getElementsByTagName);
	if(!vb_dom) return;
	//verifica se o navegador suporta imagens
	var vo_testimg=new Image();
	var vo_date=new Date();
	var vo_time=vo_date.getTime();
	//carrega uma imagem de teste
	vo_testimg.src='../imagens/imagesuport.gif?'+vo_time; //para não pegar a imagem da cache
	vo_testimg.onload=imageReplacement; //se o navegador não suportar imagens daqui não passa
}
window.onload=init;
//Pega os títulos a serem substituidos
function imageReplacement()
{
	replaceElements(document.getElementsByTagName('h3'));
}
//Substitui os títulos por imagens
function replaceElements(vo_elements)
{
	var vo_image=document.createElement('img');
	for(var i=0;i<vo_elements.length;i++)
	{
		//Todos os títulos que tiverem ID serão substituídos por imagens
		if(vo_elements[i].id)
		{
			var vo_cloneimg=vo_image.cloneNode(true);
			vo_cloneimg.src='../imagens/'+ vo_elements[i].id +'.gif';
			vo_cloneimg.alt=vo_elements[i].firstChild.nodeValue;
			//substitui o texto por imagem
			vo_elements[i].replaceChild(vo_cloneimg,vo_elements[i].firstChild);
		}
	}
}
