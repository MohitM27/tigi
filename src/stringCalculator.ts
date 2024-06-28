export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    numbers = numbers.replace(/\n/g, ",");
    const numArray = numbers.split(",").map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
}
