const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Objects:
const TeamManager = require("./teamManager")
const Engineer = require("./engineer")
const Intern = require("./intern");;
const htmlTemplate = require('./generateTeam')
var teamArray = []
// Functions
const startManager = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee manager's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "officeId",
        type: "input",
        message: "Please enter the employees four digit office number:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const officeId = answers.officeId
    const teamManager = new TeamManager(name, employeeId, email, officeId)
    teamArray.push(teamManager)
    console.log(teamArray)

    menu()
})
}

const menu = () => {
         return inquirer.prompt([{
             name: "newTm",
             type: "input",
             message: "MENU: Would you like to add a new team member? Y for \"Yes\" N for \"No\"",
         }
     ]).then(answers => {
    if(answers.newTm == 'Y') {
       console.log('Adding a new Team member!')
       employeeMenu()
    }
    else if(answers.newTm == 'N') {
        console.log('No more team members to add!')
        printInfoMenu()
    }
    else{
        console.log('Please enter \"Y\" or \"N\"')
        menu()
    }
     })
    }


const engineerMenu = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "github",
        type: "input",
        message: "Please enter the employees github account:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const github = answers.github
    const engineer = new Engineer(name, employeeId, email, github)
    teamArray.push(engineer)
    menu()
})
}
const internMenu = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Please enter the employee's name:",
    },
    {
        name: "employeeId",
        type: "input",
        message: "Please enter the employees four digit employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the employees Email adress:",
    },
    {
        name: "school",
        type: "input",
        message: "Please enter the employees current school program:",
    }
]).then(answers => {
    const name = answers.name
    const employeeId = answers.employeeId
    const email = answers.email
    const school = answers.school
    const intern = new Intern(name, employeeId, email, school)
    teamArray.push(intern)
    menu()
})
}

const employeeMenu = () => {
    return inquirer.prompt([{
        name: "eOrI",
        type: "input",
        message: "Is this employee an engineer or an intern? E for \"Engineer\" I for \"Intern\"",
    }
]).then(answers => {
if(answers.eOrI == 'E') {
  console.log('Adding a new Engineer!')
  engineerMenu()
}
else if(answers.eOrI == 'I') {
   console.log('Adding a new Intern!')
   internMenu()
}
else{
   console.log('Please enter \"E\" or \"I\"')
   employeeMenu()
}
})
}

//Exit function that closes menu and calls html gen
   const printInfoMenu = () => {
    return inquirer.prompt([{
        name: "printThis",
        type: "input",
        message: "Are you ready to export your HTML Page? Y for \"Yes\" N for \"No\"",
    }
]).then(answers => {
    if(answers.printThis == 'Y'){
        printHtml()
    }else if (answers.printThis == 'N'){
        startMenu()
    }
    else{
        console.log('Please enter \"Y\" or \"N\"')
    }
})
}
function printHtml(){
    fs.writeFileSync('index.html', htmlTemplate(teamArray))
    console.log('Index.html successfully written')
}
startManager()