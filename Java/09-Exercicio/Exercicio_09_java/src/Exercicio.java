
import java.util.Scanner;
public class Exercicio {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String[] frutas = new String[5];

        for (int i = 0; i < frutas.length; i++) {
            System.out.println("Digite o nome de 5 frutas");
            frutas[i] = entrada.next();
        }
        System.out.println();
        for (int i = 0; i < frutas.length; i++) {
            System.out.println("As frutas foram armazenadas? " + frutas[i].isEmpty());

            if (frutas.length >= 3) {
                System.out.println("Tem menos de 3 letras");
            }
        }
        System.out.println();
        for (int i = 0; i < frutas.length; i++) {
            System.out.println("As frutas foram armazenadas? " + frutas[i].compareTo(frutas[4]));
        }
        System.out.println();
        for (int i = 0; i < frutas.length; i++) {
            System.out.println(frutas[i].toUpperCase() == frutas[i].toUpperCase());
        }
        System.out.println();
        for (int i = 0; i < frutas.length; i++) {
            System.out.println("Frutas sem espaços: " + frutas[i].trim());
        }
        System.out.println();

        for (int i = 0; i < frutas.length; i++) {
            System.out.print("Frutas pequenas" + frutas[i].replace(frutas[i], frutas[i].toLowerCase()));
        }
    }
}