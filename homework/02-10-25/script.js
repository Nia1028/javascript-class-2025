//1.

let age = prompt("how old are you?");
if (age <= 0) {
  console.log("Invalid Input.");
} else if (age > 0 && age < 12) {
  console.log(`The ticket price for the age ${age} is 5$.`);
} else if (age > 12 && age < 18) {
  console.log(`The ticket price for the age ${age} is 10$.`);
} else if (age > 18 && age < 60) {
  console.log(`The ticket price for the age ${age} is 20$.`);
} else {
  console.log(`The ticket price for the age ${age} is  15$.`);
}

//2.

let number = prompt("Enter a number");
let letter;
if (number <= 0) {
  console.log("Invalid Input.");
} else if (number > 0 && number < 15) {
  letter = "B";
  console.log(
    `The number ${number} falls under the letter "${letter}" on a Bingo card.`
  );
} else if (number > 15 && number < 30) {
  letter = "I";
  console.log(
    `The number ${number} falls under the letter "${letter}" on a Bingo card.`
  );
} else if (number > 30 && number < 45) {
  letter = "N";
  console.log(
    `The number ${number} falls under the letter "${letter}" on a Bingo card.`
  );
} else if (number > 45 && number < 60) {
  letter = "G";
  console.log(
    `The number ${number} falls under the letter "${letter}" on a Bingo card.`
  );
} else {
  letter = "O";
  console.log(
    `The number ${number} falls under the letter "${letter}" on a Bingo card.`
  );
}

//3.

//4.SWITCH CONDITION

let dayOfTheWeek = "MON";
switch (dayOfTheWeek) {
  case "SUN":
    console.log("Have a relaxing Sunday!");
    break;
  case "MON":
    console.log("Happy Monday! Let's start the week strong!");
    break;
  case "TUE":
    console.log("Terrific Tuesday! Keep up the momentum!");
    break;
  case "WED":
    console.log("Wonderful Wednesday! You're halfway there!");
    break;
  case "THU":
    console.log("Thoughtful Thursday! Stay motivated!");
    break;
  case "FRI":
    console.log("Fantastic Friday! The weekend is near!");
    break;
  default:
    console.log("Superb Saturday! Enjoy your day!");
}

//5.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  //   console.log(`i= ${i}.`);
  if (i % 3 == 0 || i % 7 == 0) {
    sum = sum + i;
  }
}
console.log(
  `The sum of numbers between 1 and 100 that are divisible by 3 or 7 is: ${sum}`
);

//6.

//7.

let num = 100;
let userInput;
while (userInput != num) {
  userInput = prompt("Guess the number:");
}
console.log("Congratulations! You guessed the correct number.");
