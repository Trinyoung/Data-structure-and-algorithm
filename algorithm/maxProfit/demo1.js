var maxProfit = function(prices) {
    let max = 0;
    // 使用归并算法
    function split() {
        if (prices.length < 2) {
            return prices;
        }
        let mid = Math.floor(prices.length / 2);
        let left = prices.slice(0, mid);
        let right = prices.slice(mid);
        return merge(split(left), split(right));
    }
    
    function merge() {
        let result = [];
        let i = 0;
        let j = 0;
        max = Math.max(max, right[right.length - 1] - left[0]);
        while (i < left.length && j < right.length) {
            if (left[i] >= right[j]){
                // count ++;
                result.push(right[j++]);
            } else {
                result.push(left[i++]);
            }
        }
        while (i < left.length) {
            result.push(left[i++]);
        }
        while (j < right.length) {
            result.push(right[j++]);
        }
        return result;
    }
    split(nums);
    return max;
};
