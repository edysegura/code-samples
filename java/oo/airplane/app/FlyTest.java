/**
 *
 * FlyTest
 * @author Edy Segura, edy@segura.pro.br
 *
 */
 
public class FlyTest {
	public static void main (String[] args) {
		Airplane boing = new Airplane();
		Jet biplane = new Jet();
		
		boing.setSpeed(422);
		biplane.setSpeed(422);
		
		System.out.println("\nVelocidade do boing: " + boing.getSpeed());
		System.out.println("Velocidade do biplane: " + biplane.getSpeed());
		System.out.println("\nAumentando a velocidade do biplane");
		
		biplane.accelerate();
		
		System.out.println("Velocidade do biplane: " + biplane.getSpeed());
	}
}