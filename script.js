// //let age = prompt('How old are you?');
// //alert(age + ' is a good age');
// console.log(" Oh my aching back,\n might a swell claim workmans comp, \n it's thrown out again.");

// // CONCATINATION //
// console.log("Bob and Sheila " + "ate some donuts.");

// let numOfStudents =23;
// console.log("There are " + numOfStudents + " students in my class");

// numOfEmployees = 6;
// console.log(`My company has ${numOfEmployees} employes on my floor.`);

// // DATA TYPES //
// console.log("740_991 + 100_000"); // We can add underscore to make numbers easy to read //

// let a = 9_007_199_254_740_991;
// let b = 100_000;
// console.log(a + b); //9_007_199_254_840_991
//                     // but got 9_007_199_254_840_992 // using bigInt (9_007_199_254_840_991n)

// console.log(0.2 + 0.1);   //expecting 0.3 but got 0.30000000000000004 to solve this
// let x = 0.2;
// let y = 0.1;
// console.log((x * 10 + y * 10) / 10); // expecting 0.3 , got 0.3!

// console.log(typeof ("Bob"));
// console.log(typeof (23));
// let c = "Charlie";
// console.log(typeof (c));
// console.log(typeof (NaN));
// console.log(typeof 32n);
// console.log(typeof undefined);

// let d = 45;
// let e =25;
// let f = "15";

// console.log("The result of d + e is " + d + e);
// console.log("The result of (d + e) is " + (d + e));
// console.log("The result of d + e + f is " + (d + e + f));
// console.log("The result of d + e + f is " + ((d + e) + f));
// console.log("The result of d + e + f is " + (d + ( e + f)));

// let t = 5;
// let s = t++;
// console.log(t);
// console.log(s);

// let l = 5;
// let m = ++l;
// console.log(l);
// console.log(m);

// function addTwoNumbers(num1,num2){
//     alert(num1 + num2);
// }
// addTwoNumbers(8 , 16);

// function getTriangleArea(base,height){
//     let area =0.5 * base *height;
//     // alert(`The area of the triangle is ${area}`);
//     return area;
// }

// // }
// // getTriangleArea(5,10);

// let base1 =prompt('What is the base of the triangle?');
// let height1 =prompt('What is the height of the triangle?');
// let area1 =getTriangleArea(base1, height1);
// // getTriangleArea(base1, height1);
// alert(`The area of your triangle is ${area1}`)

// // CONTROL FLOW

let pocketChange = 5.63;
let lunchTimeLeft = 23;
let hasCheckbook = true;

// if (pocketChange > 5 && lunchTimeLeft > 20){
//     console.log('I will have a ham and swiss please');
// } else{
//     console.log('I will eat later')
// }

// AND OPERATOR
// 1. true 2.true == true
// 1.false 2.true == false
// 1.true  2.false ==false
// 1.false 2.false ==false

// OR OPERATOR
// 1.true  2.true == true
// 1.false 2.true == true
// 1.true  2.false ==true
// 1.false 2.false ==false

// if (pocketChange > 5 || lunchTimeLeft > 30) {
//   console.log("I will have a ham and swiss please");
// } else {
//   console.log("I guess I will just have soup :(");
// }


// if (pocketChange > 5){
//     console.log("I will have a ham and swiss please");
// }else if (hasCheckbook){
//     console.log("Will you take  a check?"); // to check more than one conditions
// }

// let testScore = prompt("What was your score on the test?");

// if  (testScore >= 90) {
//     console.log(`Terrific! You got an A!`);
// }else if (testScore < 90 && testScore >= 80){
//     console.log(`Good Job! You got a B!`);
// }else if (testScore < 80 && testScore >= 70){
//     console.log(`Not bad. You got a C.`);
// } else if (testScore < 70 && testScore >= 60){
//     console.log(`Not bad. You got a C!`);
// }else{
//     console.log("An F");
// } 
// SWITCH CONDITIONS
// let grade = "B";

// switch (grade){
//     case "A":
//         console.log("Excellent!!");
//         break;
//     case "B":
//         console.log("Great!!");
//         break; 
//     case "C":
//         console.log("Not Bad.");
//         break;  
//     default:
//         console.log("You Fail");      
// }

//LOOPS

let age = prompt("how old are you?");
let count = 0;
while (age >= 1){
   if (age % 3 === 0) {
    count++;
   }
   age--;
}
console.log(`There are ${count} multiples of three between 1 and your age`); 