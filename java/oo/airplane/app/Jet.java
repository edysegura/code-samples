/** * * Airplane Class * @author Edy Segura, edy@segura.pro.br * */package airplane;import airplane.Airplane;public class Jet extends Airplane {		public void setSpeed(int speed) {		super.setSpeed(speed * 2);	}		public void accelerate() {		super.setSpeed(getSpeed() * 2);	}	}