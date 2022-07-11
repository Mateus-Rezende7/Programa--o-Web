import java.util.Arrays;

public class Exercicio4 {

    public static void main(String[] args)  {
        //declarar o arrays
        int[] ArrayA = {40,50,60,22,22,50};
        int[] ArrayB = {90,80,60,50,220};
        //Criando novo array jutando os 2 primeiros array
        int ArrayC = ArrayA.length + ArrayA.length;

        int[] juntar = new int[ArrayC];
        int posição = 0;

        //juntando os arrays
        for (int sequencia : ArrayA)
        {
            juntar[posição ] = sequencia;
            posição ++;
        }
        for (int sequencia : ArrayB)
        {
            juntar[posição ] = sequencia;
            posição ++;
        }
        //Usando o toString para retorna o ArrayC que foi criado
        System.out.println("Sequencia: " + Arrays.toString(juntar));
    }
}