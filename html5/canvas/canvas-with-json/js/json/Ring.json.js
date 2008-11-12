/**
 *
 * Objeto Literal Ring
 * @author: Edy Segura - edy@segura.pro.br
 *
 */

var Ring = {

	radius: 160,
	strokeStyle: 'rgb(8,206,8)',
	lineWidth: 5,
	
	name: '01 SAN0143',
	size: '10 G',
	shild: 'MS SP Ring',
	
	equipments: [
		{
			positionX: 130,
			positionY: 50,
			status   : 'ok',
			
			linkTop: {
				name: 'S502-4',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			},
			
			ringContent: ['SPO VM', 'HDX01'],
			
			linkBottom: {
				name: 'S501-4',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			}
		},
		
		{
			positionX: 100,
			positionY: 220,
			status   : 'not-ok',
			
			linkTop: {
				name: 'S504-8',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			},
			
			ringContent: ['SPO PO', 'ADM64-3'],
			
			linkBottom: {
				name: 'S503-8',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			}
		},
		
		{
			positionX: 410,
			positionY: 155,
			status   : 'ok',
			
			linkTop: {
				name: 'S5',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			},
			
			ringContent: ['SPO LI', 'HDX 01'],
			
			linkBottom: {
				name: 'S6',
				location: ['#985', '5ºAN/SL.TX', 'F. 6 BT.2-8', 'BAND.04', 'FIB. 41/42', 'POS. 5.6']
			}
		}
	]
	
};
