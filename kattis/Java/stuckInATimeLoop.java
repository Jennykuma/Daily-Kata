import java.util.Scanner;

public class stuckInATimeLoop {
    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        int input = kb.nextInt();

        for(int i = 1; i <= input; i++) {
            System.out.println(i + " Abracadabra");
        }
    }
}