var coinChange = function (coins, amount) {
    if (amount === 0) return 0;
    coins = coins.sort((a, b) => a -b);
    let min = -1;
    if (amount < coins[0]) {
        return -1;
    }
    console.log(coins, 'coins====');
    function interate(i, amount, num) {
        if (i >=0 && amount >= coins[i]) {
            const nums = Math.floor(amount / coins[i]);
            const extra = amount % coins[i];
            console.log(i, amount, extra, num, 'bbbbb');
            if (extra === 0) {
                return num + nums;
            } else {
                if (i === 0 ) {
                    return -1;
                } else {
                    return interate(--i, extra, num + nums);
                }
            }
        }
        if (i > 0 && amount < coins[i]) {
            return interate(--i, amount, num);
        }
        if (i === 0 && amount < coins[i]) {
            return -1;
        }
    }
    for(let i = coins.length -1; i >= 0; i --) {
        const res = interate(i, amount, 0);
        console.log(i, res, 'result ======>');
        min = min === -1? res : Math.min(min, res);
    }
    return min;
};
console.log(coinChange([186,419,83,408], 6249), '=================>');