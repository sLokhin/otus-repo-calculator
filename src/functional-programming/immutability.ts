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

// Задание 2
export type ArrayTask2 = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: ArrayTask2
): ArrayTask2 => {
  const [num0, num1, ...submass] = originalArray;
  const copyArray = ["two", ...submass, 5];
  return copyArray;
};

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

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
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
