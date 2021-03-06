
var Turn = {
	
	init: function() {
		Turn.setLayout();
		window.setInterval(Turn.setLayout, 1000);
	},
	
	setLayout: function() {
		var turnDesc = document.getElementById('turnDesc'),
		    icon = document.getElementById('icon'),
				turn = Turn.getTurn();
			turnDesc.innerHTML = turn;
			icon.src = "images/" + turn + ".png";
	},
	
	getTurn: function() {
		var time  = new Date();
		var hours = time.getHours();
		
		if(hours > 5 && hours < 12) {
			return "morning";
		}
		else if(hours > 11 && hours < 18) {
			return "sunrise";
		}
		else {
			return "night";
		}
	}
	
};

