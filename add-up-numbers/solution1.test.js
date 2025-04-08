
import addUp from './solution1.js'; // Adjust the path if necessary

describe('addUp function', () => {
  // Test basic functionality with positive integers
  test('should correctly sum numbers from 1 to 5', () => {
    expect(addUp(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  test('should correctly sum numbers from 1 to 1', () => {
    expect(addUp(1)).toBe(1); // 1 = 1
  });

  test('should return 0 when input is 0', () => {
    expect(addUp(0)).toBe(0); // No numbers to sum
  });

  test('should correctly sum numbers from 1 to 10', () => {
    expect(addUp(10)).toBe(55); // 1 + 2 + ... + 10 = 55
  });

  // Test edge cases
  test('should handle negative numbers by returning 0', () => {
    expect(addUp(-5)).toBe(0); // Loop won't run, total stays 0
  });

  test('should handle non-integer numbers by flooring them', () => {
    expect(addUp(5.7)).toBe(15); // Floors to 5, 1 + 2 + 3 + 4 + 5 = 15
  });

 
});