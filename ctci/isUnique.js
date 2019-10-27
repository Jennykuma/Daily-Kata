/*
isUnique
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

function isUnique(str) {
    if(str.length == 0 || str.length == 1) { return true; } // Assumming an empty string is unique
    str = [...str].sort();
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isUnique(""));
console.log(isUnique("j"));
console.log(isUnique("jy"));
console.log(isUnique("jyj"));
console.log(isUnique("jeny"));