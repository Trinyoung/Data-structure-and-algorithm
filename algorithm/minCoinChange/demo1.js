/*
 * @Author: your name
 * @Date: 2021-01-07 14:38:09
 * @LastEditTime: 2021-01-07 17:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Data-structure-and-algorithm\algorithm\minCoinChange\demo1.js
 */
// 最少硬币找零；
function minCoinChange (coins, amount) {
    // const minLength = 0;
    const cache = [];
    function makeChange (value) {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;

        for (let i = 0; i< coins.length; i++) {
            const coin = coins[i];
            newAmount= value - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }

            if (newAmount >= 0 && (newMin.length < min.length -1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min' + min + 'for' + amount);
            }
        }
        return (cache[value] = min);
    }

    return makeChange(amount);
}
console.log(minCoinChange([2, 1, 3, 6, 4 , 5], 7))