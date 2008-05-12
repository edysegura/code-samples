// JavaScript Image Replacement
// Referência: http://www.alistapart.com/articles/javascriptreplacement/

//json com a lista de imagens
vo_imgReplaces = [
	'JavaScript Image Replacement|jsimgreplace.gif',
	'Edy Segura|edysegura.gif',
	'Lidy Bernardes|lidybernardes.gif'
];

function findHs()
{
	if(document.getElementsByTagName&&document.createElement)
	{
		for(var i=1;i<=6;i++)
		{
			vo_hs=document.getElementsByTagName("h"+i);
			scanAndReplace(vo_hs,"h"+i);
		}
	}
}
window.onload=findHs;

//Procurar e Substituir
function scanAndReplace(vo_hs,vs_tag)
{
	for(var i=0;i<vo_hs.length;i++)
	{
		for(var j=0;j<vo_imgReplaces.length;j++)
		{
			vo_dados=vo_imgReplaces[j].split("|");
			vo_h=document.getElementsByTagName(vs_tag)[i];
			if(vo_h.firstChild.nodeValue==vo_dados[0])
			{
				vo_img=document.createElement("img");
				vo_img.setAttribute("alt",vo_dados[0]);
				vo_img.setAttribute("src","../imagens/"+vo_dados[1]);
				vo_h.replaceChild(vo_img,vo_h.firstChild);
			}
		}
	}
}

