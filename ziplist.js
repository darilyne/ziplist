const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

function zipList() {
  const out = [];
  for (let i = 0; i < Math.min(numbers.length, letters.length); i++) {
    out.push(numbers[i], letters[i]);
  }
  return out;
}

console.log(zipList());

function zipListReduce() {
  return numbers
    .slice(0, Math.min(numbers.length, letters.length))
    .reduce((acc, _, i) => (acc.push(numbers[i], letters[i]), acc), []);
}

console.log(zipListReduce()); 