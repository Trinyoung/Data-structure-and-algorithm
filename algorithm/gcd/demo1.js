function gcd (a, b) {
    if (!b) {
        return a;
    }
    return gcd(a, a % b)
}
// 判断一个数是否为质数；
// 除了2 和 3 之外，所有的质数 都是 6n + 1 或者 6n - 1 的倍数，其中 n 是一个整数。