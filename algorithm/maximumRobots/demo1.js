
/* 
你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。再给你一个整数 budget 。

运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes) 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。

请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

 

示例 1：

输入：chargeTimes = [3,6,1,3,4], runningCosts = [2,1,3,4,5], budget = 25
输出：3
解释：
可以在 budget 以内运行所有单个机器人或者连续运行 2 个机器人。
选择前 3 个机器人，可以得到答案最大值 3 。总开销是 max(3,6,1) + 3 * sum(2,1,3) = 6 + 3 * 6 = 24 ，小于 25 。
可以看出无法在 budget 以内连续运行超过 3 个机器人，所以我们返回 3 。

 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    // 最大值，以及runningCosts
    // let arr = [];
    let q = []; // 需要找一个单调递减的队列找到它的最大值，让它的队列的第一个都是最大值；
    let sum = 0; // 统计值，统计选取runningCosts 的和
    let max = -Infinity; // 最后的返回值
    // 左右两个节点
    for (let r = 0, l = 0; r < runningCosts.length; r++) { // r 为右节点，l 为左节点
       while(q.length && chargeTimes[q[q.length - 1]] < chargeTimes[r]) {
        q.pop();
       }
       q.push(r);

       sum += runningCosts[r];
       while ((r - l + 1) * sum + chargeTimes[q[0]] > budget) {
        sum -= runningCosts[l]
        if (l >= q[0]) {
            q.shift();
        }
        l++;
       }
       max = Math.max(max, r - l + 1)
    }
    return max;
};

console.log(maximumRobots([8,76,74,9,75,71,71,42,15,58,88,38,56,59,10,11], [1,92,41,63,22,37,37,8,68,97,39,59,45,50,29,37], 412));

/* 
时间复杂度分析：

1. 主循环：
   - 外层 for 循环遍历 runningCosts 数组，执行 n 次，其中 n 是数组的长度。

2. 单调队列维护：
   - 内层 while 循环（q.pop()）看似是嵌套循环，但实际上每个元素最多被加入和移出队列一次。
   - 总的 push 和 pop 操作不会超过 n 次。

3. 窗口收缩：
   - 内层 while 循环（l++）也看似是嵌套循环，但左指针 l 最多移动 n 次。

4. 其他操作：
   - sum 的更新、max 的计算等都是 O(1) 操作。

综合分析：
- 虽然代码中有嵌套循环，但仔细分析可以发现，每个元素最多被处理常数次。
- 右指针 r 从 0 移动到 n-1，总共 n 次。
- 左指针 l 也最多移动 n 次。
- 队列 q 中的元素总共最多被加入和移出 n 次。

因此，尽管看起来像是 O(n^2) 的复杂度，实际上这个算法的时间复杂度是 O(n)，其中 n 是输入数组的长度。

空间复杂度：
- 使用了一个队列 q，最坏情况下可能存储所有 n 个元素。
- 其他变量（sum, max, l, r）都是常数空间。

所以，空间复杂度是 O(n)。

结论：
这个算法的时间复杂度是 O(n)，空间复杂度也是 O(n)。这是一个高效的线性时间算法，适合处理大规模输入数据。
 */