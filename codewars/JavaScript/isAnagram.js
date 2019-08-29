/*
Anagram Detection
Level: 7 kyu
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

var isAnagram = function(test, original) {
  var word1 = test.toLowerCase().split('').sort().join('');
  var word2 = original.toLowerCase().split('').sort().join('');
  if(word1 == word2) { return true; }
  else { return false; }
};
