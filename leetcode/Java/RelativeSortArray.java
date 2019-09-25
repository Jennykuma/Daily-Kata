/*
Relative Sort Array
Given two arrays arr1 and arr2, the elements of arr2 are distinct, 
and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order. 

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Constraints:
- arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- Each arr2[i] is distinct.
- Each arr2[i] is in arr1.
*/

class RelativeSortArray {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        
        int[] resultArray = new int[arr1.length];
        
        LinkedHashMap<Integer, ArrayList<Integer>> arr2map = new LinkedHashMap<Integer, ArrayList<Integer>>();
        ArrayList<Integer> arr2missing = new ArrayList<Integer>();
        
        for(int i = 0; i < arr2.length; i++) {
            arr2map.put(arr2[i], new ArrayList<Integer>());
        }
        
        for(int j = 0; j < arr1.length; j++) {
            if(arr2map.get(arr1[j]) != null) {
                arr2map.get(arr1[j]).add(arr1[j]);
            } else {
                arr2missing.add(arr1[j]);
            }
        }
        
        Collections.sort(arr2missing);
        
        int idx = 0;
        for(Map.Entry<Integer, ArrayList<Integer>> num : arr2map.entrySet()) {
            ArrayList<Integer> numArray = num.getValue();
            for(int k = 0; k < numArray.size(); k++) {
                resultArray[idx] = (numArray.get(k));  
                idx++;
            }
        }
        
        for(int m = 0; m < arr2missing.size(); m++){
            resultArray[idx] = arr2missing.get(m);
            idx++;
        }
    
        return resultArray;
    }
}