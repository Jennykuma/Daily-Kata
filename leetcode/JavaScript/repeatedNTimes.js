/*
N-Repeated Element in Size 2N Array
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
Input: [1,2,3,3]
Output: 3

Example 2:
Input: [2,1,2,5,3,2]
Output: 2

Example 3:
Input: [5,1,5,2,5,3,5,4]
Output: 5

Note:
4 <= A.length <= 10000
0 <= A[i] < 10000
A.length is even
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    // iterate through the array 
    // add the elements to the hash table 
    // compare the elements in the hash table to N
    // if it is == to N, then return the element.
    
    var numObj = {};
    
    for(let i = 0; i < A.length; i++) {
        if(numObj[A[i]] == undefined) {
            numObj[A[i]] = 1;
        } else {
            numObj[A[i]] += 1;
            if(numObj[A[i]] === (A.length/2)) {
                return A[i];
            }
        }
    }
};
