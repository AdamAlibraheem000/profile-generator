const Manager = require("../lib/Manager.js");

test("checks if Manager object was created", () => {
  const empl = new Manager("Bill", 23, "email@email.com", "000000000");

  expect(empl.name).toBe("Bill");
  expect(empl.id).toEqual(expect.any(Number));
  expect(empl.email).toBe("email@email.com");
  expect(empl.officeNumber).toBe("000000000");
});

test("checks if string 'Manager' is returned", () => {
  const empl = new Manager("Bill", 23, "email@email.com", "000000000");

  expect(empl.getRole()).toBe("Manager");
});
