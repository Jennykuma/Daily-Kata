/*
Char Code Calculation
Level: 7 kyu
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

Examples:
Test.assertEquals(calc('ABC'), 6);
Test.assertEquals(calc('abcdef'), 6);
Test.assertEquals(calc('ifkhchlhfd'), 6); 
Test.assertEquals(calc('aaaaaddddr'), 30); 
Test.assertEquals(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
*/

function calc(x){
  total1 = x.split('').map(x => x.charCodeAt()).join('').split('').map(Number).reduce((acc, current) => acc + current)
  total2 = x.split('').map(x => x.charCodeAt()).join('').replace(/7/g,'1').split('').map(Number).reduce((acc, current) => acc + current) // o god this is nasty
  return (total1 - total2)
}