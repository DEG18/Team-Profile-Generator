const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const allInfoEmployeeArray = new Array();
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
    message: "What is his/her name? ",
  },
  {
    type: "input",
    name: "idOfEmployee",
    message: "What is his/her ID? ",
  },
  {
    type: "input",
    name: "emailOfEmployee",
    message: "What is his/her email address? ",
  },
];

const manager = [
  {
    type: "input",
    name: "officeNumberOfManager",
    message: "What is the Manager Office Number? ",
  },
];

const engineer = [
  {
    type: "input",
    name: "githubOfEnginerr",
    message: "What is the Engineer GitHub Name? ",
  },
];

const intern = [
  {
    type: "input",
    name: "schoolOfInter",
    message: "What is the Intern School Name? ",
  },
];

// Use .concat method to add 2 questions of array together to a new array
const questionForManager = employee.concat(manager);
const questionForEngineer = employee.concat(engineer);
const questionForInter = employee.concat(intern);

async function init() {
  const nameOfPosition = await inquirer.prompt(positions);
  console.log(nameOfPosition.positions);

  switch (nameOfPosition.positions) {
    case "Manager":
      // code block
      const infoOfManager = await inquirer.prompt(questionForManager);
      // constructor(name, id, email, officeNumber) for Manager
      const addManager = new Manager(
        infoOfManager.nameOfEmployee,
        infoOfManager.idOfEmployee,
        infoOfManager.emailOfEmployee,
        infoOfManager.officeNumberOfManager
      );
      // console.log(addManager);
      allInfoEmployeeArray.push(addManager);
      init();
      break;
    case "Engineer":
      // code block
      const infoOfEngineer = await inquirer.prompt(questionForEngineer);
      // constructor(name, id, email, github) for Engineer
      const addEngineer = new Engineer(
        infoOfEngineer.nameOfEmployee,
        infoOfEngineer.idOfEmployee,
        infoOfEngineer.emailOfEmployee,
        infoOfEngineer.githubOfEnginerr
      );
      // console.log(addEngineer);
      allInfoEmployeeArray.push(addEngineer);
      init();
      break;
    case "Intern":
      // code block
      const infoOfIntern = await inquirer.prompt(questionForInter);
      // constructor(name, id, email, school) for Intern
      const addIntern = new Intern(
        infoOfIntern.nameOfEmployee,
        infoOfIntern.idOfEmployee,
        infoOfIntern.emailOfEmployee,
        infoOfIntern.schoolOfInter
      );
      // console.log(addIntern);
      allInfoEmployeeArray.push(addIntern);
      init();
      break;
    case "Exit":
      // code block
      console.log("Exit the questions loop!");
      output();
      break;
    default:
      // code block
      console.log("Exit the questions loop!");
  }
}

function output() {
  const generatehtml = render(allInfoEmployeeArray);
  console.log(generatehtml);
  fs.writeFile(outputPath, generatehtml, function (err) {
    console.log(err);
  });
}

init();

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
