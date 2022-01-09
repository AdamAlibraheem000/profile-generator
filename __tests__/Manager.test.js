const Manager = require("../lib/Manager.js");

test("checks if Manager object was created", () => {
  const manager = new Manager("000000000");

  expect(manager.officeNumber).toBe("000000000");
});
