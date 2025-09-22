console.log("START");
const numbers: number[] = [1, 2, 3];
const letters: string[] = ["a", "b", "c"];

function zipList(): (number | string)[] {
  const out: (number | string)[] = [];
  for (let i = 0; i < Math.min(numbers.length, letters.length); i++) {
    out.push(numbers[i], letters[i]);
  }
  return out;
}

console.log(zipList()); // -> [1, 'a', 2, 'b', 3, 'c']
