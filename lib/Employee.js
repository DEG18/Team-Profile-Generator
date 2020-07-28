// TODO: Write code to define and export the Employee class
class Employee {
  // created a constructor and assign all elements
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
    // return the name of employee
    this.getName = function () {
      return this.name;
    };
    // return the id of employee
    this.getId = function () {
      return this.id;
    };
    // return the email of employee
    this.getEmail = function () {
      return this.email;
    };
    // return Employee
    this.getRole = function () {
      return "Employee";
    };
  }
}

module.exports = Employee;
