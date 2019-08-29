/*
Rot13
Level: 5 kyu
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  var result = "";
  var messageArray = message.split('');
  for(var i = 0; i < messageArray.length; i++){
    if(/[a-mA-M]/.test(messageArray[i])){
      result += String.fromCharCode(messageArray[i].charCodeAt(0) + 13);
    } else if (/[n-zN-Z]/.test(messageArray[i])){
      result += String.fromCharCode(messageArray[i].charCodeAt(0) - 13);
    } else {
      result += messageArray[i];
    }
  }
  return result;
}
