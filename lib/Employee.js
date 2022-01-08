class Employee {
  // Fields

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
// methods
getName = function () {};
getId = function () {};

getEmail = function () {};
getRole = function () {}; //Returns Employee

//   Other classes will extend Employee

module.exports = Employee;
