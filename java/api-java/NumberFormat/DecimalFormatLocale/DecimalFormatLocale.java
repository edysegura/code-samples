/**
 *
 * Exemplo da API NumberFormat
 * @author Edy Segura, edy@segura.pro.br
 *
 */

import java.text.NumberFormat; 
import java.util.Locale;

public class DecimalFormatLocale {
	public static void main (String[] args) {
		double money = 1234.56;
		
		NumberFormat f1 = NumberFormat.getInstance();
		System.out.println(f1.format(money));
		
		NumberFormat f2 = NumberFormat.getInstance(Locale.US);
		System.out.println(f2.format(money));
		
	}
}
