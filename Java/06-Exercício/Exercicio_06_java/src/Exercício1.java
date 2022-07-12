import java.util.Scanner;

public class Exercício1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numero;


            System.out.println("Digite um numerous");
           numero = entrada.nextInt();


        for (int i = 0; i <= 10; i++) {
            System.out.println(numero+ " x " + i + " = " + (numero * i));
        }

        /*Não consegui fazer o calculo da raiz =[*/


        for(double i = 0; i < numero ; i++){

        }
        System.out.println("raiz = "+numero);



        if (numero % 2 == 0)
            System.out.println(numero + " é par");
        else
            System.out.println(numero + " é impar");
        entrada.close();
        }

    }

