// 接雨水的问题
// height is array。
var trap = function (height) {
    const tempArr = [];
    let area = 0;
    for (let i = 0; i < height.length; i++) {
        if (tempArr.length === 0 || tempArr[0].value >= height[i]) {
            tempArr.unshift({ index: i, value: height[i] });
        } else {
            let pre;
            while (tempArr[0] && tempArr[0].value < height[i]) {
                if (pre !== undefined && pre < tempArr[0].value) {
                    area += (tempArr[0].value - pre) * (i - tempArr[0].index - 1);
                }
                pre = tempArr.shift().value;
            }
            if (tempArr[0]) {
                area += (height[i] - pre) * (i - tempArr[0].index - 1)
            }
            tempArr.unshift({ index: i, value: height[i] });
        }
    }
    return area;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));