export const fizzbuzz = (number: number): string[] => {
  function isDivisibleByThreeAndFive(count: number): boolean {
    return count % 3 === 0 && count % 5 === 0;
  }
  function isDivisibleBy(input: number, count: number): boolean {
    return count % input == 0;
  }

  const array = Array.from(Array(number + 1).keys());

  const result = array.filter(Number).map((n) => {
    if (isDivisibleByThreeAndFive(n)) {
      return "FizzBuzz";
    } else if (isDivisibleBy(5, n)) {
      return "Buzz";
    } else if (isDivisibleBy(3, n)) {
      return "Fizz";
    } else {
      return n.toString();
    }
  });

  return result;
};
