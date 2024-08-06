// 最大公约数
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 最小公倍数
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}