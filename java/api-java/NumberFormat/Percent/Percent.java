/**
 *
 * Exemplo da API NumberFormat
 * @author Edy Segura, edy@segura.pro.br
 *
 */
 
import java.text.NumberFormat;

public class Percent {
	public static void main (String[] args) {
		NumberFormat f = NumberFormat.getPercentInstance();
		System.out.println(f.format(0.47));
	}
}