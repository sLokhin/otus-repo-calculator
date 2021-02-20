import { Team, getTopName, createQs, parseQs, QsObj } from "./pure-functions";

// Task 1
test("getTopName test", () => {
  const teams0 = [] as Team[];

  const teams1 = [
    { name: "Team0", score: 0 },
    { name: "Team1", score: -1 },
    { name: "Team2", score: -2 },
    { name: "Team3", score: -3 },
  ];

  const teams2 = [
    { name: "Team0", score: 9 },
    { name: "Team1", score: 9 },
    { name: "Team2", score: 9 },
    { name: "Team3", score: 9 },
  ];

  expect(getTopName(teams0)).toBe("Default message");
  expect(getTopName(teams1)).toBe("Team0");
  expect(getTopName(teams2)).toBe("Team3");
});

// Task 2
test("createQs test", () => {
  const qsObj0: QsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  };

  const qsObj1: QsObj = {
    page: 11,
    pageSize: 12,
    total: 350,
    somethingElse: "anotherValue",
  };

  const qsObj2: QsObj = {
    page: 99,
  };

  expect(createQs(qsObj0)).toBe(
    "?page=2&pageSize=10&total=205&somethingElse=value"
  );
  expect(createQs(qsObj1)).toBe(
    "?page=11&pageSize=12&total=350&somethingElse=anotherValue"
  );
  expect(createQs(qsObj2)).toBe("?page=99");
});

// Task 3
test("parseQs test", () => {
  const qs0 = "?page=2&pageSize=10&total=205&somethingElse=value";
  const qs1 = "?page=11&pageSize=12&total=350";
  const qs2 = "?page=99";

  expect(parseQs(qs0)).toMatchObject({
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  });
  expect(parseQs(qs1)).toMatchObject({
    page: "11",
    pageSize: "12",
    total: "350",
  });
  expect(parseQs(qs2)).toMatchObject({
    page: "99",
  });
});
