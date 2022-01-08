// const Employee = require("../lib/Employee.js");

test("checks if Employee object was created", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.name).toBe("Bill");
  expect(empl.value).toEqual(expect.any(Number));
  expect(empl.email).toBe("email@email.com");
});
