
var Twitter = {

	init: function() {
		Twitter.retrieve();
		window.setInterval(Twitter.retrieve, 1000 * 20);
	},
	
	retrieve: function() {
		$.getJSON("http://search.twitter.com/search.json?callback=?",
			{
				q: "html5",
				lang: "en",
				rpp: "4",
				result_type: "recent"
			},
			function(data) {
				$('#tweets').html("");
				$.each(data.results, function(i, item) {
					var html = [];
					html.push('<div>');
						html.push('<img src="'+ item.profile_image_url + '" />');
						html.push('<p>');
							html.push(item.text);
						html.push('</p>');
					html.push('</div>');
					$('#tweets').append(html.join(""));
				});
				$("#tweets div:even").addClass("even");
		});
	}
	
};

Twitter.init();