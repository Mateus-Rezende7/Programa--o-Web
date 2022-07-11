
public class Exercício03 {
    public static void main(String[] args)
    {
        int[] numeros = new int[10];
        System.out.println("Numeros aleatorios ");
        for (int a = 0; a < numeros.length; a++)
        {
            numeros[a] = (int) (Math.random() * 1000 );
            System.out.println(numeros[a]);
        }
        int menor = 100;

        for (int i = 0; i < numeros.length; i++)
        {
            if (numeros[i] < menor)
            {
                menor = numeros[i];
            }
        }

        System.out.println("Menor:" + menor);
    }

    }

