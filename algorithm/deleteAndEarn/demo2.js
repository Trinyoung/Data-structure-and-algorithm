var deleteAndEarn = function(nums) {
    let maxValue = 0;
   for(let value of nums){
       maxValue = Math.max(value, maxValue);
   }
   console.log(maxValue, '-------------->')
   let values = new Array(maxValue+1).fill(0);//这里+1是因为题目中存在 nums[i]+1的限制

   for(let value of nums){
       values[value] += value;
   }
   let dp = [];
   dp[0] = 0;
   dp[1] = values[1];
   console.log(values, 'values i---------------->')
   for(let i=2; i<values.length; i++){
       let value = values[i];
       dp[i%2] = Math.max(dp[(i-2)%2] + value, dp[(i-1)%2]); // 挨着它的不能加， 但是
   }
   console.log(dp, 'dp ---')
   return dp[(values.length-1)%2];
};
console.log(deleteAndEarn([2,2,3,3,3,4]), 'result');