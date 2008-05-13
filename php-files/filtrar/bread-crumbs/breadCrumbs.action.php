<?php
/**
  *
  * Função para criar breadCrumbs
  * @autor Leandro Vieira Pinho [http://leandrovieira.com/archive/funcao-para-criar-breadcrumbs]
  * @version 1.0
  * @created sábado, 8 de abril de 2007
  * @param $arrTetxt array informe os textos dos links
  * @param $arrLinks array informe o link para os textos
  * @param $strMessageBreadCrumb string mensagem inicial do breadCrumb
  *
  */

function buildBreadCrumbs($arrText = array(), $arrLinks = array(), $strMessageBreadCrumb = 'Você está aqui:') {
	$strHtml  = '';
	$strHtml .= "<div id=\"bread-crumbs\">n";
	$strHtml .= "t<ul>n";
	$strHtml .= "tt<li><strong>$strMessageBreadCrumb</strong></li>n";
	$i = 0;
	foreach ( $arrText as $text ) {
		if ( $arrLinks[$i] != '' ) {
			$strHtml .= "tt<li><a href=\"$arrLinks[$i]\">$text</a></li>n";
		} else {
			$strHtml .= "tt<li>» $text</li>n";
		}
		$i++;
	}
	$strHtml .= "t</ul>n";
	$strHtml .= "</div><!-- / bread-crumbs -->";
	return $strHtml;
}
?>