/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwoNumbers(a, b){
    //return a + b;
//}
//let sum = addTwoNumbers(4, 5);
//console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(4, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => a + b;
let sum1 = addTwoNumbers1(4, 5);
console.log(sum1);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there')

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())
