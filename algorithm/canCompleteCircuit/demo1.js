// 超出时长限制；
var canCompleteCircuit = function(gas, cost) {
    for (let i = 0; i < gas.length; i++) {
        let gasIndex = i;
        let costIndex = i;
        let rest = 0;
        let index = 0;
        while(rest >= 0 && index < gas.length) {
            rest = rest + gas[gasIndex] - cost[costIndex];
            gasIndex = gasIndex === gas.length - 1? 0 : gasIndex + 1;
            costIndex = costIndex === cost.length -1? 0 : costIndex + 1;
            index ++;
        }
        if (costIndex === i && rest >= 0) {
            return i;
        }
    }
    return -1;
};