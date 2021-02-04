/*
Unique in Order
Level: 6 kyu
Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function (iterable) {
    if (iterable.length === 0) {
        return [];
    }
    if (typeof iterable === "string") {
        iterable = iterable.split(''); // create a character array if it is of type string, else carry on
    }

    var itemsList = [];
    itemsList.push(iterable[0]); // add the first letter into the items list
    iterable.map(function (letter) {
        if (itemsList[itemsList.length - 1] != letter) {
            itemsList.push(letter); // if the letter is not the same as the last in itemslist, then add it to itemslist
        }
    });
    return itemsList;
}

// New solution 2/3/2021
var uniqueInOrder=function(iterable){
    return [...iterable].filter((currentLetter, letterIndex) => currentLetter != iterable[letterIndex-1])
  }