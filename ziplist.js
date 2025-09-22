"use strict";
console.log("START");
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
function zipList() {
    const out = [];
    for (let i = 0; i < Math.min(numbers.length, letters.length); i++) {
        out.push(numbers[i], letters[i]);
    }
    return out;
}
console.log(zipList()); // -> [1, 'a', 2, 'b', 3, 'c']
