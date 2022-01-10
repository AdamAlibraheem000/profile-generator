const Employee = require("../lib/Employee.js");

// tests object creation
test("checks if Employee object was created", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.name).toBe("Bill");
  expect(empl.id).toEqual(expect.any(Number));
  expect(empl.email).toBe("email@email.com");
});

//Tests getName method
test("Checks if method returns string", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.getName()).toEqual(expect.stringContaining(empl.name.toString()));
});

//Tests getID method
test("Checks if method returns number", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.getId()).toEqual(expect.any(Number));
});

//Tests getEmail method
test("Checks if method returns string", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.getEmail()).toEqual(
    expect.stringContaining(empl.email.toString())
  );
});

// Tests if object is returned
test("checks if object is returned", () => {
  const empl = new Employee("Bill", 23, "email@email.com");

  expect(empl.getRole()).objectContaining(Employee);
});
