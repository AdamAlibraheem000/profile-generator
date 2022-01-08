const Employee = require("./Employee");

class Intern {
  constructor(school) {
    this.school = school;
  }

  getSchool = function () {};
  getRole = function () {}; //Override to return Intern
}

module.exports = Intern;
