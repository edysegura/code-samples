/**
 *
 * Objeto Literal Index
 * @author Edy Segura, edy@segura.pro.br
 *
 */

var Index = {

	init: function() {
		Index.buildTable();
	},


	buildTable: function() {
		var oTable    = document.getElementsByTagName('table')[0];
		var oTbody    = oTable.tBodies[0];
		var oMetaTags = document.getElementsByTagName('meta');

		for(var i=0; i<oMetaTags.length; i++) {
			var sType = (oMetaTags[i].name) ? oMetaTags[i].name : oMetaTags[i].httpEquiv;
			var oRow  = oTbody.insertRow(oTbody.rows.length);
			var oTH   = document.createElement('th');

			oTH.appendChild(document.createTextNode(sType + ":"));
			oRow.appendChild(oTH);
			oRow.insertCell(1).innerHTML = oMetaTags[i].content;
		}

		oTbody.deleteRow(0);

	}
};

//inicializacao
window.onload = Index.init;
