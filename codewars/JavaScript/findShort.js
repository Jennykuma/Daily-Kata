/* 
Shortest Word
Level: 7 kyu
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
    // Split by space into an array
    // Use reduce to get the shortest word in the array
    // Return the length of the shortest word
    return s.split(' ').reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }).length;
}