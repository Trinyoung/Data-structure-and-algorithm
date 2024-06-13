var longestEqualSubarray = function(nums, k) {
    const numsMap = nums.reduce((res, item, i) => {
        if (res[item]) {
            res[item].push(i);
        } else {
            res[item] = [i];
        }
        return res;
    }, {});
    let max = 0;
    console.log(numsMap, 'numsMap ++++++>')
    for (let value of Object.values(numsMap)) {
        let start = value[0]; //开始节点
        let end = value[value.length - 1];
        let length = value.length;
        let gap = end - start - 1 - length + 2; 
        if (gap <= k) max = Math.max(max, length);
        if (gap > k) {
            let i = 0; // 索引
            let len = 1; // 
            let rest = k;
            let gapArr = [];
            while(i < value.length - 1) {
                console.log()
                const gap = value[i + 1] - value[i] - 1;
                gapArr.push(gap);
                if (rest >= gap) {
                    rest -= gap;
                    len ++;
                    if (i === value.length - 2) {
                        max = Math.max(len, max)
                    }
                } else {
                    max = Math.max(len, max);
                    const g =  gapArr.shift()
                    rest = rest + g;
                    len --;
                    continue;
                }
                i++;
            }
        };
    }
    return max;
};
var longestEqualSubarray = function(nums, k) {
    const numsMap = nums.reduce((res, item, i) => {
        if (res[item]) {
            res[item].push(i);
        } else {
            res[item] = [i];
        }
        return res;
    }, {});
    let max = 0;
    
    for (let value of Object.values(numsMap)) {
        let len = value.length;
        if (len === 1) {
            max = Math.max(max, 1);
            continue;
        }
        
        let start = 0;
        let gapSum = 0;
        
        for (let end = 1; end < len; end++) {
            gapSum += value[end] - value[end - 1] - 1;
            while (gapSum > k) {
                gapSum -= value[start + 1] - value[start] - 1;
                start++;
            }
            max = Math.max(max, end - start + 1);
        }
    }
    
    return max;
};

// [1, 2, 3, 4, 1, 6, 7, 8, 1] // k = 2; // 0 , 8 length = 9, gap = 8 - 0 - 1 - 3 + 2 // 4
console.log(longestEqualSubarray([2 , 5, 8, 5, 7, 9, 5, 5, 3], 0))