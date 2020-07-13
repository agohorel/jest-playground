const multiply = require('./multiply');

describe('testing arithmetic w/ number matchers', () => {
  test('multiply 3*2 should equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
    expect(multiply(3, 2)).toBeGreaterThan(5);
    expect(multiply(3, 2)).toBeLessThan(7);
    expect(multiply(3, 2)).toBeLessThanOrEqual(6);
    expect(multiply(3, 2)).toBeGreaterThanOrEqual(6);
  });

  test('mutliply 3*2 should NOT equal 7', () => {
    expect(multiply(3, 2)).not.toBe(7);
  });
});

describe('testing strings w/ regex', () => {
  test('pool is contained in Liverpool', () => {
    expect('Liverpool').toMatch(/pool/);
  });

  test('Orange is NOT contained in Gordon Freeman', () => {
    expect('Gordon Freeman').not.toMatch(/Orange/);
  });
});

describe('testing null values', () => {
  test('null', () => {
    const n = null;
    // test nullish-ness
    expect(n).toBeNull();

    // test that value is not undefined
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();

    // test falsiness
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });
});

describe('testing arrays', () => {
  const items = ['pencil', 'teacup', 'GPU', 'apple'];

  test('that the item stock list has an apple', () => {
    expect(items).toContain('apple');
  });

  test('that the item stock list does not contain a particle accelerator', () => {
    expect(items).not.toContain('particle accelerator');
  });
});
