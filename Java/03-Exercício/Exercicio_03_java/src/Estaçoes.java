import java.util.Scanner;
/*               Julho, Agosto e setembro: inverno.
         outubro, novembro e dezembro: primavera
        Janeiro, Fevereiro e março: verão*/
public class Estaçoes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String mes;
        System.out.println("Digite um mês");
        mes = entrada.nextLine();
        String estação = mes;


        if (estação.equalsIgnoreCase("julho") || estação.equalsIgnoreCase("agosto") || estação.equalsIgnoreCase("Setembro")) {
            System.out.println("O mês de " + estação + " corresponde a estação inverno");
        } else {
            if (estação.equalsIgnoreCase("outubro") || estação.equalsIgnoreCase("novembro") || estação.equalsIgnoreCase("dezembro")) {

                System.out.println("O mês de " + estação + " corresponde a estação primavera");
            } else {
                System.out.println("O mês de " + estação + " corresponde ao verão");
            }

            entrada.close();
        }
    }
}