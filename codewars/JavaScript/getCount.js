/*
Vowels Count
Level: 7 kyu
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = 0;

    str.split('').map(function (letter) {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            vowelsCount++;
        }
    });

    return vowelsCount;
}

// New solution 2/2/2021
function getCount(str) {
  vowelsCount = 0
  vowelsCount = str.length - str.replace(/a|e|i|o|u/g,'').length 
  return vowelsCount
}