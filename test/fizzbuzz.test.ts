import { fizzbuzz } from "../src/fizzbuzz";


describe("Fizzbuzz", () => {
    it("returns 1 for 1", () => {
        expect(fizzbuzz(1)).toEqual(["1"]);
    })
})