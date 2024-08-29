/**
 * Problem 9: Custom Sorting
 * 
 * Given a list students, return the names of students who have a grade above 90 in alphabetical order.
 * Use the .map, .filter, and .sort functions.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}] -> ["Peter", "Raman"]
*/
function problem(students) {
    let a = students.filter((item) => item.grade > 90);
    let b =[];
    for (let i = 0;i<a.length;i++){
        b.push(a[i].name);
    }
    return b.sort();
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}], ["Peter", "Raman"]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], ["Pattis", "Peter"]],
    [[{name: "Chase", grade: 89}], []]
]

module.exports = {problem, tests};