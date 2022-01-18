const Engineer = require("../lib/Engineer.js");

test("checks if Engineer object was created", () => {
  const empl = new Engineer("Bill", 23, "email@email.com", "github");

  expect(empl.name).toBe("Bill");
  expect(empl.id).toEqual(expect.any(Number));
  expect(empl.email).toBe("email@email.com");
  expect(empl.github).toBe("github");
});

test("checks if github string is returned", () => {
  const empl = new Engineer("Bill", 23, "email@email.com", "github");

  expect(empl.getGitHub()).toBe("github");
});
