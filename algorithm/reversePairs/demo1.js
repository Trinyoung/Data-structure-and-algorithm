function reversePairs(nums) {
// 归并算法
// 先有分，再有合；
    let count = 0;
    function split(nums) {
        if (nums.length < 2) {
            return nums;
        }
        let mid = Math.floor(nums.length / 2);
        let left = nums.slice(0, mid);
        let right = nums.slice(mid);
        return merge(split(left), split(right));
    }

    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] > right[j]){
                count ++;
                result.push(right[j++]);
            } else {
                result.push(left[i++]);
            }
            // if (left[i] <= right[j]) {
            //     result.push(left[i++]);
            // } else {
            //     result.push(right[j++]);
            // }
        }
        while (i < left.length) {
            result.push(left[i++]);
        }
        while (j < right.length) {
            result.push(right[j++]);
        }
        return result;
    }
}