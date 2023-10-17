const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

const shap = require('./lib/shapes.js');

class Insert {
    constructor(inp, li) {
        this.one = inp,
        this.two = li
    }

    //Might come back to make this work.

    // messageLimiter(t) {
    //     if (t.length <= 3) {
    //         return true;
    //     }
    // }
}


const load = new Insert('input', 'list');
const nORh = "Put in a broad color name or a hexadecimal code.";


const inputs = [
    {
        type: load.one,
        message: 'What are the initials for the logo?',
        name: 'initialsName',
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
        }
    },
    {
        type: load.two,
        message: 'What is the shape of the logo?',
        name: 'shapeName',
        choices: [
            'Square',
            'Circle',
            'Triangle',
        ]
    },
    {
        type: load.one,
        message: `What color do you want your initials to be? ${nORh}`,
        name: 'initialColors'
    },
    {
        type: load.one,
        message: `What color do you want the logo shape to be? ${nORh}`,
        name: 'shapeColors'
    }

];

inquirer.prompt(inputs).then((response) => {
    writeFile('logo.svg', shap.renderHTML(response));
}).catch(err => {
    console.log(err);
});


// lol