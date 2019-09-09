function minCoinChange(coins, amount) {
  coins = coins.sort((a, b) => a - b);
  if(amount < coins[0]){
    return [];
  }
  let min = [], newMin, newAmount;
  
}