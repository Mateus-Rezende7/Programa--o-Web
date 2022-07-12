public class Exercicio2 {

    public static void main(String[] args) {
        int numeros[][] = {{1, 0, 0, 0, 0}, {0, 1, 0, 0, 0}, {0, 0, 1, 0, 0}, {0, 0, 0, 1, 0}, {0, 0, 0, 0, 1}};
        int i, j;
        for (i = 0; i < numeros.length; i++) {
            for (j = 0; j < numeros.length; j++) {
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");

        }
    }
}