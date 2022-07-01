import java.util.Scanner;
public class ImparPar {
public static void main(String[]args) {

    Scanner entrada = new Scanner(System.in);
    int numero;
    System.out.println("Par ou impar");
    System.out.println("Informe um numero");
    numero = entrada.nextInt();

    while(numero != 0) {

        if (numero % 2 == 0) {
            System.out.println("numero" + numero + "é PAR");
        } else {
            System.out.println("numero" + numero + "é IMPAR");
        }

    }

}
}
