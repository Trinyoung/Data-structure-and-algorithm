function removeKdigits(num, k) {
    const stack = [];

    for (let digit of num) {
        while (k > 0 && stack.length > 0 && digit < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // 如果k还有剩余，继续移除末尾的数字
    while (k > 0) {
        stack.pop();
        k--;
    }

    // 去除前导零
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    // 如果最终为空，返回 "0"，否则返回结果
    return stack.length === 0 ? '0' : stack.join('');
}
