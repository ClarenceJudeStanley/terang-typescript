// function declaration
// with return value
function getMessage(name:string): string {
    // function body
    let message: string = 'this is a test from ' + name;
    return message;
}

let myVariable: string = getMessage('AhLong');

document.body.innerHTML = myVariable;





