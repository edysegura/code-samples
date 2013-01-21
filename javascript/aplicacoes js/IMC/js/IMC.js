/**
 * JavaScript for IMC Calculation
 */
var IMC  = {

	init: function() {
		IMC.setButton();
	},
	
	setButton: function() {
		var btn = document.getElementById('btnCalculate');
		btn.onclick = function() {
			IMC.calculate();
		};
	},
	
	calculate: function() {
		var peso   = parseFloat(document.getElementById('peso').value);
		var altura = parseFloat(document.getElementById('altura').value);
		var resultado = document.getElementById('resultado');
		resultado.innerHTML = (peso / (altura * altura)).toFixed(2);
	}
	
};

//initialization
window.onload = IMC.init;
