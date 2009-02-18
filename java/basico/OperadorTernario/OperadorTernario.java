/**
 *
 * Operador Ternario
 * @author Edy Segura, edy@segura.pro.br
 *
 */
import java.util.Scanner;

public class OperadorTernario {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Preco Alcool: ");
		double alcool = sc.nextDouble();
		
		System.out.print("Preco Gasolina: ");
		double gasolina = sc.nextDouble();
		
		// atribui o maior valor
		String resultado = (gasolina > alcool) ? "alcool" : "gasolina";
		
		// exibe qual combustível é mais vantajoso
		System.out.println("E mais vantajoso abastecer com " + resultado + ".");
	} 
}