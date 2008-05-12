/*
*	freeDOM (0.2.7)
*	Autor: Andre Metzen (andre[at]metzen.com.br)
*	Autor: Leandro Vieira (leandro[at]w3invent.com.br)
*	08/12/2006 - 10:37
*
*	Funcoes disponiveis:
*
*	@name: $(strId[, strId2, strId3, ...]) 
*	@name: $tags(strTagName,objParentNode) 
*	@name: $before(objNew,objRefer)
*	@name: $after(objNew,objRefer)
*	@name: $replace(objNew,objOld)
*	@name: $newTN(strConteudo) 
*	@name: $new(strTagName, strParams, strConteudo)
*	@name: $append(objNode, objParentNode)
*	@name: $remove(objNode)
*	@name: getStc(evt)
*	@name: cEvt(evt)
*	@name: JSON(t)
*
*/

/*
*	@name: $(strId[, strId2, strId3, ...]) 
*	@version: 1.0
*	@author: Andre Metzen
*	@param: strId => String, Array of String
*	@return: Node Object, Array of Node Objects
*	@description: Retorna o(s) elemento(s) cujo id e igual a "strId"
*/
function $(strId)
{
	var i, arrReturn,arrStrId;
	if(arguments.length > 1)
	{
		arrStrId = new Array();
		for(i=0; i<arguments.length; i++)
			arrStrId.push(arguments[i]);
	}
	
	if(strId instanceof Array)
	{
		arrStrId = strId;
	}
	
	if(arrStrId instanceof Array)
	{
		arrReturn = new Array();
		for(i=0; i<arrStrId.length; i++)
			arrReturn[i] = document.getElementById(arrStrId[i]);
	}
	else
	{
		arrReturn = document.getElementById(strId);
	}
	
	return arrReturn;
}

/*
*	@name: $tags(strTagName,objParentNode) 
*	@version: 1.0
*	@author: Andre Metzen
*	@param: strTagName => String
*	@param: objParentNode => Node Object(optional)
*	@return: Array of Node Objects
*	@description: Retorna todas as tags que possuam nodeName igual a "strTagName" dentro do objeto "objParentNode". 
*				  Caso "objParentNode" nao seja definido, e usado como padrao "document"
*/
function $tags(strTagName,objParentNode)
{
	if(typeof objParentNode == "undefined")
	{
		objParentNode = document;
	}
	
	return objParentNode.getElementsByTagName(strTagName);
}

/*
*	@name: $before(objNew,objRefer)
*	@version: 1.0
*	@author: Andre Metzen
*	@param: objNew => Node Object
*	@param: objRefer => Node Object
*	@return: Node Object
*	@description: Insere o objeto "objNew" logo acima na arvore de n� do objeto "objRefer"
*/
function $before(objNew,objRefer)
{ 
	return objRefer.parentNode.insertBefore(objNew,objRefer);
}

/*
*	@name: $after(objNew,objRefer)
*	@version: 1.0
*	@author: Leandro Vieira
*	@param: objNew => Node Object
*	@param: objRefer => Node Object
*	@return: Node Object
*	@description: Insere o objeto "objNew" logo abaixo na arvore de n� do objeto "objRefer"
*/
function $after(objNew,objRefer)
{ 
	return objRefer.parentNode.insertBefore(objNew,objRefer.nextSibling);
}

/*
*	@name: $replace(objNew,objOld)
*	@version: 1.0
*	@author: Andre Metzen
*	@param: objNew => Node Object
*	@param: objOld => Node Object
*	@return: Node Object, false
*	@description: Substitue o objeto "objOld" pelo objeto "objNew"
*/
function $replace(objNew,objOld)
{
	if(objOld.parentNode)
	{
		return objOld.parentNode.replaceChild(objNew,objOld);
	}
	else
	{
		return false;
	}
}

/*
*	@name: $newTN(strConteudo) 
*	@version: 1.0
*	@author: Andre Metzen
*	@param: strConteudo => String
*	@return: Text Node Object, false
*	@description: Cria e retorna um text node com o conteudo passado em "strConteudo"
*/
function $newTN(strConteudo)
{
	if(typeof strConteudo == "string")
	{
		return document.createTextNode(strConteudo);
	}
	else
	{
		return false;
	}
}

/*
*	@name: $new(strTagName, strParams, strConteudo)
*	@version: 1.0
*	@author: Andre Metzen
*	@param: strTagName => String
*	@param: strParams => String, Array of strings; ex: "href=#" or ["href=#","target=_blank"]
*	@param: strConteudo => String, Array of objects or strings
*	@return: Node Object
*	@description: Cria um novo elemento do tipo "strTagName". O parametro "strParams" sao as propriedades que serao aplicadas ao objeto.
*				  "strParams" pode ser uma string, caso seja apenas uma propriedade, ou um vetor, para n propriedades.
*				  O parametro "strConteudo" e o conteudo. Pode ser passado como um vetor ou diretamente. Aceita-se como
*				  valor objetos ou string.
*/
function $new(strTagName, strParams, strConteudo)
{
	var i, newElement, arrParameters;
	if(typeof strConteudo == "undefined")
	{
		strConteudo = strParams;
		strParams = null;
	}
	
	newElement=document.createElement(strTagName);
	
	if(strParams instanceof Array)
	{
		for(i=0; i<strParams.length && (arrParameters = strParams[i].split("=")); i++)
		{	
			newElement[arrParameters[0]] = arrParameters[1];
		}
	}
	else
	{
		if(typeof strParams == "string" && ( arrParameters = strParams.split("=")) )
		{
			newElement[arrParameters[0]] = (arrParameters.length==2) ? arrParameters[1] : "";
		}
	}

	if(strConteudo instanceof Array)
	{
		for(i=0; i<strConteudo.length; i++)
		{
			(typeof(strConteudo[i]) =="string") ? $append($newTN(strConteudo[i]), newElement) : $append(strConteudo[i], newElement);
		}
	}
	else
	{
		$append(strConteudo, newElement);
	}
	
	return newElement;
}

/*
*	@name: $append(objNode, objParentNode)
*	@version: 1.0
*	@author: Andre Metzen
*	@param: objNode => Node Object, String, Array of Node Objects or Strings
*	@param: objParentNode => Node Object
*	@return: Integer
*	@description: Adiciona o "objNode" como ultimo no filho de "objParentNode". Se "objNode" for uma string
*				  e criada um Text Node e adicionado como ultimo no. Caso "objParentNode" nao seja definido e tomado
*				  como padrao "document.body"
*/
function $append(objNode, objParentNode)
{
	var i;
	if(typeof(objParentNode) == "undefined")
	{
		objParentNode = document.body;
	}
	
	if(objNode=="" || objNode == null)
	{
		return true;
	}
	if(objNode instanceof Array)
	{
		for(i=0; i<objNode.length; i++)
		{
			$append(objNode[i], objParentNode);
		}
	}
	else
	{
		if(typeof(objNode) == "string")
		{
			objParentNode.appendChild($newTN(objNode))
		}
		else
		{
			objParentNode.appendChild(objNode);
		}
	}
	
	return objParentNode.childNodes.length;
}

/*
*	@name: $remove(objNode)
*	@version: 1.0
*	@author: Andre Metzen
*	@param: objNode => Node Object
*	@return: void
*	@description: Remove o elemento "objNode"
*/
function $remove(objNode)
{
	if(objNode && objNode.parentNode)
	{
			objNode.parentNode.removeChild(objNode);
	}
}

/*
*	@name: getStc(evt)
*	@version: 1.0
*	@author: Elcio Ferreira
*	@param: evt => Event Object
*	@return: void
*	@description: Retorna o objeto no qual o evento foi realizado
*/
function getSrc(evt)
{
	if(typeof(evt) == "undefined")
	{
		evt=window.event;
	}
	
	var objSrc=evt.target?evt.target:evt.srcElement;
	
	if(objSrc.nodeType==3)
	{
		objSrc=objSrc.parentNode;
	}
	return objSrc;
}

/*
*	@name: cEvt(evt)
*	@version: 1.0
*	@author: Diego Nunes
*	@param: evt => Event Object
*	@return: false
*	@description: Cancela o efeito do evento "evt"
*/
function cEvt(evt)
{
	try 
	{ 
		evt.preventDefault();
	}
	catch(e)
	{
		event.returnValue=false;
	} 
	
	return false;
}

/*
*	@name: JSON(t)
*	@version: 1.0
*	@author: Elcio Ferreira
*	@param: t => String
*	@return: mixed
*	@description: Interpreta a string no formato JSON
*/
function JSON(t)
{
	try
	{
		return eval("["+t+"]")[0];
	}
	catch(e)
	{
		throw("Eval Error on code:\n"+t);
	}
}

function addEvent(objTarget, strEvtType, fnFunction, useCapture, arrParams)
{

	var fnNewFunction;

	if(typeof arrParams != "undefined")
	{
               /** Se for necessario passar varios argumentos em arrParams  */
		if ( typeof(arrParams) != 'string' ) {

			var arrParamsToFunction = []; // Iniciamos um array que contera as mensagens de erro
					for ( var i = 0; i < arrParams.length; i++ )
			{ arrParamsToFunction.push(arrParams[i]); }

			fnNewFunction = function() { fnFunction.apply(objTarget,
				[arrParamsToFunction]); }
		} else {
			fnNewFunction = function() { fnFunction.apply(objTarget, [arrParams]); }
		}
	}
	else
	{
		fnNewFunction = fnFunction;
	}

	if (objTarget.addEventListener)
	{
		objTarget.addEventListener(strEvtType, fnNewFunction, useCapture);
		return true;
	}
	else
	{
		if (objTarget.attachEvent)
		{
			return objTarget.attachEvent('on' + strEvtType, fnNewFunction);
		}
		else
		{
			objTarget['on' + strEvtType] = fnNewFunction;
		}
	}
};

function remEvent(o, evType, fn)
{
  if (document.detachEvent) { o.detachEvent('on'+ evType, fn, true); return true; }
  if (o.removeEventListener) { o.removeEventListener(evType, fn, true); return true; }
}

function addClass(o, strClass)
{
	if(o.className.indexOf(strClass) == -1)o.className += " "+strClass;	
}

function removeClass(o, strClass)
{
	o.className = o.className.replace(strClass,"");	
}

function getPosition(e) {
    e = e || window.event;
    var cursor = {x:0, y:0};
    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
    } 
    else {
        cursor.x = e.clientX + 
            (document.documentElement.scrollLeft || 
            document.body.scrollLeft) - 
            document.documentElement.clientLeft;
        cursor.y = e.clientY + 
            (document.documentElement.scrollTop || 
            document.body.scrollTop) - 
            document.documentElement.clientTop;
    }
    return cursor;
}
