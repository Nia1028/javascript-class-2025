// // class Player {
// //   constructor(name, startX, startY) {
// //     this.name = name;
// //     this.x = startX;
// //     this.y = startY;
// //   }

// //   move(dx, dy) {
// //     this.x += dx;
// //     this.y += dy;
// //   }
// // }

// // var sheila = new Player('Sheila',0, 0);
// // var nya = new Player('Nya', 0 , 0);
// // var david = new Player('David',0 , 0);

// // sheila.move(2, 4);
// // sheila.move(4, 4);
// // nya.move(3, 5);
// // david.move(1 , 6);

// // alert(`Sheila ia at ${sheila.x}, ${sheila.y}`);
// // alert(`David is at ${david.x}, ${david.y}`);

// // console.log("______________________________________________")

// class Actor {
//   constructor(startX, startY) {
//     this.name = name;
//     this.x = startX;
//     this.y = startY;
//   }

//   move(dx, dy) {
//     this.x += dx;
//     this.y += dy;
//   }

//   distanceTo(otherActor) {
//     let dx = otherActor.x - this.x;
//     let dy = otherActor.y - this.y;
//     return Math.hypot(dx, dy);
//   }
// }

// class Player extends Actor {
//   constructor(startX, startY) {
//     super(startX, startY);
//     this.hp = 100;
//   }
//   heal(healingPotion) {
//     if (this.distanceTo(healingPotion) <= 1)
//       this.hp = this.hp < 80 ? this.hp + 20 : 100;
//   }
// }

// class Enemy extends Actor {
//   attack(player) {
//     if (this.distanceTo(player) < 4) {
//       player.hp -= 10;
//     } else {
//       return false;
//     }
//   }
// }

// class healingPotion {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// var sheila = new Player(0, 0);
// var nya = new Player(0, 0);
// var david = new Player(0, 0);

// sheila.move(2, 4);
// sheila.move(4, 4);
// nya.move(3, 5);
// david.move(1, 6);

// alert(`Sheila ia at ${sheila.x}, ${sheila.y}`);
// alert(`David is at ${david.x}, ${david.y}`);

// function Cat(name) { // constructor function
//   this.name = name;
// }
// Cat.prototype.sayHello = function () {    //  prototype property
//   alert(`Meow! My name is ${this.name}.`);
// };

// const rusty = new Cat("Rusty");
// rusty.sayHello();

function selectColorFromMenu() {
  let list = document.getElementById("color-list");
  let colors = ["blue", "red", "brown", "orange", "yellow", "green"];
  colors.forEach((color) => {
    let listItem = document.createElement("li");
    listItem.textContent = color;
    list.appendChild(listItem);
  });

  setTimeout(() => {
    try {
      let colorChoice = prompt("select your favorite color");
      let selection = parseInt(colorChoice);
      if (isNaN(selection)) {
        throw new Error("You must put in a number!");
      } else if (selection < 1 || selection > 6) {
        throw new Error("You must choose one of the numbers from the list!");
      }
      document.body.style.backgroundColor = colors[selection - 1];
    } catch (err) {
      alert(err);
    } finally {
      alert("Thanks for playing!");
    }
  }, 100);
}

selectColorFromMenu();
