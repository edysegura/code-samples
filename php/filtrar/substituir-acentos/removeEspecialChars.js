
removeEspecialChars = function(text) {
	var result = "";
	
	if(text) {
		text = text.replace(/[ÁÀÂÃ]/g, "A");
		text = text.replace(/[áàâã]/g, "a");
		text = text.replace(/[ÉÈÊ]/g, "E");
		text = text.replace(/[éèê]/g, "e");
		text = text.replace(/[ÍÌÎ]/g, "I");
		text = text.replace(/[íìî]/g, "i");
		text = text.replace(/[ÓÒÔÕ]/g, "O");
		text = text.replace(/[óòôõ]/g, "o");
		text = text.replace(/[ÚÙÛÜ]/g, "U");
		text = text.replace(/[úùûü]/g, "u");
		text = text.replace(/Ç/g, "C");
		text = text.replace(/ç/g, "c");
		
		result = text;
	}
	
	return result;
}