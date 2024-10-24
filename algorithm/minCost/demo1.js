var minCost = function(maxTime, edges, passingFees) {
    const edgesMap = edges.reduce((res, [from , to, time]) => {
       res[from] = res[from] || [];
       res[from].push([to, time]);
       return res;
   }, {});
   const n = passingFees.length;
   let max = -1;
 
   function dfs(cur, sum, timeSum, passed) {
       for (let i = 0; i < edgesMap[cur]?.length; i++) {
           const current = edgesMap[cur][i][0];
           const time = edgesMap[cur][i][1];
           if (current === n - 1 && timeSum + time <= maxTime) {
               max = Math.max(max, sum + passingFees[current]);
           } else if (!passed[current]) {
               dfs(current,  sum + passingFees[current], timeSum + time, {...passed, [current]: true})
           }
       }
   }
   dfs(0, passingFees[0], 0, {0: true});
   return max;
};