/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let c =0;
    for (let i=0;i<numbers.length;i++){
        for (let j=0;j<numbers.length;j++){
            if (numbers[i] == numbers[j]){
                c++;
            }
        }
        if (c >= numbers.length / 2){
            return numbers[i]
        }
        c = 0;
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};