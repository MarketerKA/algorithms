import romanToInt from '..easy/intToRomain.js';
console.log(romanToInt("I"));

describe('romanToInt function', () => {
  test('converts I to 1', () => {
    expect(romanToInt('I')).toBe(1);
  });

  test('converts IV to 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('converts IX to 9', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('converts XLII to 42', () => {
    expect(romanToInt('XLII')).toBe(42);
  });

  test('converts MCMXCIV to 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  test('returns 0 for an empty string', () => {
    expect(romanToInt('')).toBe(0);
  });
});