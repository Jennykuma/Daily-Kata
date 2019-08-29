/*
Find the stray number
Level: 7 kyu
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  var counter = {};
  for(var i = 0; i < numbers.length; i++){
      if(!counter.hasOwnProperty(numbers[i])){
        counter[numbers[i]] = 1;
      } else {
        counter[numbers[i]]++;
      }
  }
  for(var number in counter){
    if(counter[number] == 1){
      return parseInt(number);
    }
  }
}
