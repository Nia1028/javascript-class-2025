//ARROW FUNCTION

const sayHelloWorld = () => console.log("Hello World!");
sayHelloWorld();

const greetByName = (name) => `Hello ${name}!`;
console.log(greetByName("Nia"));
console.log("----------------------------------");

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
console.log("----------------------------------");

//STACK CALL

console.log("This is the top of the program");

function firstCall() {
  console.log("This is the First Function");
  secondCall();
  console.log("Back to First Call after Second Call was run");
}
function secondCall() {
  console.log("This is the Second Function");
  thirdCall();
  console.log("Back to Second Call after Third Call was run.");
}
function thirdCall() {
  console.log("This is the Third Function");
}
firstCall();
console.log("Back after First Function was run ");
console.log("This is the end of programme");
console.log("----------------------------------");

//POWER CALCULATION
let number = 2 ** 3;
console.log(number); // 8
let a = 5;
a **= 3; //125
console.log(a);
console.log("-------------------------------");

// NULLISH OPERATOR
let apple;
let fruit = apple ?? "banana";
console.log(fruit); // banana because apple is undefined
let isSent = false;
let sentStatus = isSent ?? "Was Sent";
console.log(sentStatus); //false
console.log("------------------------------");

// // //OPTIONAL CHAINING
// const employees = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     contact: {
//       email: {
//         primaryEmail: "jdoe@gmail.com",
//         secondaryEmail: "john.doe@icloud.com",
//       },
//     },
//   },
//   {
//     firstName: "Bill",
//     lastName: "Nye",
//     contact: { phoneNumber: "217-562-1500" },
//   },
// ];
// for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i].contact.email.primaryEmail);
//   console.log(employees[i].contact.phoneNumber);
// }

// CONTINUE & BREAK

for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    break;
  }
  console.log(i); // 1 2 3 , when i == 4 the iteration stop and comes out of the loop
}
console.log("-------------------------------");

for (j = 1; j <= 10; j++) {
  if (j == 4) {
    continue;
  }
  console.log(j); //  1 2 3 5 6 7 8 9 10 , when i == 4 the iteration stop, wont print 4, but will continue until the condition fails.
}
console.log("-----------------------------------");

// INDEPENDENT IF'S

const jeffsAge = 28;
if (jeffsAge > 21) {
  console.log("You can Drink");
}
if (jeffsAge > 18) {
  console.log("You can Vote"); //  independent if's will print both
}
console.log("------------------------------------------");

// VALUES FOR DEFAULT PARAMETERS

function createUser(username, email, password) {
  const user = {
    username: username,
    email: email,
    passord: password,
  };
  return user;
}
const john = createUser("johnDoe", "jdoe@gmail.com", "secret");
console.log(john);
const jim = createUser("Jim jones", "jimjones@gmail.com");
console.log(jim);
console.log("-------------------------------------------");

function calculateTwoPlusFive() {
  function addTwoPlusFive() {
    console.log(`2+5 = ${2 + 5}`);
  }
  addTwoPlusFive();
}
calculateTwoPlusFive();
console.log("-------------------------------------------");

// CLOUSER

function createCounter() {
  let count = 0; //private variable
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter();
counter();
counter();
counter();
console.log("-------------------------------");

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
let twice = multiplier(2);
console.log(twice(5));
console.log("-------------------------------");

// STRING METHODS

const str = "Boy are my arms tired!";
console.log(str.length); // 22
console.log(str.toUpperCase()); // BOY ARE MY ARMS TIRED!
console.log(str); // Boy are my arms tired!
console.log("-------------------------------");

const newstr = str.toUpperCase();
console.log(newstr); // BOY ARE MY ARMS TIRED!
console.log("-------------------------------");

//SUBSTRING
const partOfString = str.substring(2, 9);
console.log(partOfString);

//SLICE takes negative index

const anotherPartOfString = str.slice(3, 8);
console.log(anotherPartOfString);
console.log("-------------------------------");

const stillSomeOfString = str.slice(-6, -1);
console.log(stillSomeOfString);
console.log("-------------------------------");

//INDEX OF

const locationOfA = str.indexOf("a");
console.log(locationOfA); // will print the first 'a' of the array.
console.log("-------------------------------");

const locOfAFromEnd = str.lastIndexOf("a"); // will print the last "a" in an array.
console.log(locOfAFromEnd);
console.log("-------------------------------");

//TRIM

console.log(str + "!!");
const trimmedString = str.trim();
console.log(trimmedString);
console.log("-------------------------------");

//SPLIT

const stringLineArray = trimmedString.split(" ");
console.log(stringLineArray);
console.log("-------------------------------");

//JOIN

const joinedstringLine = stringLineArray.join(",");
console.log(joinedstringLine);
console.log("-------------------------------");

const lowerCaseStringLine = str.trim().toLowerCase();
console.log(lowerCaseStringLine);
console.log("-------------------------------");

//PAD START

const time = "5:36 am";
const militaryTime = time.substring(0, 4).replace(":", "").padStart(4, "0");
console.log(militaryTime);
console.log("-------------------------------");

//PAD START

const newTime = time.substring(0, 4).replace(":", "").padEnd(4, "0");
console.log(newTime);
console.log("-------------------------------");

// chartAt- Character at an index
console.log(`The character at index 5 is '${time.charAt(5)}'.`);
console.log("-------------------------------");

//ARRAY METHODS
