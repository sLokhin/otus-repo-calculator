// 1. Лучшая команда (наибольшее кол-во очков), выводим имя
export type Team = {
  name: string;
  score: number;
};

export const getTopName = (teams: Array<Team>): string =>
  teams.reduce((bestTeam, currentTeam) => {
    return bestTeam.score > currentTeam.score ? bestTeam : currentTeam;
  }, {} as Team).name || "Default message";

// 2. Querystring из объекта
export type QsObj = Record<
  string,
  string | number | boolean | Record<string, unknown>
>;

export const createQs = (qsObj: QsObj): string => {
  return (
    "?" +
    Object.entries(qsObj)
      .map(([key, value]) => {
        return `${key}=${value}`;
      })
      .join("&")
  );
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
