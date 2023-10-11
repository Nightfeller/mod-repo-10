function validateShape(shape) {
    switch(shape) {
        case 'Square':
            return 'square';
            break;
        case 'Circle':
            return 'circle';
            break;
        case 'Triangle':
            return true;
            break;
    }
}

function renderHTML(rend, paint, write) {
    const trueShape = validateShape(rend.shapeName);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg>
    <rect width="100%" height="100%" fill="white" />

    <${trueShape} cx="150" cy="100" r="80" fill="${paint}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${rend.iName}</text>
</svg>`;
}

module.exports = {
    renderHTML, 
};