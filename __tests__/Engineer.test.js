const Engineer = require("../lib/Engineer.js");

test("checks if Engineer object was created", () => {
  const empl = new Engineer("github");

  expect(empl.github).toBe("github");
});
