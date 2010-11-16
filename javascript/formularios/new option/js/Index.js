/**
 *
 * Script de exemplo para adicionar novos options
 * em um elemento select
 *
 */
var Index = {
	
	init: function() {
		Index.setForm();
	},
	
	
	setForm: function() {
		var form = document.getElementById('frm-emails');
		if(form) {
			form.onsubmit = function() {
				if(form.nome.value != '' && form.email.value != '') {
					if(form.emails.options[0].value == '') form.emails.options[0] = null;
					Index.addOption(form.nome.value, form.email.value, form.emails);
					form.nome.value = form.email.value = '';
					form.nome.focus();
				}
				else {
					alert('Preencha os campos corretamente.');
				}
				return false;
			}
			Index.setBtnDelete();
		}
	},
	
	
	setBtnDelete: function() {
		var btn = document.getElementById('btn-delete');
		if(btn) {
			btn.onclick = function(){ Index.deleteOption(); };
		}
	},
	
	
	addOption: function(text, value, select) {
		select.options[select.options.length] = new Option(text, value);
	},
	
	
	deleteOption: function() {
		var select = document.getElementById('emails');
		if(select) {
			for(var i=0; i<select.options.length; i++) {
				if(select.options[i].selected) {
					if(confirm("Remover " + select.options[i].text + " - " + select.options[i].value + "?")) {
						select.options[i] = null;
					}
				}
			}
		}
	}
	
};

//inicializacao
window.onload = Index.init;
