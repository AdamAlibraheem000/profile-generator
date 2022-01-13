const Intern = require("../lib/Intern.js");

test("checks if Intern object was created", () => {
  const empl = new Intern("Bill", 23, "email@email.com", "schoolName");

  expect(empl.name).toBe("Bill");
  expect(empl.id).toEqual(expect.any(Number));
  expect(empl.email).toBe("email@email.com");
  expect(empl.school).toBe("schoolName");
});

test("checks if getSchool function returns this.school", () => {
  const empl = new Intern("Bill", 23, "email@email.com", "schoolName");

  expect(empl.getSchool()).toBe("schoolName");
});

test("checks if string 'Intern' is returned", () => {
  const empl = new Intern("Bill", 23, "email@email.com", "schoolName");

  expect(empl.getRole()).toBe("Intern");
});
