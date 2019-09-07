/*
First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var charArray = s.split('');
    var charDict = {};
    for(var i = 0; i < charArray.length; i++){
        if(!charDict.hasOwnProperty(charArray[i])) {
            charDict[charArray[i]] = 1;
        } else {
            charDict[charArray[i]]++;
        }
    }
    
    for(var letter in charDict) {
        if (charDict[letter] == 1) {
            return charArray.indexOf(letter);
        }
    }
    
    return -1;
};
