const multiply = require('./multiply');

describe('test multiply positive scenarios', () => {
  test('multiply 3*2 should equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
  });

  test('mutliply 3*2 should NOT equal 7', () => {
    expect(multiply(3, 2)).not.toBe(7);
  });
});
