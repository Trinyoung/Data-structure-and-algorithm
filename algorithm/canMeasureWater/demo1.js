// 深度优先算法
function canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity) {
    // 使用 Set 来存储已经访问过的状态
    const visited = new Set();

    // 深度优先搜索
    function dfs(jug1, jug2) {
        // 如果已经访问过这个状态，直接返回 false
        const state = `${jug1},${jug2}`;
        if (visited.has(state)) return false;
        visited.add(state);

        // 检查是否达到目标容量
        if (jug1 === targetCapacity || jug2 === targetCapacity || jug1 + jug2 === targetCapacity) {
            return true;
        }

        // 执行所有可能的操作
        // 1. 清空 jug1 或 jug2
        if (dfs(0, jug2) || dfs(jug1, 0)) return true;
        // 2. 完全填满 jug1 或 jug2
        if (dfs(jug1Capacity, jug2) || dfs(jug1, jug2Capacity)) return true;
        // 3. 从 jug1 向 jug2 倒水，直到装满或倒空
        if (dfs(jug1 - Math.min(jug1, jug2Capacity - jug2), jug2 + Math.min(jug1, jug2Capacity - jug2))) return true;
        // 4. 从 jug2 向 jug1 倒水，直到装满或倒空
        if (dfs(jug1 + Math.min(jug2, jug1Capacity - jug1), jug2 - Math.min(jug2, jug1Capacity - jug1))) return true;

        return false;
    }

    return dfs(0, 0);
}

// 示例
console.log(canMeasureWater(3, 5, 4)); // true
console.log(canMeasureWater(2, 6, 5)); // false
