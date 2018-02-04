		
// function declaration
// with no return value
function calculate():void {
	// function body
	let someArray:number[] = [1, 2, 3];
	for (let entry of someArray) {
		console.log(entry); 
	}
}

// calling function
calculate();

// function declaration
// with return value
function getMessage():string {
	// function body
	let message:string = 'this ' + ' is' + ' a' + ' test';
	return message;
}


document.body.innerHTML = getMessage();





