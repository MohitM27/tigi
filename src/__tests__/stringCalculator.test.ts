import { add } from '../stringCalculator';

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});
