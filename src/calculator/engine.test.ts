import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("zeroPrioritiesCalc simple cases", () => {
  it("[0, !]", () => {
    expect(zeroPrioritiesCalc([0, "!"])).toEqual([1]);
  });

  it("[3, !, !]", () => {
    expect(zeroPrioritiesCalc([3, "!", "!"])).toEqual([720]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 26]", () => {
    expect(firstPrioritiesCalc([1, "*", 26])).toEqual([26]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[26, + 26]", () => {
    expect(firstPrioritiesCalc([26, "+", 26])).toEqual([26, "+", 26]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 16, +, 5, *, 20]", () => {
    expect(firstPrioritiesCalc([32, "/", 16, "+", 5, "*", 20])).toEqual([
      2,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
