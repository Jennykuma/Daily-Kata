/*
Sum Mixed Array
Level: 8 kyu

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Example tests:
Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
*/

function sumMix(x){
  return x.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
}
