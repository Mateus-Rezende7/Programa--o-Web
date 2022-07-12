import java.util.Scanner;

public class Exercício2 {
    public static void main (String[]args){
        Scanner entrada = new Scanner(System.in);
        String valores;
        int base, altura, resultado;

        System.out.println("Digite seu nome:");
        valores = entrada.nextLine();

        System.out.println("Digite a base:");
        base = entrada.nextInt();

        System.out.println("Digite a altura:");
        altura = entrada.nextInt();

        resultado = (base*altura)/2;

        System.out.println(valores+" a base do seu trianfgulo retangulo é:"+resultado);
        entrada.close();
    }
}
