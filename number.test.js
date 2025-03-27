const even = require("./number")

test('should return even when 8 % 2 equals 0',() => {
    expect(even(8)).toBe(true);
});