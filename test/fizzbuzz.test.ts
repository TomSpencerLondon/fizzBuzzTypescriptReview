import { fizzbuzz } from "../src/fizzbuzz";


describe("Fizzbuzz", () => {

    it("returns 1 for 1", () => {
        expect(fizzbuzz(1)).toEqual(["1"]);
    })

    it("returns an array of [1, 2] for 2", () => {
        expect(fizzbuzz(2)).toEqual(["1", "2"]);
    })
})