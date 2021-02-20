import {
  OriginalTeam,
  ExpectedTeam,
  originalArrayToExpectedArray,
  originalTeamToExpectedTeam,
  originalTeamToExpectedTeamDeep,
  ArrayTask2,
} from "./immutability";

// Task 1
describe("originalTeamToExpectedTeam test", () => {
  test("commom object", () => {
    const originalTeam: OriginalTeam = Object.freeze({
      size: 15,
      name: "Tampa Bay Roosters",
      league: "Minor",
    });

    const expectedTeam: ExpectedTeam = {
      name: "New York Badgers",
      league: "Minor",
      roster: 25,
    };

    expect(originalTeamToExpectedTeam(originalTeam)).toEqual(expectedTeam);
  });
});

// Task 2
describe("originalArrayToExpectedArray test", () => {
  test("common mass", () => {
    const originalArray = Object.freeze([1, 2, 3, 4]) as ArrayTask2;

    const expectedArray = ["two", 3, 4, 5];

    expect(originalArrayToExpectedArray(originalArray)).toEqual(expectedArray);
  });
});

// Task 3
describe("originalTeamToExpectedTeamDeep test", () => {
  test("common object", () => {
    const originalTeam = Object.freeze({
      name: "Tampa Bay Roosters",
      captain: {
        name: "Bryan Downey",
        age: 27,
      },
    });

    const expectedTeam = {
      name: "Tampa Bay Roosters",
      captain: {
        name: "Bryan Downey",
        age: 28,
      },
    };

    expect(originalTeamToExpectedTeamDeep(originalTeam)).toEqual(expectedTeam);
  });
});
