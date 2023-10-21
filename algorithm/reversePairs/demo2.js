function reversePairs(nums) {
    let count = 0;
  
    function mergeSort(nums, left, right) {
      if (left >= right) {
        return;
      }
      const mid = Math.floor((left + right) / 2);
      mergeSort(nums, left, mid);
      mergeSort(nums, mid + 1, right);
      merge(nums, left, mid, right);
    }
  
    function merge(nums, left, mid, right) {
      const temp = [];
      let i = left;
      let j = mid + 1;
      let k = 0;
      while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
          temp[k++] = nums[i++];
        } else {
          count += mid - i + 1;
          temp[k++] = nums[j++];
        }
      }
      while (i <= mid) {
        temp[k++] = nums[i++];
      }
      while (j <= right) {
        temp[k++] = nums[j++];
      }
      for (let i = 0; i < temp.length; i++) {
        nums[left + i] = temp[i];
      }
    }
  
    mergeSort(nums, 0, nums.length - 1);
    return count;
  }
  // 我也看剧， 我爱情的终结的时候，都深怕是误会，都怕是作导致的终结，所以我小心翼翼。但是事实却是，他们都很拒绝的就走了，没有一丝留恋～，他们走的比我干脆的多。每次都是我在期期艾艾