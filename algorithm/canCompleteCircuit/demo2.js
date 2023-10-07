var canCompleteCircuit = function(gas, cost) {
    // 前面能够补偿后面即可；
    let start = 0;
    let rest = 0;
    let index = 0;
    let extra = 0;
    while (index <= gas.length - 1) {
        rest = rest + gas[index] - cost[index];
        if ( rest >= 0) {
            index ++;
        } else {
            extra += rest;
            rest = 0;
            
            index ++;
            start = index;
        }
    }
    console.log(rest, extra, '=============');
    if (rest + extra >=0) {
        return start;
    } else {
        return -1;
    }
}
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));