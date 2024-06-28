export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const delimiterSpec = numbers.match(/^\/\/(.+)\n/);
        if (delimiterSpec) {
            delimiter = delimiterSpec[1];
            numbers = numbers.split("\n").slice(1).join("\n");
        }
    }
    numbers = numbers.replace(/\n/g, delimiter);
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
}
