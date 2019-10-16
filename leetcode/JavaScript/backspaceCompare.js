/*
Backspace String Compare
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:
1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.

Follow up:
Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    // Test cases
    if (S == "#") {
        S = "";
    } else {
        for(let i = 0; i < S.length; i++) {
            if(S[i] == "#") {
                S = S.substring(0, i-1) + S.substring(i+1);
                i = 0;
            }
        }
        
        while(S[0] == "#") {
            S = S.substring(1);
        }
    }
    
    if (T == "#") {
        T = "";
    } else {
        for(let i = 0; i < T.length; i++) {
            if(T[i] == "#") {
                T = T.substring(0, i-1) + T.substring(i+1);
                i = 0;
            }
        }
        
        while(T[0] == "#") {
            T = T.substring(1);
        }
    }
    
    return (S == T ? true : false);
}
