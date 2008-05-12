// ==UserScript==
// @name          Auto Complete DotProject
// @namespace     http://edysegura.com
// @description   Inserir suas informacoes automaticamente
// @include       http://dotproject.srs.liveware.com.br/dotproject/*
// @include       http://www.liveware.com.br/dotproject/*
// ==/UserScript==

(function() {
	var sUser = "edy_segura";
	var sPass = "sua-senha";
	
	var oUser = document.getElementsByName('username')[0];
	var oPass = document.getElementsByName('password')[0];
	
	if(oUser) {
		oUser.value = sUser;
		
		oUser.addEventListener("click", function() {
			this.value = (this.value == sUser) ? "" : this.value;
		}, false);
		
		oUser.addEventListener("blur", function() {
			this.value = (this.value == "" ) ? sUser : this.value;
		}, false);
	}
	
	if(oPass) {
		oPass.addEventListener("dblclick", function() {
			this.value = sPass;
		}, false);
		
		window.setTimeout(function(){
			oPass.focus();
		}, 100);
	}

})();