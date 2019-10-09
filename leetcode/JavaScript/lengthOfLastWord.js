/*
Length of Last Word
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:
Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length == 0) { return 0; }
    var sArray = s.split(' ');
    while(sArray[sArray.length-1] == '') {
        sArray.pop();
        if(sArray.length == 0) { return 0; }
    }
    return sArray[sArray.length-1].length;
};
