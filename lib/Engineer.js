const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }

  getGitHub = function () {};
  getRole = function () {}; //Override return Engineer
}

module.exports = Engineer;
