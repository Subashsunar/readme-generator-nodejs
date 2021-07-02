// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

// https://github.com/Subashsunar/readme-generator-nodejs

const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation process',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'User needed to know about the repository'
  },
  {
    type: 'list',
    name: 'liscense',
    message: 'What is the License?',
    choices: [
      'MIT', 'GPL', 'APACHE', 'NONE',
    ], 
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How to user contribute',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How user can test',
    default: 'npm test',
  }
]).then(answers => {
  fs.writeFile(`./README1.md`,generateMarkdown(answers), function(err) {
    if (err) throw err;
    console.log('Successfully created the file');
  });
});
