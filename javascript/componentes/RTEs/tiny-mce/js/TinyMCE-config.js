/*
 * TinyMCE-config.js
 *
 * Configuracoes de inicializacao do editor TinyMCE
 * @author: Edy Segura - edy@segura.pro.br
 * 
 */

tinyMCE.init({
	
	mode    : "textareas",
	theme   : "advanced",
	width   : "700",
	height  : "380",
	plugins : "table, preview, advlink, fullscreen, xhtmlxtras",

	theme_advanced_buttons1 : "bold, italic, underline, separator, forecolor, backcolor, separator, justifyleft, justifycenter, justifyright, justifyfull, bullist, numlist, undo, redo, tablecontrols",
	theme_advanced_buttons2 : "image, preview, fullscreen, link, unlink, code, separator, formatselect, separator, fontselect, separator, fontsizeselect",
	theme_advanced_buttons3 : "",

	theme_advanced_toolbar_location : "top",
	theme_advanced_toolbar_align    : "left",
	
	auto_resize : false,
	language    : "pt_br"

});