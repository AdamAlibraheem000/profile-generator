class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return {
      name,
      id,
      email,
    };
  } //Returns Employee

  //   Other classes will extend Employee
}
module.exports = Employee;
