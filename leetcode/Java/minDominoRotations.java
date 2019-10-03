/*
Minimum Domino Rotations For Equal Row
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino. 
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Example 1:
Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:
Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
 
Note:
1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000
*/

class Solution {
    public int minDominoRotations(int[] A, int[] B) {
        HashMap<Integer,Integer> a = new HashMap();
        HashMap<Integer, Integer> b = new HashMap();
        
        // Put it all into a hashmap
        for(int i = 0; i < A.length; i++) {
            if(!a.containsKey(A[i])) {
                a.put(A[i], 1);
            } else {
                int value = (int)a.get(A[i]);
                a.put(A[i], value+1);
            }
            
            if(!b.containsKey(B[i])) {
                b.put(B[i], 1);
            } else {
                int value = (int)b.get(B[i]);
                b.put(B[i], value+1);
            }
        }
        
        // This is where you see which array has the most duplicates and get the most duplicated element
        int[] iteratingArray = A;
        int[] comparingArray = B;
        int elementToCompareTo = 0;
        int highestCount = 0;
        for(Map.Entry<Integer, Integer> num : a.entrySet()) {
            if(num.getValue() > highestCount) {
                elementToCompareTo = num.getKey();
                highestCount = num.getValue();
            }
        }
        
        for(Map.Entry<Integer, Integer> num : b.entrySet()) {
            if(num.getValue() > highestCount) {
                elementToCompareTo = num.getKey();
                highestCount = num.getValue();
                iteratingArray = B;
                comparingArray = A;
            }
        }
        
        // perform rotations and count them
        int minRotations = 0;
        for(int i = 0; i < iteratingArray.length; i++) {
            if(iteratingArray[i] != elementToCompareTo) {
                iteratingArray[i] = comparingArray[i];
                // if the rotation doesn't equal to the element you're wanting to compare to
                // abort mission
                if(iteratingArray[i] != elementToCompareTo) {
                    return -1;
                }
                minRotations++;
            }
        }
        
        return minRotations;
    }
}
