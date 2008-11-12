/**
 *
 * Objeto Literal Ring
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var RedeSDH = {

	strokeStyle: 'rgb(87,90,183)',
	lineWidth: 2,
	canvas: 'redesdhviewer',
	icon: PreloadImages.regionalIcon,

	backgroundImage: PreloadImages.mapaSP,
	imagePositionX : 0,
	imagePositionY : 0,

	lines: [
		//line R1 to R2
		{
			x1: 288,
			x2: 288,
			y1: 188,
			y2: 88,
			
			link: {
				x: 242,
				y: 169,
				location: 'regional-conection.html?sourceId=1&targetId=2'
			}
		},
		
		//line R1 to R3
		{
			x1: 288,
			x2: 205,
			y1: 188,
			y2: 161,
			
			link: {
				x: 282,
				y: 130,
				location: 'regional-conection.html?sourceId=1&targetId=3'
			}
		},
		
		//line R2 to R3
		{
			x1: 288,
			x2: 205,
			y1: 88,
			y2: 161,
			
			link: {
				x: 240,
				y: 118,
				location: 'regional-conection.html?sourceId=2&targetId=3'
			}
		},
		
		//line R2 to R4
		{
			x1: 288,
			x2: 140,
			y1: 88,
			y2: 65,
			
			link: {
				x: 200,
				y: 68,
				location: 'regional-conection.html?sourceId=2&targetId=4'
			}
		},
		
		//line R3 to R4
		{
			x1: 205,
			x2: 140,
			y1: 161,
			y2: 65,
			
			link: {
				x: 168,
				y: 110,
				location: 'regional-conection.html?sourceId=3&targetId=4'
			}
		}
	],

	points: [
		{
			label     : 'Regional 1',
			positionX : 250,
			positionY : 160,
			status    : 'ok',
			className : 'regional',
			icon      : PreloadImages.regionalIcon.cloneNode(true),
			location  : 'list-regional.html'
		},
		
		{
			label     : 'Regional 2',
			positionX : 250,
			positionY : 60,
			status    : 'ok',
			className : 'regional',
			icon      : PreloadImages.regionalIcon.cloneNode(true),
			location  : 'list-regional.html'
		},
		
		{
			label     : 'Regional 3',
			positionX : 170,
			positionY : 135,
			status    : 'ok',
			className : 'regional',
			icon      : PreloadImages.regionalIcon.cloneNode(true),
		  location  : 'list-regional.html'
		},
		
		{
			label     : 'Regional 4',
			positionX : 100,
			positionY : 40,
			status    : 'ok',
			className : 'regional',
			icon      : PreloadImages.regionalIcon.cloneNode(true),
			location  : 'list-regional.html'
		}
	]

};
