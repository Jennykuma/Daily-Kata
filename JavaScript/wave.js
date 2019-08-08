/*
Mexican Wave
Level: 6 kyu
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

Example
wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
*/

const wave = (str) => {
  var result = [];
  str.split("").map((letter, i) => letter == ' ' ? ' ' : result.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i+1)));
  return result;
}
