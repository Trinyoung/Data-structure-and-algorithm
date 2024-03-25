var change = function(amount, coins) {
    const coinMap = new Map();
    for (let i = 0; i < coins.length; i++) {
        coinMap.set(coins[i], 1);
    }
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coinMap.get(i - coins[j])) { // 这里有问题
                coinMap.set(i, ((coinMap.get(i)||0) + coinMap.get(i -coins[j])) );
            }
        }
    }
    console.log(coinMap, '-----')
    return coinMap.get(amount)
};
change(5, [1, 2, 5])