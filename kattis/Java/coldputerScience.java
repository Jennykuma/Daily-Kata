import java.util.Scanner;

public class coldputerScience {
    public static void main(String[] args) {

        Scanner kb = new Scanner(System.in);
        int numTemps = kb.nextInt();
        int negTemps = 0;
        for(int i = 0; i < numTemps; i++) {
            if(kb.nextInt() < 0) {
                negTemps++;
            }
        }
        kb.close();

        System.out.println(negTemps);
    }
}