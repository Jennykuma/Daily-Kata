/*
Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: 
[−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseInt = 0;
    if(x >= 0) {
         reverseInt = Number(x.toString().split('').reverse().join(""));
    } else {
        var absNum = x * -1;
        reverseInt =  (-1 * Number(absNum.toString().split('').reverse().join("")));
    }
    
    if (reverseInt > Math.pow(2,31)) {
        reverseInt = 0;
    } else if (reverseInt < (-1 * (Math.pow(2,31)))) {
        reverseInt = 0;
    }
    
    return reverseInt;
};
