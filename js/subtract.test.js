const subtract = require('./subtract');

test('properly adds subtracts numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1);
})