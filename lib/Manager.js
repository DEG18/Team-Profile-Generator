// Get the info of Employee from Employee.js
const Employee = require("./Employee.js");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); // Get from the parent class Employee

    // class Intern custom behaviour
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function () {
      return this.officeNumber;
    };
    this.getRole = function () {
      return "Manager";
    };
  }
}

module.exports = Manager;
