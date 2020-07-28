const Employee = require("./Employee");

// Get the info of Employee from Employee.js
const Employee = require("./Employee.js");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, email, id); // From parent class Employee
    // class Engineer custom behaviour
    this.github = github;
    this.getGithub = function () {
      return this.github;
    };
    this.getRole = function () {
      return "Engineer";
    };
  }
}

module.exports = Engineer;
