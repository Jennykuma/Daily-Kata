/*
Is it a palindrome?
Level: 8 kyu
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
  return x.split('').reverse().join('').toLowerCase() == x.toLowerCase() ? true : false;
}
