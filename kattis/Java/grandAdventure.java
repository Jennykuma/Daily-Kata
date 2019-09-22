import java.util.Scanner;
import java.util.*;

public class grandAdventure {
    public static void main(String[] args) {

        Scanner kb = new Scanner(System.in);
        int numAdventures = Integer.parseInt(kb.nextLine());

        while(numAdventures > 0) {
            String[] adventureArray = kb.nextLine().split("");
            Stack<String> backpack = new Stack<String>();
            boolean goodJourney = true;

            for(int i = 0; i < adventureArray.length; i++) {
                if(adventureArray[i].equals("$") || adventureArray[i].equals("*") || adventureArray[i].equals("|")) {
                    backpack.push(adventureArray[i]);
                } else if (adventureArray[i].equals("t")) {
                    if(backpack.size() == 0 || !backpack.peek().equals("|")) {
                        goodJourney = false;
                        break;
                    } else {
                        backpack.pop();
                    }
                } else if (adventureArray[i].equals("b")) {
                    if(backpack.size() == 0 || !backpack.peek().equals("$")) {
                        goodJourney = false;
                        break;
                    } else {
                        backpack.pop();
                    }
                } else if (adventureArray[i].equals("j")) {
                    if(backpack.size() == 0 || !backpack.peek().equals("*")) {
                        goodJourney = false;
                        break;
                    } else {
                        backpack.pop();
                    }
                }
            }   
                
            if (backpack.size() == 0 && goodJourney) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
            numAdventures--;
        }
    }
}