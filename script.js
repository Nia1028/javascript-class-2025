//let age = prompt('How old are you?');
//alert(age + ' is a good age');
console.log(" Oh my aching back,\n might a swell claim workmans comp, \n it's thrown out again.");

// CONCATINATION //
console.log("Bob and Sheila " + "ate some donuts.");

let numOfStudents =23;
console.log("There are " + numOfStudents + " students in my class");

numOfEmployees = 6;
console.log(`My company has ${numOfEmployees} employes on my floor.`); 


// DATA TYPES //
console.log("740_991 + 100_000"); // We can add underscore to make numbers easy to read //

let a = 9_007_199_254_740_991;
let b = 100_000;
console.log(a + b); //9_007_199_254_840_991
                    // but got 9_007_199_254_840_992 // using bigInt (9_007_199_254_840_991n)

console.log(0.2 + 0.1);   //expecting 0.3 but got 0.30000000000000004 to solve this   
let x = 0.2;
let y = 0.1;
console.log((x * 10 + y * 10) / 10); // expecting 0.3 , got 0.3!

console.log(typeof ("Bob"));
console.log(typeof (23));
let c = "Charlie";
console.log(typeof (c));
console.log(typeof (NaN)); 
console.log(typeof 32n);
console.log(typeof undefined);


let d = 45;
let e =25;
let f = "15";

console.log("The result of d + e is " + d + e);
console.log("The result of (d + e) is " + (d + e));
console.log("The result of d + e + f is " + (d + e + f));
console.log("The result of d + e + f is " + ((d + e) + f));
console.log("The result of d + e + f is " + (d + ( e + f)));

let t = 5;
let s = t++;
console.log(t);
console.log(s);

let l = 5;
let m = ++l;
console.log(l);
console.log(m);