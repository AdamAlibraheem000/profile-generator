const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }

  getSchool() {}
  getRole() {} //Override to return Intern
}

module.exports = Intern;
