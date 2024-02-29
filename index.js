const inquirer = require("inquirer");
const fs = require("fs");
const logoGen = require("./lib/logoGen");

const questions = [
    {
        type: "input",
        message: "Please type up to three letters you would like to include.",
        name: "text"
    },
    {
        type: "input",
        message: "What color would you like the text to be?",
        name: "textColor"
    },
    {
        type: "list",
        message: "What shape would you like to include?",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        message: "What color would you like the shape to be?",
        name: "shapeColor"
    },
    {
        type: "input",
        message: "what name woud you like to have?(it will be the svg file type)",
        name: "fileName"
    }
]
//gets the data fed through the classes and functions to generate an svg file and write it to the examples folder
function writeToFile(data){
    let logo = logoGen(data);
    fs.writeFile(`./examples/${data.fileName}.svg`, logo, (err) =>
    err ? console.log(err) : console.log('Successfully created logo check examples for your logo!')
    );
}
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    })
    
}
init();