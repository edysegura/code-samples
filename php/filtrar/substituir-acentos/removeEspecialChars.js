
removeEspecialChars = function(text) {
	var result = "";
	
	if(text) {
		text = text.replace(/[����]/g, "A");
		text = text.replace(/[����]/g, "a");
		text = text.replace(/[���]/g, "E");
		text = text.replace(/[���]/g, "e");
		text = text.replace(/[���]/g, "I");
		text = text.replace(/[���]/g, "i");
		text = text.replace(/[����]/g, "O");
		text = text.replace(/[����]/g, "o");
		text = text.replace(/[����]/g, "U");
		text = text.replace(/[����]/g, "u");
		text = text.replace(/�/g, "C");
		text = text.replace(/�/g, "c");
		
		result = text;
	}
	
	return result;
}