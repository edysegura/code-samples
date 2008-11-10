/**
 *
 * Saída Formatada
 * @author Edy Segura, edy@segura.pro.br
 *
 */

import java.util.Scanner;

public class SaidaFormatada {
	public static void main(String[] args) {
		Scanner c = new Scanner(System.in);
		System.out.print("\nQual o numero inteiro para o limite? N: ");
		
		int limit = c.nextInt();
		int soma  = 0;
		
		for(int i=1; i<=limit; i++) {
			System.out.printf("%n%3da. soma parcial = %6d", i, soma);
			soma += i;
		}
		
		System.out.printf("%n%nTotal [0..%3d] = %d%n", limit, soma);
	}
}