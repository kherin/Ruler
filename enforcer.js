const inquirer = require('inquirer');

// coding standards
const name = 'standards';
const choices = ['Option 1', 'Option 2', 'Option 3'];

inquirer
    .prompt([
        {
            type: 'checkbox',
            name: name,
            message: 'Coding Standards',
            choices: choices
        }
    ])
    .then(answers => {
        const exitCode = answers.length == choices.length ? 1 : 0;
        process.exit(exitCode);
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log('Could not be rendered');
        } else {
            // Something else when wrong
            console.log('error: ', error);
        }
    });
