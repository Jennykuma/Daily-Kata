import java.util.Scanner;

public class r2 {
    public static void main(String[] args) {

        Scanner kb = new Scanner(System.in);
        int r1 = kb.nextInt();
        int s1 = kb.nextInt();
        kb.close();

        int r2 = (2 * s1) - r1;
        System.out.println(r2);

    }
}