import { mul, div, add, minus, factorial, doublePow } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("0! to equal 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("4! to equal 24", () => {
    expect(factorial(4)).toBe(24);
  });

  it("0 **", () => {
    expect(doublePow(0)).toBe(0);
  });
  it("3 **", () => {
    expect(doublePow(3)).toBe(9);
  });
});