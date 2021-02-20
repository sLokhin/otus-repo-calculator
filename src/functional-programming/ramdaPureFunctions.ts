import {
  compose,
  sort,
  prop,
  descend,
  toPairs,
  map,
  join,
  slice,
  split,
  splitAt,
  reduce,
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

const getFirstName = (teams: Array<Team>): string => teams[0].name;

const byScore = descend(prop("score"));
export const getTopName = compose(getFirstName, sort(byScore));

// Задание 2
export type QsObj = Record<
  string,
  string | number | boolean | Record<string, unknown>
>;

const prependQuestionSign = (str: string): string => `?${str}`;

export const createQs = compose(
  prependQuestionSign,
  join("&"),
  map(join("=")),
  toPairs
);

// Задание 3
const getSubstring = (strMass: Array<string>): string => strMass[1];
const createObject = (acc: QsObj, entry: Array<string>) => {
  const [key, value] = entry;
  return { ...acc, [key]: value };
};
export const parseQs = compose(
  reduce(createObject, {}),
  map(split("=")),
  split("&"),
  getSubstring,
  splitAt(1)
);
