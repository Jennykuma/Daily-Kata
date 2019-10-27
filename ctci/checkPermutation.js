/*
Check Permutations
Given two strings, write a method to decide if one is a permutation of the other
*/

function checkPermutation(s1, s2) {
    if(s1.length != s2.length) { return false; }
    s1 = [...s1].sort().join();
    s2 = [...s2].sort().join();
    return s1 === s2 ? true : false;
}

console.log(checkPermutation("", "jen")); // false
console.log(checkPermutation("ej", "jen")); // false
console.log(checkPermutation("ejn", "jen")); // true

function checkPermutation2(s1, s2) {
    if(s1.length != s2.length) { return false; }
    var s1Letters = {};

    for(let i = 0; i < s1.length; i++) {
        if(s1Letters[s1[i]] == undefined) {
            s1Letters[s1[i]] = 1;
        } else {
            s1Letters[s1[i]]++;
        }
    }

    for(let i = 0; i < s2.length; i++) {
        if(s1Letters[s2[i]] != undefined) {
            delete s1Letters[s2[i]];
        }
    }

    return Object.keys(s1Letters).length == 0 ? true : false;
}

console.log(checkPermutation2("jen", "ejn")); // true