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
