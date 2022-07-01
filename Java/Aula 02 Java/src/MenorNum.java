import java.util.Scanner;

public class MenorNum {
    public static void main(String[] args) {
        System.out.println("Digite  numeros");
        Scanner entrada = new Scanner(System.in);
        int num, maior, menor ;
        System.out.println("Digite  numeros");
        num = entrada.nextInt();
        maior = entrada.nextInt();
        menor = entrada.nextInt();

        while (num != 0) {
            int numero = num % 10;
            if (numero < menor)
                menor = numero;

            else if(numero > maior)
                maior = numero;
            num = num / 10;
        }
        System.out.println("Menor numero :" +menor);
        System.out.println("Maior numero :" +maior);
        entrada.close();
    }
    }