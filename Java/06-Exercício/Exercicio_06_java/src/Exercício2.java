import java.util.Scanner;

public class Exercício2 {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        int media = 0;
        int[] numeros = new int[8];

        // tamanho do vetor
        int notas = numeros.length;

        for (int i = 0; i < notas; i++) {
            System.out.println("Digite suas notas:");
            numeros[i] = entrada.nextInt();
        }
        for (int i = 0; i < notas; i++) {
            media += numeros[i];
        }
        System.out.println("A sua media foi :" + media / notas);
    }
}