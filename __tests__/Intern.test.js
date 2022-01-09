const Intern = require("../lib/Intern.js");

test("checks if Intern object was created", () => {
  const intern = new Intern("goat chz");

  expect(intern.school).toBe("goat chz");
});
