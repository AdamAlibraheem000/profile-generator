const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // getGitHub = function () {
  //   return this.github;
  // };

  getRole = function () {
    return "Engineer";
  }; //Override return Engineer
}

module.exports = Engineer;
