// 1. Лучшая команда (наибольшее кол-во очков), выводим имя
type Team = {
  name: string;
  score: number;
};

export const getTopName = (teams: Team[]): string =>
  teams.reduce((bestTeam, currentTeam) => {
    return bestTeam.score > currentTeam.score ? bestTeam : currentTeam;
  }).name;

// 2. Querystring из объекта
export type QsObj = Record<
  string,
  string | number | boolean | Record<string, unknown>
>;

export const createQs = (qsObj: QsObj): string => {
  return Object.entries(qsObj)
    .reduce((str, [key, value]) => {
      return str.concat(`${key}=${value}&`);
    }, "?")
    .slice(0, -1);
};

// 3. Объект из querystring
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

// Variant-2

// export const parseQs = (qs: string): QsObj => {
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
