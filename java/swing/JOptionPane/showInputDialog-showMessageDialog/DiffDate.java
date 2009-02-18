/**
 *
 * Exemplo de uso do método showInputDialog
 * @author  Realm
 *
 */
 
import java.util.Date;
import javax.swing.JOptionPane;

public class DiffDate {

	public static void main(String[] args) {
		String nascimento = JOptionPane.showInputDialog(null, "Insira a data de nascimento no formato mm/dd/aaaa: ");
		
		Date dataAtual = new Date();
		Date dataNascimento = new Date(nascimento);
		
		String dtAtualString = dataAtual.toString();
		String dtNascimentoString = dataNascimento.toString();
		
		long dtAtualLong = dataAtual.getTime();
		long dtNascimentoLong = dataNascimento.getTime();
		long idadeLong = dtAtualLong - dtNascimentoLong;
		
		Date idade = new Date(idadeLong);
		int totalMeses = ((idade.getYear() - 71) * 12) + idade.getMonth();
		
		String output = "Data Atual: " + dtAtualString
		+ "\nData de Nascimento: " + dtNascimentoString
		+ "\nIdade: " + (idade.getYear() - 70) + " ano(s) " + idade.getMonth() + " mese(s) " + idade.getDay() + " dia(s) "
		+ "\nTotal de Meses: " + totalMeses;
		
		JOptionPane.showMessageDialog(null, output);
	}
}