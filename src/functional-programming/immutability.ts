// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

const originalTeam: OriginalTeam = {
  size: 15,
  name: "Tampa Bay Roosters",
  league: "Minor",
};

const expectedTeam: ExpectedTeam = {
  name: "New York Badgers",
  league: "Minor",
  roster: 25,
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const newProps = { name: "New York Badgers", roster: 25 };
  const keysToDelete = ["size"];
  const result = { ...originalTeam, ...newProps } as Partial<
    Record<string, unknown>
  >;
  keysToDelete.forEach((key) => {
    delete result[key];
  });
  return { ...result } as ExpectedTeam;
};

const resultTask1 = originalTeamToExpectedTeam(originalTeam);
console.log("Task-1 -- ", resultTask1);

// Задание 2
type SomeArray = Array<number | string>;

const originalArray = [1, 2, 3, 4];
const expectedArray = ["two", 3, 4, 5];

const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => {
  const copyArray = [...originalArray].slice(2);
  copyArray.unshift("two");
  copyArray.push(5);
  return copyArray;
};

const resultTask2 = originalArrayToExpectedArray(originalArray);
console.log("Task-2 -- ", resultTask2);

// Задание 3
export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

const originalTeamTask3: Team = {
  name: "Tampa Bay Roosters",
  captain: {
    name: "Bryan Downey",
    age: 27,
  },
};

const expectedTeamTask3: Team = {
  name: "Tampa Bay Roosters",
  captain: {
    name: "Bryan Downey",
    age: 28,
  },
};

const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  const newProps = {
    captain: {
      age: 28,
    },
  };
  const merge = (changes: any, origin: Team) => {
    const result = Object.keys(origin).reduce((acc, key) => {
      if (origin[key as keyof Team] instanceof Object) {
        acc[key] = merge(changes[key], origin[key]);
      } else {
        acc[key] = changes[key] || origin[key];
      }
      return acc;
    }, {} as Team);
    return result;
  };
  return merge(newProps, originalTeam);
};

const resultTask3 = originalTeamToExpectedTeamDeep(originalTeamTask3);
console.log("Task-3 -- ", resultTask3);
