var minimumRefill = function(plants, capacityA, capacityB) {
    let res1 = capacityA;
    let res2 = capacityB;
    let left = 0;
    let right = plants.length - 1;
    let res = new Array(plants.length).fill(0);
    let sum = 0;
    while (left <= right) {
        if (left !== right) {
            res1-= plants[left];
            res2-= plants[right];
            if (res1 < 0) {
                res[left] = 1;
                sum++;
                res1 = capacityA - plants[left];
            };
            
            if (res2 < 0) {
                res[right] = 1;
                sum++;
                res2 = capacityB - plants[right];
            }
        } else {
            if (plants[left] > Math.max(res1, res2)) {
                res[left] = 1;
                sum++;
            }
        }
        left++;
        right--;
    }
    return res;
};