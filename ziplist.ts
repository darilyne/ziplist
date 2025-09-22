const numbers: number[] = [1, 2, 3];
const letters: string[] = ['a', 'b', 'c'];

console.log('Test');
function zipList(): (number | string)[] {
  const out: (number | string)[] = [];
  for (let i = 0; i < Math.min(numbers.length, letters.length); i++) {
    out.push(numbers[i], letters[i]);
  }
  return out;
}

function zipListReduce(): (number | string)[] {
  return numbers
    .slice(0, Math.min(numbers.length, letters.length))
    .reduce(
      (
        acc: (number | string)[],
        _item: number, // type is fine to leave as number
        i: number,
      ) => {
        acc.push(numbers[i], letters[i]);
        return acc;
      },
      [] as (number | string)[],
    );
}
console.log(zipList());
console.log(zipListReduce());
