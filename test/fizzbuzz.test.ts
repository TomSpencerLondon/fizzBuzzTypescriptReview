import { fizzbuzz } from "../src/fizzbuzz";
const each = require("jest-each").default;

describe("Fizzbuzz", () => {
  each([
    [1, ["1"]],
    [2, ["1", "2"]],
    [3, ["1", "2", "Fizz"]],
    [4, ["1", "2", "Fizz", "4"]],
    [
      15,
      [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ],
    ],
  ]).test("returns %s for %s", (input, expected) => {
    expect(fizzbuzz(input)).toEqual(expected);
  });
});
