var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    if (targetCapacity === 0) return true;
    
    // 两个水壶的总容量小于目标容量时，无法实现
    if (jug1Capacity + jug2Capacity < targetCapacity) return false;

    // 求两个数的最大公约数
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 检查目标容量是否是两个水壶容量的最大公约数的倍数
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
};