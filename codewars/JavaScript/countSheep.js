/*
If you can't sleep, just count sheep!!
Level: 8 kyu
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
  var result = "";
  for(var sheep = 1; sheep <= num; sheep++){
    result += sheep + " sheep...";
  }
  return result;
}
