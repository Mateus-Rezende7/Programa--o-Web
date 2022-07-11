import java.util.Scanner;
public class Exercicio2 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        // declaração de vetor
        String nomes[] = new String[5];

        // entrada dos nomes
        for (int i = 0; i < nomes.length; i++) {
            System.out.println("Digite um nome");
            nomes[i] = entrada.nextLine();
        }

        // saída dos nomes
        for (int i = 4; i >= 0 ; i--) {
            System.out.println(nomes[i]);
        }



    }
}