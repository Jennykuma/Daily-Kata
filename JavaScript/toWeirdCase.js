/*
WeIrD StRiNg CaSe
Level: 6 kyu

* WARNING: I'M NOT TOO PROUD OF THIS ONE. I WILL COME UP WITH A BETTER SOLUTION!!! *

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
  var wordArray = string.split(' ');
  var result = "";
  for(var i = 0; i < wordArray.length; i++){
    for(var j = 0; j < wordArray[i].length; j++){
      if (j % 2 == 0) { result += wordArray[i][j].toUpperCase() }
      else { result += wordArray[i][j] }
    }
    result += " ";
  }
  return result.substring(0, result.length-1);
}
