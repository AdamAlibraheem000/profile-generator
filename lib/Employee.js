class Employee {
  // Fields

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}
// methods
getName = function () {
  return name = this.name;
};
getId = function () {
  return id = this.id;
};

getEmail = function () {
  return email = this.email;
};
getRole = function () {
  return {
    name = this.name,
    id = this.id,
    email = this.email

  }
}; //Returns Employee

//   Other classes will extend Employee

module.exports = Employee;
