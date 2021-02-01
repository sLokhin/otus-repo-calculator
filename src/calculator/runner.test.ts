import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("5 * 0", () => {
    expect(runner("5 * 0")).toEqual(0);
  });

  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("0 * 0 + 5", () => {
    expect(runner("0 * 0 + 5")).toEqual(5);
  });

  it("0 * 0 * 1", () => {
    expect(runner("0 * 0 * 1")).toEqual(0);
  });

  it("100 - 0 * 5", () => {
    expect(runner("100 - 0 * 5")).toEqual(100);
  });

  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });
});

describe("Runner long cases", () => {
  it("100 + 10 * 10 - 10 * 10", () => {
    expect(runner("100 + 10 * 10 - 10 * 10")).toEqual(100);
  });

  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("0 - 0 * 10 / 10 - 0", () => {
    expect(runner("0 - 0 * 10 / 10 - 0")).toEqual(0);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("100 - 0 ** ! + 500", () => {
    expect(runner("100 - 0 ** ! + 500")).toEqual(599);
  });

  it("100 - 2 ** ! + 500", () => {
    expect(runner("100 - 2 ** ! + 500")).toEqual(576);
  });

  it("[0 ** * 2 ^ 2]", () => {
    expect(runner("0 ** * 2 ^ 2")).toEqual(0);
  });

  it("[5 ** * 2 ^ 2 ! + 1]", () => {
    expect(runner("5 ** * 2 ^ 2 ! + 1")).toEqual(601);
  });
});

describe("Factorial cases", () => {
  it("3 ! + 4", () => {
    expect(runner("3 ! + 4")).toEqual(10);
  });
});
