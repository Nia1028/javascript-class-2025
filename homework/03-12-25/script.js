//ARROW FUNCTION

const sayHelloWorld = () => console.log("Hello World!");
sayHelloWorld();

const greetByName = (name) => `Hello ${name}!`;
console.log(greetByName("Nia"));

//SCOPE

let x = 10;
4;
console.log(`Top of program - x is ${x}`); //10 - Global scope
function globalScope() {
  x = 20;
  console.log(`Inside global Scope function - x is ${x}`); //20 - Block Scope
}
console.log(`Outside of function - x is ${x}`); //10 - Block Scope
globalScope();
console.log(`After calling function - x is ${x}`); //20 - Global Scope

//STACK CALL

console.log("This is the top of the program");

function firstCall() {
  console.log("This is the first function");
}
function secondCall() {
  console.log("This is the second function");
}
function thirdCall() {
  console.log("This is the third function");
}
firstCall();
