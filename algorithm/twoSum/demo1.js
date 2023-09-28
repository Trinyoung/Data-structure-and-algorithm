var twoSum = function(numbers, target) {
    // numbers 是递增的。 target 是两个数的和；返回两个数的下标；下标从1开始;
    let res = 0;
    function split(left, right, tar) {
        const mid = Math.floor((left + right)/ 2);
        if (numbers[mid] < tar) {
            if (mid + 1 <= right) {
                return split(mid + 1, right, tar);
            }
        } else if (numbers[mid] > tar) {
            if (mid - 1 >= left) {
                return split(left, mid - 1, tar);
            }
        } else {
            res = mid + 1;
            return;
        }
    }
    for (let i = 0; i < numbers.length -1; i ++) {
        let tar = target - numbers[i];
        split(i + 1, numbers.length -1, tar);
        if (res) {
            return [i + 1, res];
        }
    }
}

console.log(twoSum([-1, 0], -1));