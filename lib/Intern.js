// Get the info of Employee from Employee.js
const Employee = require("./Employee.js");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); // From parent class Employee

    // class Intern custom behaviour
    this.school = school;
    this.getSchool = function () {
      return this.school;
    };
    this.getRole = function () {
      return "Intern";
    };
  }
}

module.exports = Intern;
