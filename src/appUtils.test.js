//App.js test sorted fn by props "name" and "stragazers_count"

const { sortArr } = require("./appUtils.js");

const list = [
  { name: "flower", stargazers_count: 10 },
  { name: "Global", stargazers_count: 100 },
  { name: "Arpil", stargazers_count: 22 },
  { name: "soft", stargazers_count: 30 },
];
const alpha = [
  { name: "soft", stargazers_count: 30 },
  { name: "Global", stargazers_count: 100 },
  { name: "flower", stargazers_count: 10 },
  { name: "Arpil", stargazers_count: 22 },
];
const stars = [
  { name: "Global", stargazers_count: 100 },
  { name: "soft", stargazers_count: 30 },
  { name: "Arpil", stargazers_count: 22 },
  { name: "flower", stargazers_count: 10 },
];

test("Testing sorted fn alphabetically, based on property 'name'", () => {
  expect(sortArr(list, "name")).toStrictEqual(alpha);
  expect(alpha[0].name).toEqual("soft");
});

test("Testing sorted fn in descending order", () => {
  expect(alpha[0].name).toEqual("soft");
  expect(alpha[1].name).toEqual("Global");
  expect(alpha[2].name).toEqual("flower");
});

test("Testing sorted fn by number of stars, based on property 'stargazers_count'", () => {
  expect(sortArr(list, "stargazers_count")).toStrictEqual(stars);
});

test("Testing sorted fn by number of stars, in descending order", () => {
  expect(stars[0].stargazers_count).toEqual(100);
  expect(stars[1].stargazers_count).toEqual(30);
  expect(stars[2].stargazers_count).toEqual(22);
});
