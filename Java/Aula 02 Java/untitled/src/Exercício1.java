import java.util.Scanner;
public class Exercício1 {
    public static void main (String[]args){
     Scanner entrada = new Scanner(System.in);
        int media = 0;
        int[] valores = new int[4];

        int notas = valores.length;

        for(int i = 0; i < notas; i++){
            System.out.println("Digite suas notas");
            valores[i] = entrada.nextInt();
        }

        for( int i = 0; i < notas; i++){
            media += valores[i];
        }
        System.out.println("Você obteve uma media de:" +media / notas);
        entrada.close();
    }
}
