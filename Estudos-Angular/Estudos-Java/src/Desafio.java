import java.io.IOException;
import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);

        while ( hora < 1) {
            String[] relogio = leitor.nextLine().split(":");
            int hora = Integer.parseInt(relogio[0]);
            int min = Integer.parseInt(relogio[1]);
            System.out.println(hora);
            switch ( hora ) {
                case(7):
                    int max = min - 60;
                    System.out.println("Atraso maximo: " + min);
                    break;
                case(8):
                    System.out.println("Atraso maximo: " + min);
                    break;
                case(9):
                    System.out.println("Atraso maximo: " + min);
                    break;
                default: System.out.println("Atraso maximo: 0");
            }
        }
    }

}