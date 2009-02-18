/**
 *
 * Operadores Logicos
 * @author Edy Segura, edy@segura.pro.br
 *
 */
public class OperadoresLogicos {
	public static void main (String[] args) {
		// declara e inicializa algumas variáveis
		boolean a = true, b = false;
		
		// exibe valores de a e b
		System.out.println("a = " + a + " b = " + b);
		
		// realiza as operações lógicas
		System.out.println("a && b = " + (a && b));
		System.out.println("a || b = " + (a || b));
		System.out.println(" !a = " + (!a));
		System.out.println(" !b = " + (!b));
	}
}