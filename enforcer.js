const inquirer = require('inquirer');

// coding standards
const name = 'standards';
const choices = ['Option 1', 'Option 2', 'Option 3'];

(async function () {

    const answers = await inquirer
        .prompt([
            {
                type: 'checkbox',
                name: name,
                message: 'Coding Standards',
                choices: choices
            }
        ]);

    console.log('answers: ', answers);
    process.exit(0);
})();

