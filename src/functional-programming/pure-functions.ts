// 1. Лучшая команда (наибольшее кол-во очков), выводим имя
type Team = {
  name: string;
  score: number;
};

const teams: Team[] = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 },
];

export const getTopName = (teams: Team[]): string =>
  teams.reduce((bestTeam, currentTeam) => {
    return bestTeam.score > currentTeam.score ? bestTeam : currentTeam;
  }).name;

const resultTask1 = getTopName(teams);
console.log(`Top team name is ${resultTask1}`);

// 2. Querystring из объекта
export type QsObj = Record<
  string,
  string | number | boolean | Record<string, unknown>
>;

const qsObj: QsObj = {
  page: "2",
  pageSize: "10",
  total: "205",
  somethingElse: "value",
};

export const createQs = (qsObj: QsObj): string => {
  return Object.entries(qsObj)
    .reduce((str, [key, value]) => {
      return str.concat(`${key}=${value}&`);
    }, "?")
    .slice(0, -1);
};

const resultTask2 = createQs(qsObj);
console.log(resultTask2);

// 3. Объект из querystring
const qs = "?page=2&pageSize=10&total=205&somethingElse=value";

// { page: '2', pageSize: '10', total: '205', somethingElse: 'value' }

// const parseQs = (qs: string): QsObj => {
//   return Object.fromEntries(
//     qs
//       .slice(1)
//       .split("&")
//       .map((entryStr) => {
//         const [key, value] = entryStr.split("=");
//         return [key, value];
//       })
//   );
// };

export const parseQs = (qs: string): QsObj => {
  return qs
    .slice(1)
    .split("&")
    .reduce((resultObject, entryStr) => {
      const [key, value] = entryStr.split("=");
      resultObject[key] = value;
      return resultObject;
    }, {} as QsObj);
};

const resultTask3 = parseQs(qs);
console.log(resultTask3);
