import { fizzbuzz } from "../src/fizzbuzz";
const each = require("jest-each").default;


describe("Fizzbuzz", () => {
    each([
            [1, ["1"]],
            [2, ["1", "2"]],
            [3, ["1", "2", "Fizz"]],
            [4, ["1", "2", "Fizz", "4"]]
    ]).test(
        "returns %s for %s", (input, expected) => {
            expect(fizzbuzz(input)).toEqual(expected);
        })
})