const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console");

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project's title?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project:"
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT","Unlicence","GNU","BSD","Apache 2.0"]
},
{
    type: "input",
    name: "installation",
    message: "Please enter installation instructions:"
},
{
    type: "input",
    name: "usage",
    message: "Please enter information for usage section:"
},
{
    type: "input",
    name: "contributing",
    message: "Please enter contribution guidelines:"
},
{
    type: "input",
    name: "tests",
    message: "Please enter test guidelines:"
},
{
    type: "input",
    name: "gitHub",
    message: "Please enter GitHub username:"
},
{
    type: "input",
    name: "email",
    message: "Please enter email adress:"
},
];
// function to write README file
function writeToFile(fileName,data) {
    fs.writeFile(fileName,generateMarkdown(data),err =>{
        if(err){
            console.log(err);
        }
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => writeToFile("readMe.md",answers));
}
// function call to initialize program
init();
