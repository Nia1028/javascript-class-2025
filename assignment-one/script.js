let salary = 0;
let x = salary;
salary = "$50000";
console.log(typeof salary);

let a = 823549n;
console.log(typeof a);

let width = 12;
let length = 4;
let area = 48;
console.log(
  `The width of the box is ${width}, the length is ${length}, and the area is ${area}.`
);

console.log((4 * ((12 * 3) / 6)) / 2);

let hisName = "david";
let herName = "betty";
let hisBalance = 10;
let herBalance = 25;
console.log(
  (hisName == "david" && (hisBalance = 10 || herName == "betty")) ||
    herBalance >= 25
);
