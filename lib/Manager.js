const Employee = require("./Employee");

class Manager {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole = function () {}; //Overridden to return Manager
}

module.exports = Manager;
