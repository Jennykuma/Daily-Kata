/*
Counting Duplicates
Level: 6 kyu
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Examples:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  var duplicates = {};
  var textString = text.toLowerCase().split('');
  var counter = 0;
  
  for(var i = 0; i < textString.length; i++){
    if(!duplicates.hasOwnProperty(textString[i])){
      duplicates[textString[i]] = 1;
    } else {
      duplicates[textString[i]]++;
    }
  }
  
  Object.keys(duplicates).map(function(key, idx) {
    if (duplicates[key] > 1){
      counter++;
    }
  });
  return counter;
}