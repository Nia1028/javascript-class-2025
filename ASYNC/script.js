// function greet(name) {
//   alert(`Hello, ${name}`);
// }

// function processGreeting(callback) {
//   const name = prompt("What is your name?");
//   callback(name);
// }

// processGreeting(greet);

// 1. Get the bread
// 2. get the jelly
// 3. get the peanut butter
// 4. get the knife
// 5. spread the pb nad J
// 6. eat the sandwich

// function getBread(callback) {
//   setTimeout(() => {
//     console.log("Got the Bread");
//     callback(null, "bread");
//   }, 500);
// }

// function getJelly(callback) {
//   setTimeout(() => {
//     console.log("Got the Jelly");
//     callback(null, "jelly");
//   }, 400);
// }

// function getPeanutButter(callback) {
//   setTimeout(() => {
//     console.log("Got the Peanut Butter");
//     callback(null, "peanut butter");
//   }, 400);
// }
// function knife(callback) {
//   setTimeout(() => {
//     console.log("Got the Knife");
//     callback(null, "knife");
//   }, 300);
// }

// function spreadStuff(knife, spread, onBread, callback) {
//   setTimeout(() => {
//     console.log(`Spread ${spread} on the ${onBread}.`);
//     callback(null, `${onBread} with ${spread}`);
//   }, 600);
// }

// function eat(sandwich, callback) {
//   setTimeout(() => {
//     console.log(`Ate the sandwich: ${sandwich}. Delicious!`);
//     callback(null, "done");
//   }, 700);
// }

// getBread((err, bread) => {
//   if (err) return console.error(err);

//   getJelly((err, jelly) => {
//     if (err) return console.error(err);

//     getPeanutButter((err, peanutButter) => {
//       if (err) return console.error(err);

//       spreadStuff(knife, jelly, bread, (err, breadWithJelly) => {
//         if (err) return console.error(err);

//         spreadStuff(
//           knife,
//           peanutButter,
//           breadWithJelly,
//           (err, finishedSandwich) => {
//             if (err) return console.error(err);

//             eat(finishedSandwich, (err, result) => {
//               if (err) return console.error(err);

//               console.log(`Sandwich experience complete!`);
//             });
//           }
//         );
//       });
//     });
//   });
// });

// PROMISES

function getBread() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got the Bread");
      resolve("bread");
    }, 500);
  });
}

function getJelly() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got the Jelly");
      resolve("jelly");
    }, 400);
  });
}

function getPeanutButter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got the Peanut Butter");
      resolve("peanut butter");
    }, 400);
  });
}

function getknife() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Got the Knife");
      resolve("knife");
    }, 300);
  });
}

function spreadStuff(knife, spread, onBread) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Spread ${spread} on the ${onBread}.`);
      resolve(`${onBread} with ${spread}`);
    }, 600);
  });
}

function eat(sandwich) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Ate the sandwich: ${sandwich}. Delicious!`);
      resolve("Done");
    }, 700);
  });
}

// getBread()
//   .then((bread) => {
//     return getJelly();
//   })
//   .then((jelly) => {
//     return getPeanutButter();
//   })
//   .then((pb) => {
//     return getknife();
//   })
//   .then((knife) => {
//     return spreadStuff(knife, jelly, bread);
//   })
//   .then((breadWithJelly) => {
//     return spreadStuff(knife, pb, breadWithJelly);
//   })
//   .then((finalSandwich) => {
//     return eat(finalSandwich);
//   })

//   .then(() => {
//     console.log(`Finished with Promises!`);
//   })

//   .catch((err) => {
//     console.error(`Error: ${err}`);
//   });



async function makeSandwich() {
  try {
    const bread = aw
  }
}


//David Tarvin - for project

// const headers = new Headers();
//     headers.append("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
//     headers.append("x-rapidapi-key", "<key>");

//     const params = new URLSearchParams();
//     params.append("letterPattern", pattern);

//     const response = await const headers = new Headers();
//     headers.append("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
//     headers.append("x-rapidapi-key", "<key>");

//     const params = new URLSearchParams();
//     params.append("letterPattern", pattern);

------------------------------------------

// const headers = new Headers();
//     headers.append("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
//     headers.append("x-rapidapi-key", "<key>");

//     const params = new URLSearchParams();
//     params.append("letterPattern", pattern);

//     const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/?${params}`, {
//         method: "GET",
//         headers: headers
//     })