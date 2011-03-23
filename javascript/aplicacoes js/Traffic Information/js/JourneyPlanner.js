/**
 * JavaScript Document for index.html
 */
var JourneyPlanner = {

	directionDisplay: null,
	directionsService: new google.maps.DirectionsService(),
	map: null,

	init: function() {
		JourneyPlanner.setForm();
	},
	
	setForm: function() {
		var form = document.forms[0];
		form.onsubmit = function() {
			var inputStart, inputEnd;
			
			inputStart = document.getElementById('startPoint');
			inputEnd   = document.getElementById('endPoint');
			
			if((inputStart && inputEnd) && (inputStart.value != '' && inputEnd.value != '')) {
				var params = {
					startPoint: inputStart.value,
					endPoint: inputEnd.value
				};
				if(!JourneyPlanner.map) {
					JourneyPlanner.initializeMap();
				}
				JourneyPlanner.getDirection(params);
			}
			
			return false;
		}
	},
	
	initializeMap: function() {
		var defaultLocation = new google.maps.LatLng(-22.2341204, -45.9332569); //Pouso Alegre - Brazil
		//var defaultLocation = new google.maps.LatLng(1.2894365, 103.819836); //Singapore
		var myOptions = {
			zoom:4,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: defaultLocation
		}
		JourneyPlanner.directionsDisplay = new google.maps.DirectionsRenderer();
		JourneyPlanner.map = new google.maps.Map(document.getElementById("map"), myOptions);
		JourneyPlanner.directionsDisplay.setMap(JourneyPlanner.map);
	},
	
	getDirection: function(params) {
		var request = JourneyPlanner.getDirectionsRequest(params);
		JourneyPlanner.directionsService.route(request, JourneyPlanner.showJourney);
	},
	
	showJourney: function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
      JourneyPlanner.directionsDisplay.setDirections(result);
    }
	},
	
	getDirectionsRequest: function(params) {
		var request = {
			origin: params.startPoint,
			destination: params.endPoint,
			//region: 'SG',
			provideRouteAlternatives: false,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		return request;
	}
	
};

//inicialization
window.onload = JourneyPlanner.init;