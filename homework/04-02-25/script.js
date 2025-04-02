function createVendingMachine() {
  const sodas = ["Coke", "Diet Coke", "Mello Yello", "Sprite", "Mr.Pibb"];
  let quarters = 0;
  function add25Cents() {
    quarters++;
    if (quarters == 4) {
      const sodaName = sodas[Math.floor(Math.random() * sodas.length)];
      console.log(`You got a ${sodaName}!`);
      quarters = 0;
    } else {
      const remainingQuarters = 4 - quarters;
      console.log(`Insert ${remainingQuarters} more quarters to get a drink.`);
    }
  }
  return add25Cents;
}
const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
