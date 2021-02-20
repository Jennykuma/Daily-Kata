/*
Alphabet War
Level: 7 kyu

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

w - 4
p - 3
b - 2
s - 1

The right side letters and their power:

m - 4
q - 3
d - 2
z - 1

The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight) {
  left = { w: 4, p: 3, b: 2, s: 1 }
  right = { m: 4, q: 3, d: 2, z: 1 }
  
  leftScore = 0
  rightScore = 0
  
  fight.split('').map((letter) => {
    if (letter in left)
      leftScore += left[letter]
    else if (letter in right)
      rightScore += right[letter]
  })
  
  return rightScore > leftScore ? "Right side wins!" : leftScore == rightScore ? "Let's fight again!" : "Left side wins!"
}