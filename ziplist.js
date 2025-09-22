"use strict";
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];
console.log('Test');
function zipList() {
    const out = [];
    for (let i = 0; i < Math.min(numbers.length, letters.length); i++) {
        out.push(numbers[i], letters[i]);
    }
    return out;
}
function zipListReduce() {
    return numbers
        .slice(0, Math.min(numbers.length, letters.length))
        .reduce((acc, _item, // type is fine to leave as number
    i) => {
        acc.push(numbers[i], letters[i]);
        return acc;
    }, []);
}
console.log(zipList());
console.log(zipListReduce());
