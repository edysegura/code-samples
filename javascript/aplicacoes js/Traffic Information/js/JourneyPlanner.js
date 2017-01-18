/**
 * JavaScript Document for index.html
 */
var JourneyPlanner = {

	directionDisplay: null,
	directionsService: new google.maps.DirectionsService(),
	map: null,

	init: function () {
		JourneyPlanner.setForm();
	},

	setForm: function () {
		var form = document.forms[0];
		form.onsubmit = function () {
			var inputStart, inputEnd;

			inputStart = document.getElementById('startPoint');
			inputEnd = document.getElementById('endPoint');

			if ((inputStart && inputEnd) && (inputStart.value != '' && inputEnd.value != '')) {
				var params = {
					startPoint: inputStart.value,
					endPoint: inputEnd.value
				};
				//if(!JourneyPlanner.map) {
				JourneyPlanner.initializeMap();
				//}
				JourneyPlanner.getDirection(params);
			}

			return false;
		}
	},

	initializeMap: function () {
		var defaultLocation = new google.maps.LatLng(-22.2341204, -45.9332569); //Pouso Alegre - Brazil
		//var defaultLocation = new google.maps.LatLng(1.2894365, 103.819836); //Singapore
		var myOptions = {
			zoom: 4,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: defaultLocation
		}
		JourneyPlanner.directionsDisplay = new google.maps.DirectionsRenderer();
		JourneyPlanner.map = new google.maps.Map(document.getElementById("map"), myOptions);
		JourneyPlanner.directionsDisplay.setMap(JourneyPlanner.map);
	},

	getDirection: function (params) {
		var request = JourneyPlanner.getDirectionsRequest(params);
		JourneyPlanner.directionsService.route(request, JourneyPlanner.showJourney);
	},

	showJourney: function (result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			JourneyPlanner.directionsDisplay.setDirections(result);
			JourneyPlanner.showJourneyInfo(result);
		}
	},

	showJourneyInfo: function (result) {
		var divJourneyInfo = document.getElementById('journey-info');
		if (divJourneyInfo) {
			var spanDuration = document.getElementById('duration'),
				spanDistance = document.getElementById('distance');
			if (spanDuration && spanDistance) {
				spanDuration.innerHTML = result.routes[0].legs[0].duration.text;
				spanDistance.innerHTML = result.routes[0].legs[0].distance.text;
			}
			divJourneyInfo.style.display = "block";
		}
		//show traffic cam
		var path = result.routes[0].overview_path;
		var middle = parseInt(path.length / 2);
		var addressLatLng = new google.maps.LatLng(path[middle].lat(), path[middle].lng());
		JourneyPlanner.showTrafficCam(addressLatLng);
	},

	showTrafficCam: function (addressLatLng) {
		var contentString = '<div id="content"><img src="images/transito.jpg" alt="" /></div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: addressLatLng,
			map: JourneyPlanner.map,
			icon: "images/camera.png",
			title: "Traffic Camera"
		});

		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(JourneyPlanner.map, marker);
		});
	},

	getDirectionsRequest: function (params) {
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