import { compose, sort, prop, descend, toPairs, map, join, slice } from "ramda";

// Задание 1
export type Team = { name: string; score: number };

const teams: Team[] = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 },
];

const getFirstName = (teams: Array<Team>): string => teams[0].name;

const byScore = descend(prop("score"));
export const getTopName = compose(getFirstName, sort(byScore));

const resultTask1 = getFirstName(teams);
console.log(`RAMDA task 1 --- Top team name is ${resultTask1}`);

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

const createString = (entry: Array<string>): string =>
  `${entry[0]}=${entry[1]}&`;

// export const createQs = compose(
//   slice(0, -1),
//   prependQuestionSign,
//   join(""),
//   map(createString),
//   toPairs
// );

const qsObj: QsObj = {
  page: "2",
  pageSize: "10",
  total: "205",
  somethingElse: "value",
};
const resultTask2 = createQs(qsObj);
console.log(`RAMDA task 2 --- ${resultTask2}`);

// Задание 3
export const parseQs = compose(map(split("=")), split("&"), slice(1));

const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
const resultTask3 = parseQs(qs);
console.log(`RAMDA task 3 --- ${resultTask3}`));
