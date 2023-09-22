function search(nums, target) {
    let result = -1;
    function searchTarget(left, right) {
        let mid = Math.ceil((left + right)/2);
        if (target === nums[mid]) {
            result = mid;
            return;
        }
        if (nums[right] >= nums[mid + 1] ) {
            if (nums[mid + 1] <= target && nums[right] >= target) {
                if (mid + 1 <= right) {
                    return searchTarget(mid + 1, right);
                }
            } else {
                if (mid -1 >= left) {
                    return searchTarget(left, mid -1);
                }
            }
        }
        if (nums[left] <= nums[mid -1]) {
            if (nums[mid -1] >= target && nums[left] <= target) {
                if (mid -1 >= left) {
                    return searchTarget(left, mid -1);
                }
            } else {
                if (mid + 1 <= right) {
                    return searchTarget(mid + 1, right);
                }
            }
        }
    }
    searchTarget(0, nums.length - 1);
    return result;
}
console.log(search([9,1,2,3,4,5,6,7,8], 9));
console.log(search([4,5,6,7,0,1,2], 0));