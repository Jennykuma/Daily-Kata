import java.util.Scanner;

public class bossBattle {
    public static void main(String[] args) {

        Scanner kb = new Scanner(System.in);
        int pillars = kb.nextInt();
        kb.close();

        if(pillars > 2) {
            System.out.println(pillars-2);
        } else {
            System.out.println(1);
        }
    }
}