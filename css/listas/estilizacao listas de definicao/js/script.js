// JavaScript Document

function init()
{
	vo_links=document.getElementsByTagName("ul")[0].getElementsByTagName("a");
	vo_dl=document.getElementsByTagName("dl")[0];
	for(var i=0;i<vo_links.length;i++) vo_links[i].onclick=setClass;
}
window.onload=init;

function setClass()
{
	var vs_class=this.href.substring(this.href.lastIndexOf("/")+1);
	if(vs_class.indexOf("#")==-1) vo_dl.className=vs_class;
	else vo_dl.className="";
	return false;
}