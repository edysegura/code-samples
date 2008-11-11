/**
 *
 * Exemplo da API DecimalFormat
 * @author Edy Segura, edy@segura.pro.br
 *
 */

import java.text.NumberFormat; 
import java.text.DecimalFormat;

public class DecimalFormatExample {
	public static void main (String[] args) {
		double money = 11550.37;
		
		NumberFormat formatter = new DecimalFormat("#,###.00");
		
		System.out.println(money);
		System.out.println(formatter.format(money));
	}
}
