/* JavaScript Document
Autor: Jeremy McPeak  jwmcpeak@gmail.com
Editado por: Edy Segura  edy@segura.eti.br
Descrição: Componente para parsear feeds XML
Documentação: http://www.wdonline.com/javascript/xparser/
*/

XParser = function(sFileName) {
	var oXMLDocument;

	if(document.implementation && document.implementation.createDocument)
		oXMLDocument = document.implementation.createDocument("", "", null);
	else if(window.ActiveXObject)
		oXMLDocument = new ActiveXObject("MSXML.DomDocument");
	
	oXMLDocument.async = false;
	oXMLDocument.load( sFileName );
		
	this.Document = oXMLDocument.documentElement;
	this.isRss    = (this.Document.tagName.toLowerCase() == "rss")  ? true : false;
	this.isAtom   = (this.Document.tagName.toLowerCase() == "feed") ? true : false;

	var channelNode = (this.isRss) ? this.Document.getElementsByTagName("channel")[0] : (this.isAtom) ? this.Document : 0;
	
	this.title = this.link = this.description = this.copyright = this.generator = this.modified = this.author = new XParser_Element();
	
	for(var i=0; i<channelNode.childNodes.length; i++) {
		var thisNode = channelNode.childNodes[i];
		
		if(thisNode.nodeType == 1) {
			switch(thisNode.tagName.toLowerCase()) {
				//Shared Tags
				case "title":
					this.title = new XParser_Element(thisNode, thisNode.text);
				break;
				
				case "link":
					if (this.isAtom) {
						if (thisNode.getAttribute("rel").toLowerCase() == "alternate") {
							this.link = new XParser_Element(thisNode,thisNode.getAttribute("href"));
						}
					} else {
						this.link = new XParser_Element(thisNode,thisNode.text);
					}
				break;
				
				case "copyright":
					this.copyright = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "generator":
					this.generator = new XParser_Element(thisNode,thisNode.text);
				break;
				
				//RSS Tags
				case "description":
					this.description = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "lastbuilddate":
					this.modified = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "managingeditor":
					this.author = new XParser_Element(thisNode,thisNode.text);
				break;
				
				//Atom Tags
				case "tagline":
					this.description = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "modified":
					this.modified = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "author":
					this.author = new XParser_Element(thisNode,thisNode.text);
				break;
				
				default:
				break;
			}
		}
		
	}
	this.items = new Array();
	
	var itemCol = (this.isRss) ? channelNode.getElementsByTagName("item") : (this.isAtom) ? channelNode.getElementsByTagName("entry") : 0;
	
	for (var i=0; i<itemCol.length; i++) {
		this.items[i] = new XParser_Item(itemCol[i]);
	}
}


XParser_Element = function(thisNode, thisValue) {
	this.node   = (thisNode)  ? thisNode  : 0;
	this.value  = (thisValue) ? thisValue : 0;
	this.isNull = null;
		
	if(this.node) {
		this.attributes = new Array();
		var attr = this.node.attributes;
		
		for(var i=0; i<attr.length; i++) {
			this.attributes[i] = new XParser_Attribute(attr[i]);
			this.attributes[attr[i].nodeName] = new XParser_Attribute(attr[i]);
		}
		
	} 
	else this.attributes = 0;
	
	if (!this.node && !this.value && !this.attributes) this.isNull = true;
	else this.isNull = false;
}


XParser_Attribute = function(attNode) {
	this.value = attNode.nodeValue;
}


XParser_Item = function(itemNode) {
	this.title = this.link = this.author = this.description = this.date = new XParser_Element();
	
	for(var i=0; i<itemNode.childNodes.length; i++) {
		var thisNode = itemNode.childNodes[i];
		
		if(thisNode.nodeType == 1) {
			switch (thisNode.tagName.toLowerCase()) {
				//Shared Tags
				case "title":
					this.title = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "link":
					if (thisNode.getAttribute("href"))
						this.link = new XParser_Element(thisNode,thisNode.getAttribute("href"));
					else this.link = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "author":
					this.author = new XParser_Element(thisNode,thisNode.text);
				break;
				
				//RSS Tags
				case "description":
					this.description = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "pubdate":
					this.date = new XParser_Element(itemNode,thisNode.text);
				break;
				
				//Atom Tags
				case "content":
					this.description = new XParser_Element(thisNode,thisNode.text);
				break;
				
				case "issued":
					this.date = new XParser_Element(itemNode,thisNode.text);
				break;
				
				//Extensions
				case "dc:date":
					this.date = new XParser_Element(itemNode,thisNode.text);
				break;
				
				default:
				break;
			}
		}
	}
}


/*
  Text Getter
  Written by Erik, WebFX.com
*/
if(navigator.product == "Gecko") {
	Text.prototype.__defineGetter__("text", function () {
		//return this.nodeValue; //Temp fix for Firecrap 1.0.3
	});
	
	Node.prototype.__defineGetter__( "text", function () {
		var cs = this.childNodes;
		var l  = cs.length;
		var sb = new Array(l);
		
		for(var i=0; i<l; i++)
			sb[i] = cs[i].nodeValue;
		
		return sb.join("");
	});
}