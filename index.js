const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

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

  const starterHTML = baseHTML();

  fs.writeFileSync("./index.html", starterHTML);

  for (i = 0; i < arr.length; i++) {
    if (arr[i].getRole() === "Manager") {
      let newRecord = arr[i];
      let managerHTML = managerCard(newRecord);
      fs.appendFileSync("./index.html", managerHTML);
    } else if (arr[i].getRole() === "Engineer") {
      let newRecordEng = arr[i];
      let engineerHTML = EngineerCard(newRecordEng);
      fs.appendFileSync("./index.html", engineerHTML);
    } else if (arr[i].getRole() === "Intern") {
      let newRecordInt = arr[i];
      let internHTML = InternCard(newRecordInt);
      fs.appendFileSync("./index.html", internHTML);
    }
  }

  const footerData = footerHTML();

  fs.appendFileSync("./index.html", footerData);
}

function baseHTML() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body> 
  <header class="bg-primary h1 py-5 text-white text-center">Profile Generator </header> 
  <div class="container">

  `;
}

function footerHTML() {
  return `

  </div>
   </body>
   </html>`;
}

function managerCard(newRecord) {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Manager</h5>
      <h5 class="card-title">${newRecord.name}</h5>
      <a class="card-text" href="www.${newRecord.email}.com" target="_blank" >${newRecord.email}</a>
      <p class="card-text">${newRecord.officeNumber}</p>
    </div>
  </div>`;
}

function EngineerCard(newRecordEng) {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Engineer</h5>
      <h5 class="card-title">${newRecordEng.name}</h5>
      <p class="card-text">ID number: ${newRecordEng.id}</p>
      <a class="card-text" href="${newRecordEng.email}">${newRecordEng.email}</a>
      <br>
      <a class="card-text"href="${newRecordEng.github}">${newRecordEng.github}</a>
    </div>
  </div>`;
}

function InternCard(newRecordInt) {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Intern</h5>
      <h5 class="card-title">${newRecordInt.name}</h5>
      <p class="card-text">ID number: ${newRecordInt.id}</p>
      <a class="card-text" href="${newRecordInt.email}">${newRecordInt.email}</a>
      <br>
      <a class="card-text" href="${newRecordInt.school}">${newRecordInt.school}</a>
    </div>
  </div>`;
}

baseQuestions();
