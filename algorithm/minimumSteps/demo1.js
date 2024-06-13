var minimumSteps = function(s) {
    var ans = 0;
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            sum++;
        } else {
            ans += sum;
        }
    }
    return ans;
};