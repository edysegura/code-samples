/**
 *
 * Uso da API Scanner
 * @author Edy Segura, edy@segura.pro.br
 *
 */
import java.util.Scanner;

public class EntradaSaida {
	public static void main(String[] args) {
		System.out.println("Ola!");
		System.out.print("Informe um numero inteiro: ");
		
		Scanner s = new Scanner(System.in); //uso da API para entrada de dados
		int valor = s.nextInt();
		
		System.out.println("Valor digitado = " + valor);
	}
}