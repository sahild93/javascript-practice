/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let a = str.split('').filter(function(item) {
        return item != ' ';
    })
    a = a.join('').toLowerCase().split('');
    let b = a.toReversed()
    for (let i=0;i<a.length;i++){
        if (a[i] != b[i]){
            return false;
        }
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};