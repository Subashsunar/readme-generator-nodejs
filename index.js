// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your name',
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What languages do you know?',
    choices: [
      'Filipino',
      'Spanish',
      'Mandarin',
      'English',
      'Japanese',
      'Arabic',
      'French',
      'ASL',
      'Portuguese',
    ],
  },
  {
    type: 'list',
    name: 'communication',
    message: 'What is your preferred method of communication?',
    choices: [
      'email',
      'text',
      'telekinesis',
      'call',
      'morse code',
      'carrier pigeon',
      'smoke signals'
    ]
  }
]).then(answers => {
  fs.writeFile(`${answers.name.toLowerCase()}.json`, JSON.stringify(answers, null, 2), function(err) {
    if (err) throw err;
    console.log('Successfully created the file');
  });
});
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
