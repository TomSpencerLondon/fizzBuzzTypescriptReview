import { fizzbuzz } from "../src/fizzbuzz";
const each = require("jest-each").default;


describe("Fizzbuzz", () => {
    each([
            [1, ["1"]],
            [2, ["1", "2"]],
    ]).test(
        "returns %s for %s", (input, expected) => {
            expect(fizzbuzz(input)).toEqual(expected);
        })
})