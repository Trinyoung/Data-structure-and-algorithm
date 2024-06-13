var distributeCandies = function(candies, num_people) {
    let i = -1;
    let res = new Array(num_people).fill(0);

    let sum = 0;
    while (sum <= candies) {
        i++;
        sum = ((i * num_people + 1 + 1) * (i + 1) / 2 + (i * num_people + 2 * num_people) * (i+ 1) / 2) * num_people / 2;
    }
    console.log(sum, 'sum');
    i--;
    sum = ((i * num_people + 1 + 1) * (i + 1) / 2 + (i * num_people + 2 * num_people) * (i+ 1) / 2) * num_people / 2;
    let last = candies - sum;
    res = i >= 0 ? res.map((item, index) => {
        return (i * num_people + index + 1 + index + 1) * (i + 1)/ 2
    }) : res;
    console.log(res, 'res ++++++>')
    let j = 0;
    while( last > 0) {
        const addNum = Math.min((i + 1) * num_people + j + 1, last);
        res[j] += addNum;
        last -= addNum;
        j++;
    }
    console.log(res, 'res')
    return res;
    // while (sum <= candies) {
    //     i++;
    //     sum = ((2 * i + 1) * num_people + 1) * num_people / 2;
    // }
    // i--;
    // console.log(i, 'i------->') // 这个 i + 1 表示已经轮了几圈了。
    // sum = i >= 0 ? ((2 * i + 1) * num_people + 1) * num_people / 2 : 0;
    // console.log(sum, 'sum')
    // let last = candies - sum;
    // console.log(last, 'last')
    // res = i >= 0 ?res.map((item, index) => {
    //     // return i * num_people + index + 1
    // }): res;
    // console.log(res, 'res ----')
    // let j = 0;
    // while (last > 0) {
    //     const addNum = Math.min((i + 1) * num_people + j + 1, last);
    //     res[j] += addNum
    //     last -= addNum
    //     j++;
    // }
    // console.log(res, 'res');
    // return res;
};
distributeCandies(60, 4)
var findMaximumElegance = function(items, k) {

};