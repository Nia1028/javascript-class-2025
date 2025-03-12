function calculateTransformersCost(
    coreCount,
    deluxeCount,
    voyagerCount,
    leaderCount,
    commanderCount
  ) {
    let totalCostWithTax = 0;
    if (
      coreCount >= 0 &&
      deluxeCount >= 0 &&
      voyagerCount >= 0 &&
      leaderCount >= 0 &&
      commanderCount >= 0
    ) {
      let corePrice = 9.99;
      let deluxePrice = 24.99;
      let voyagerPrice = 34.99;
      let leaderPrice = 54.99;
      let commanderPrice = 89.99;
      totalCost =
        corePrice * coreCount +
        deluxeCount * deluxePrice +
        voyagerCount * voyagerPrice +
        leaderCount * leaderPrice +
        commanderCount * commanderPrice;
      let tax = totalCost * 0.07;
      totalCostWithTax = totalCost + tax;
      console.log(`Total cost is ${totalCostWithTax}$`);
    } else {
      console.log("The count cannot be negative!");
    }
    return totalCostWithTax;
  }
  
  let coreCount = prompt("how many cores you want ");
  let deluxeCount = prompt("how many deluxes you want ");
  let voyagerCount = prompt("how many voyagers you want ");
  let leaderCount = prompt("how many leaders you want ");
  let commanderCount = prompt("how many commanders you want ");
  
  calculateTransformersCost(
    coreCount,
    deluxeCount,
    voyagerCount,
    leaderCount,
    commanderCount
  );