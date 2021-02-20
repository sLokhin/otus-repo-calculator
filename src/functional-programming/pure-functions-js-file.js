const parseQs = (qs) => {
  return Object.fromEntries(
    qs
      .slice(1)
      .split("&")
      .map((entryStr) => {
        const [key, value] = entryStr.split("=");
        return [key, value];
      })
  );
};

const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
const resultTask3 = parseQs(qs);
console.log(resultTask3);