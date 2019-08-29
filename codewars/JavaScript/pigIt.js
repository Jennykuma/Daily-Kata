/*
Simple Pig Latin
Level: 5 kyu
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
    var pigLatin = str.split(' ').map((word) => word.substring(1) + word[0] + "ay"); // Add the first letter and ay to the end of every word
    if (pigLatin[pigLatin.length - 1] === "!ay") { // if there is an !
        pigLatin[pigLatin.length - 1] = "!";
    } else if (pigLatin[pigLatin.length - 1] === "?ay") { // if there is a ?
        pigLatin[pigLatin.length - 1] = "?";
    }
    return pigLatin.join(" "); // Join it all together
}