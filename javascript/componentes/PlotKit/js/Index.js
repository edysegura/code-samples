/* 
 * Index.js
 *
 * Objeto Literal Index.js
 * @author: Edy Segura - edy@liveware.com.br
 *
 */

var Index = {
	
	init: function() {
		Index.showChart();
	},
	
	
	showChart: function() {
		var oLayout1 = new Layout("bar");
		var oLayout2 = new Layout("line");
		var oLayout3 = new Layout("pie");
		var oChart1, oChart2, oChart3 = "";
		
		oLayout1.addDatasetFromTable("dataset4", $("notas"), null, ycol = 4, labelCol = -1);
		oLayout1.addDatasetFromTable("dataset3", $("notas"), null, ycol = 3, labelCol = -1);
		oLayout1.addDatasetFromTable("dataset2", $("notas"), null, ycol = 2, labelCol = -1);
		oLayout1.addDatasetFromTable("dataset1", $("notas"), null, ycol = 1, labelCol = -1);
		
		oLayout2.addDatasetFromTable("dataset4", $("notas"), null, ycol = 4);
		oLayout2.addDatasetFromTable("dataset3", $("notas"), null, ycol = 3);
		oLayout2.addDatasetFromTable("dataset2", $("notas"), null, ycol = 2);
		oLayout2.addDatasetFromTable("dataset1", $("notas"), null, ycol = 1);
		
		oLayout3.addDatasetFromTable("dataset4", $("notas"), null, ycol = 4);
		oLayout3.addDatasetFromTable("dataset3", $("notas"), null, ycol = 3);
		oLayout3.addDatasetFromTable("dataset2", $("notas"), null, ycol = 2);
		oLayout3.addDatasetFromTable("dataset1", $("notas"), null, ycol = 1);
		
		oLayout1.evaluate();
		oLayout2.evaluate();
		oLayout3.evaluate();
		
		oChart1 = new SweetCanvasRenderer($("chart1"), oLayout1);
		oChart2 = new SweetCanvasRenderer($("chart2"), oLayout2);
		oChart3 = new SweetCanvasRenderer($("chart3"), oLayout3);
		
		oChart1.render();
		oChart2.render();
		oChart3.render();
	}
	
};

//inicializacao
window.onload = Index.init;