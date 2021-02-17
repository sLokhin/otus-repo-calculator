// Используя чистые функции массивов map/reduce, объектов Objeсt.keys, строк string.split и т.д. получить нужный результат

// 1. Лучшая команда (наибольшее кол-во очков), выводим имя

const teams = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 },
];

const getTopName = (teams) =>
  teams.reduce((bestTeam, currentTeam) => {
    return bestTeam.score > currentTeam.score ? bestTeam : currentTeam;
  }).name;

const resultTask1 = getTopName(teams);
console.log(`Top team name is ${resultTask1}`);

// 2. Querystring из объекта

const qsObj = {
  page: "2",
  pageSize: "10",
  total: "205",
  somethingElse: "value",
};

// '?page=2&pageSize=10&total=205&somethingElse=value'
const createQs = (qsObj) => {
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

// const parseQs = (qs) => {
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

const parseQs = (qs) => {
  return qs
    .slice(1)
    .split("&")
    .reduce((resultObject, entryStr) => {
      const [key, value] = entryStr.split("=");
      resultObject[key] = value;
      return resultObject;
    }, {});
};

const resultTask3 = parseQs(qs);
console.log(resultTask3);
