/**
 *
 * Exemplo de variaveis em javascript
 * @author: Edy Segura - edy@segura.eti.br
 *
 */

/*
									Notação das variáveis
Type                    Prefix               Example
---------------------------------------------------------
Array                   a                    aValues
Boolean                 b                    bFound
Float (Number)          f                    fValue
Function                fn                   fnMethod
Integer (Number)        i                    iValue
Object                  o                    oType
Regular Expression      re                   rePattern
String                  s                    sValue
Variant                 v                    vValue
---------------------------------------------------------
*/

var Index = {
	
	init: function() {
		Index.listVars();
	},
	
	variaveis: {
		sNome         : "Edy Segura",
		iIdade        : 22,
		fMedia        : 70.5,
		bMasculino    : true,
		aAmigos       : ["André", "Eduardo Lopes", "Jeferson", "Pantano", "BOB"],
		fnNoiva       : function(){ alert("Lidy Bernardes"); },
		oDtNascimento : new Date(1983,8,14),
		reAlpha       : new RegExp("[A-Za-z]","gi")
	},
	
	listVars: function() {
		var ol = document.createElement("ol");
		
		for(var index in Index.variaveis) {
			var li = document.createElement("li");
			li.innerHTML = index + " = " + typeof(Index.variaveis[index]);
			ol.appendChild(li);
		}
		
		document.body.appendChild(ol);
	}

};

//inicializacao
window.onload = Index.init;