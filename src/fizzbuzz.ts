export const fizzbuzz = (number: number): string[] => {
  function isDivisibleBy(input: number, count: number): boolean {
    return count % input == 0;
  }

  const array = Array.from(Array(number + 1).keys());

  const result = array.filter(Number).map((n) => {
    let output = '';
    if (isDivisibleBy(3, n)) {
      output += 'Fizz';
    }

    if (isDivisibleBy(5, n)){
      output += 'Buzz';
    }

    return output || n.toString();
  });

  return result;
};
