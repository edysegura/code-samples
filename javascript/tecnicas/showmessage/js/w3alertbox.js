/*
	w3AlertBox (1.0.1) - 14/12/2006
	Por Leandro Vieira Pinho - http://leandro.w3invent.com.br
	
	Para informa��es de uso deste add-on visite:
	http://leandro.w3invent.com.br/addons/freedom/w3alertBox

	Nota: O w3AlertBox trabalha em conjunto com a freeDOM 0.2.7 ou superior
	freeDOM: http://metzen.com.br/freedom/
*/
var w3AlertBox = {

	/**
	 * show() - Exibe o alert box
	 * @param strMsgParam {string} = Mensagem ou c�digo HTML a ser exibido no alert Box
	 * @param strTitleBoxParam {string} = T�tulo do box da mensagem
	 * @param boolHTML {booleano} = Se a mensagem cont�m uma estrutura HTML ou n�o. true = sim, false = n�o.
	 *
	 * HTML gerado pelo alertBox (customize como desejar :) via CSS)
	 * <div id="w3alertbox">
	 *	<h3>Alerta</h3>
	 *	<p>
	 *		strParam
	 *	</p>
	 *	<input id="w3alertbox_btnOk" value="Ok" type="button">
	 * </div>
	 */
	 
	show: function(strMsgParam,strTitleBoxParam,boolHTML) {
	
		// Se n�o for informado um t�tulo para o box. Usaremos o padr�o: Alerta!
		if ( typeof strTitleBoxParam == "undefined" ) {
			var strTitleBox = 'Alerta!';
		} else {
			var strTitleBox = strTitleBoxParam;
		}
		
		// Por padr�o n�o inserimos HTML no conte�do da mensagem
		if ( typeof boolHTML == "undefined" ) {
			var boolHTML = false;
		}
		
		// Insere o HTML na p�gina
		if ( boolHTML ) {
			$append($new('div','id=w3alertbox',$new('h3',strTitleBox)));
			$('w3alertbox').innerHTML += strMsgParam;
			$append($new('form',$new('input',["type=button","value=Ok","id=w3alertbox_btnOk"],"")),$('w3alertbox'));
		} else {
			$append($new('div','id=w3alertbox',[$new('h3',strTitleBox),$new('p',strMsgParam),$new('form',$new('input',["type=button","value=Ok","id=w3alertbox_btnOk"],""))]));
		}
		
		// Ao clicar no bot�o de Ok chama a fun��o _close para remover(fechar) o box
		addEvent($('w3alertbox_btnOk'),'click',w3AlertBox._close);
		// Focus no bot�o de OK	
		$('w3alertbox_btnOk').focus();
		
	}, /* end:show() */
	
	_close: function() {
		$remove($('w3alertbox'));	
	} /* end:_close() */

}; /* end:w3AlertBox */