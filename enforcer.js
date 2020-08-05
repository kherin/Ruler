var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'checbox',
            message: 'Is the code human-readable'
        }
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });