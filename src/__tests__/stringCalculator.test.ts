import { add } from '../stringCalculator';

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});
test('should return 1 for the input "1"', () => {
    expect(add("1")).toBe(1);
});

test('should return 3 for the input "1,2"', () => {
    expect(add("1,2")).toBe(3);
});
test('should return 15 for the input "1,2,3,4,5"', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});
test('should return 6 for the input "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
});
test('should return 3 for the input "//;\\n1;2"', () => {
    expect(add("//;\n1;2")).toBe(3);
});
