/**
 *
 * Objeto Literal Regional
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Regional = {

	strokeStyle: 'rgb(87,90,183)',
	lineWidth: 2,
	canvas: 'regionalviewer',
	icon: PreloadImages.anelIcon,
	
	backgroundImage: PreloadImages.mapaCidadeSP,
	imagePositionX : 171,
	imagePositionY : 0,
	
	lines: [
		//line A1 to A2
		{
			x1: 355,
			x2: 390,
			y1: 326,
			y2: 80,
			
			link: {
				x: 365,
				y: 200,
				location: 'ring-conection.html?sourceId=1&targetId=2'
			}
		},
		
		//line A1 to A3
		{
			x1: 355,
			x2: 182,
			y1: 326,
			y2: 370,
			
			link: {
				x: 264,
				y: 340,
				location: 'ring-conection.html?sourceId=1&targetId=3'
			}
		},
		
		//line A1 to A4
		{
			x1: 355,
			x2: 182,
			y1: 326,
			y2: 80,
			
			link: {
				x: 264,
				y: 200,
				location: 'ring-conection.html?sourceId=1&targetId=4'
			}
		},
		
		//line A2 to A4
		{
			x1: 390,
			x2: 182,
			y1: 80,
			y2: 80,
			
			link: {
				x: 275,
				y: 73,
				location: 'ring-conection.html?sourceId=2&targetId=4'
			}
		},
		
		//line A3 to A4
		{
			x1: 182,
			x2: 182,
			y1: 80,
			y2: 370,
			
			link: {
				x: 175,
				y: 220,
				location: 'regional-conection.html?sourceId=3&targetId=4'
			}
		}
	],
	
	points: [
		{
			label     : 'Anel 1',
			positionX : 320,
			positionY : 300,
			status    : 'ok',
			className : 'anel',
			icon      : PreloadImages.anelIcon.cloneNode(true),
			location  : 'list-visao-anel.html'
		},
		
		{
			label     : 'Anel 2',
			positionX : 350,
			positionY : 55,
			status    : 'ok',
			className : 'anel',
			icon      : PreloadImages.anelIcon.cloneNode(true),
			location  : 'list-visao-anel.html'
		},
		
		{
			label     : 'Anel 3',
			positionX : 145,
			positionY : 340,
			status    : 'ok',
			className : 'anel',
			icon      : PreloadImages.anelIcon.cloneNode(true),
		  location  : 'list-visao-anel.html'
		},
		
		{
			label     : 'Anel 4',
			positionX : 145,
			positionY : 55,
			status    : 'ok',
			className : 'anel',
			icon      : PreloadImages.anelIcon.cloneNode(true),
			location  : 'list-visao-anel.html'
		}
	]
	
};
