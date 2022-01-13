const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const arr = [];

function baseQuestions() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team manager name?",
        name: "name",
        validate: (nameValid) => {
          if (nameValid) {
            return true;
          } else {
            console.log("team manager name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter team manager ID number?",
        name: "ID",
        validate: (IDValid) => {
          if (IDValid) {
            return true;
          } else {
            console.log("ID number required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter email address?",
        name: "email",
        validate: (emailValid) => {
          if (emailValid) {
            return true;
          } else {
            console.log("email required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter office number?",
        name: "officeNum",
        validate: (officeNumValid) => {
          if (officeNumValid) {
            return true;
          } else {
            console.log("office number required");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "menu",
        message: "Choose from the following options ",
        choices: ["finsh building team", "engineer", "intern"],
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.officeNum
      );
      arr.push(manager);
      testArr();
      if (answers.menu === "engineer") {
        engineerGenerator();
      } else if (answers.menu === "intern") {
        internGenerator();
      } else {
        buildHTML();
      }
    });
}

function engineerGenerator() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer's name?",
        name: "nameEng",
        validate: (nameEngValid) => {
          if (nameEngValid) {
            return true;
          } else {
            console.log("team engineer's name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's ID number?",
        name: "IDEng",
        validate: (IDEngValid) => {
          if (IDEngValid) {
            return true;
          } else {
            console.log("team engineer's ID number required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's email address?",
        name: "emailEng",
        validate: (emailEngValid) => {
          if (emailEngValid) {
            return true;
          } else {
            console.log("engineer's email address required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter engineer's github username?",
        name: "githubEng",
        validate: (githubEngValid) => {
          if (githubEngValid) {
            return true;
          } else {
            console.log("github username required");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.nameEng,
        answers.IDEng,
        answers.emailEng,
        answers.githubEng
      );
      arr.push(engineer);
      testArr();
      confirmation();
    });
}

function internGenerator() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's name?",
        name: "nameInt",
        validate: (nameIntValid) => {
          if (nameIntValid) {
            return true;
          } else {
            console.log("intern's name required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's ID?",
        name: "IDInt",
        validate: (IDIntValid) => {
          if (IDIntValid) {
            return true;
          } else {
            console.log("intern's ID required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's email?",
        name: "emailInt",
        validate: (emailIntValid) => {
          if (emailIntValid) {
            return true;
          } else {
            console.log("intern's email required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern's school?",
        name: "schoolInt",
        validate: (schoolIntValid) => {
          if (schoolIntValid) {
            return true;
          } else {
            console.log("intern's school required");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.nameInt,
        answers.IDInt,
        answers.emailInt,
        answers.schoolInt
      );
      arr.push(intern);
      testArr();
      confirmation();
    });
}

function confirmation() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmSelection",
        message: "Do you wish to add another employee?",
        default: true,
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.confirmSelection === true) {
        inquirer
          .prompt([
            {
              type: "list",
              name: "menu",
              message: "Choose from the following options ",
              choices: ["engineer", "intern"],
            },
          ])
          .then((answers) => {
            if (answers.menu === "engineer") {
              engineerGenerator();
            } else if (answers.menu === "intern") {
              internGenerator();
            }
          });
      } else {
        buildHTML();
      }
    });
}

function buildHTML() {
  // function to build html
  // For loop of arr to generate constructors
  // if arr[i].getRole() === Manager : manager card
  // if arr[i].getRole() === Engineer : engineer card
  // if arr[i].getRole() === Intern : intern card
  console.log("Build HTML");
  // return ``;
}

function testArr() {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// baseQuestions();
confirmation();
