import {
  mul,
  div,
  add,
  minus,
  pow,
  factorial,
  doublePow,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 0 * 0 to equal 0", () => {
    expect(mul(0, 0)).toBe(0);
  });

  it("mul 2 * -2 to equal -4", () => {
    expect(mul(2, -2)).toBe(-4);
  });

  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 0 to equal 0", () => {
    expect(div(2, 0)).toBe(Infinity);
  });

  it("div 0 / 2 to equal 0", () => {
    expect(div(0, 2)).toBe(0);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 0 + 0 to equal 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("add -1 + 1 to equal 0", () => {
    expect(add(-1, 1)).toBe(0);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 0 - 0 to equal 0", () => {
    expect(minus(0, 0)).toBe(0);
  });

  it("minus 5 - 7 to equal -2", () => {
    expect(minus(5, 7)).toBe(-2);
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

  it("4 ** 2", () => {
    expect(pow(4, 2)).toBe(16);
  });
  it("0 ** 1", () => {
    expect(pow(0, 1)).toBe(0);
  });
  it("123 ** 0", () => {
    expect(pow(123, 0)).toBe(1);
  });
});
