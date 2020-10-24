export const fizzbuzz = (number: number): string[] => {
    if (number === 1){
        return [number.toString()];
    }
    return [(number - 1).toString(), number.toString()];
}