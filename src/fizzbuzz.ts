export const fizzbuzz = (number: number): string[] => {
  if (number === 1) {
    return [number.toString()];
  }

  function isDivisibleByThreeAndFive(): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }
  function isDivisibleBy(input: number): boolean {
    return number % input == 0;
  }

  const array = fizzbuzz(number - 1);

  if (isDivisibleByThreeAndFive()) {
    array.push("FizzBuzz");
  } else if (isDivisibleBy(5)) {
    array.push("Buzz");
  } else if (isDivisibleBy(3)) {
    array.push("Fizz");
  } else {
    array.push(number.toString());
  }

  return array;
};
