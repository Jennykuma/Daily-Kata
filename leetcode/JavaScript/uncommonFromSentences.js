/*
Uncommon Words from Two Sentences
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
Return a list of all uncommon words. 
You may return the list in any order.

Example 1:
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:
Input: A = "apple apple", B = "banana"
Output: ["banana"]
 
Note:
0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var result = [];
    var wordDict = {};
    
    var aArray = A.split(" ");
    var bArray = B.split(" ");
    
    for(let i = 0; i < aArray.length; i++) {
        if(wordDict[aArray[i]] === undefined) {
            wordDict[aArray[i]] = 1;
        } else {
            wordDict[aArray[i]]++;
        }
    }
    
    for(let i = 0; i < bArray.length; i++) {
        if(wordDict[bArray[i]] === undefined) {
            wordDict[bArray[i]] = 1;
        } else {
            wordDict[bArray[i]]++;
        }
    }
    
    for(const word in wordDict) {
        if(wordDict[word] == 1) {
            result.push(word);
        }
    }
    
    return result;
};
