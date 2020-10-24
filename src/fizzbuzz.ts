export const fizzbuzz = (number: number): string[] => {
    if (number === 1){
        return [number.toString()];
    }

    let array = fizzbuzz(number - 1);

    if (number % 3 === 0 && number % 5 === 0){
            array.push("FizzBuzz");
        }else if (number % 5 == 0) {
            array.push("Buzz");
        }else if (number % 3 === 0){
            array.push("Fizz");
        }else {
            array.push(number.toString());
    }

    return array;
}