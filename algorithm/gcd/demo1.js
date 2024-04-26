function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(1000, 30))