const axios = require("axios");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//`Employee`, `Manager`, `Engineer`,`Intern`
const positions = [
  {
    type: "list",
    name: "positions",
    choices: ["Manager", "Engineer", "Intern", "Exit"],
    message: "Please choose one to add to your Team(choose Exit to exit): ",
  },
];

const employee = [
  {
    type: "input",
    name: "nameOfEmployee",
    message: "What is the employee name? ",
  },
  {
    type: "input",
    name: "idOfEmployee",
    message: "What is the employee ID? ",
  },
  {
    type: "input",
    name: "emailOfEmployee",
    message: "What is the employee email? ",
  },
];

const engineer = [
  {
    type: "input",
    name: "githubOfEnginerr",
    message: "What is the GitHub Name? ",
  },
];

const intern = [
  {
    type: "input",
    name: "schoolOfInter",
    message: "What is the School Name? ",
  },
];

const manager = [
  {
    type: "input",
    name: "officeNumberOfManager",
    message: "What is the Office Number of Manager? ",
  },
];

// Use .concat method to add 2 questions of array together to a new array
const questionForEngineer = employee.concat(engineer);
const questionForInter = employee.concat(intern);
const questionForManager = employee.concat(manager);

// async function init() {
//   try {
//     await inquirer.prompt(positions).then((nameOfPosition) => {
//       console.log(nameOfPosition);
//       const positionName = nameOfPosition.positions;
//       console.log(positionName);
//       const lowercasePositionName = positionName.toLowerCase();
//       console.log(lowercasePositionName);
//       inputInfo(lowercasePositionName);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

function init() {
  inquirer.prompt(positions).then((nameOfPosition) => {
    console.log(nameOfPosition);
    const positionName = nameOfPosition.positions;
    console.log(positionName);
    const lowercasePositionName = positionName.toLowerCase();
    console.log(lowercasePositionName);
    inputInfo(lowercasePositionName);
  });
}

init();

// inquirer.prompt(lowercasePositionName).then((infoOfPosition) => {
//     console.log(infoOfPosition);
//   });

// async function inputInfo(name) {
//   try {
//     const { infoOfPosition } = await inquirer.prompt(name);
//     console.log(infoOfPosition);
//   } catch (err) {
//     console.log(err);
//   }
// }

function inputInfo(name) {
  inquirer.prompt(name).then((infoOfPosition) => {
    console.log(infoOfPosition);
  });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
