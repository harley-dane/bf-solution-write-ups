import addUpNumbers from "./solution.js";


describe("addUpNumbers", () => {
  it("should return the sum of numbers from 1 to n", () => {
    expect(addUpNumbers(1)).toBe(1);
    expect(addUpNumbers(2)).toBe(3);
    expect(addUpNumbers(3)).toBe(6);
    expect(addUpNumbers(4)).toBe(10);
    expect(addUpNumbers(5)).toBe(15);
    expect(addUpNumbers(10)).toBe(55);
  });

  it("should return 0 for n = 0", () => {
    expect(addUpNumbers(0)).toBe(0);
  });

  it("should return the correct sum for larger numbers", () => {
    expect(addUpNumbers(100)).toBe(5050);
    expect(addUpNumbers(1000)).toBe(500500);
  });
})
