/*
Convert string to camel case
Level: 6 kyu
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
  return str.split(/[-_]/)[0] + str.split(/[-_]/).slice(1).map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join('');
}
