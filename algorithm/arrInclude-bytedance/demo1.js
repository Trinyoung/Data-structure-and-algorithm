// <!--arrA 包含arrB 返回2， arrB 包含arrA返回1，arrA等于arrB返回0，互不包含返回-1-->
function arrInclude(arrA, arrB) {
    const arrItems = {};
    for (let item of arrA) {
        if (arrItems[item]) {
            arrItems[item]++;
        } else {
            arrItems[item] = 1;
        }
    }
    let Bextra = false;
    for (let item of arrB) {
        if (arrItems.hasOwnProperty(item)) {
            arrItems[item]--;
            if (arrItems[item] === 0) {
                delete arrItems[item];
            }
        } else {
            Bextra = true;
        }
    }
    let Aextra = false;
    if (Object.keys(arrItems).length > 0 ) {
        Aextra = true;
    }
    if (Bextra && Aextra) return -1;
    if (!Bextra && !Aextra) return 0;
    if (Bextra && !Aextra) return 1;
    if (!Bextra && Aextra) return 2;
}

console.log(arrInclude([1, 2, 3, 4], [1, 2, 4, 3]));

function checkArraysContainment(A, B) {
    // 检查 A 是否包含 B 中的所有元素
    function isSubsetOf(A, B) {
        return B.every(element => A.includes(element));
    }

    // 判断两个数组是否相等
    function isEqual(A, B) {
        if (A.length !== B.length) return false;
        return A.every((element, index) => element === B[index]);
    }

    // 检查 A 是否包含 B
    const aContainsB = isSubsetOf(A, B);
    // 检查 B 是否包含 A
    const bContainsA = isSubsetOf(B, A);

    // 如果 A 和 B 相等
    if (isEqual(A, B)) {
        return 0;
    }
    // 如果 A 包含 B
    else if (aContainsB) {
        return 1;
    }
    // 如果 B 包含 A
    else if (bContainsA) {
        return 2;
    }
    // 如果两者都不包含对方
    else {
        return -1;
    }
}

// 示例调用
console.log(checkArraysContainment([1, 2, 3], [1, 2])); // 返回 1
console.log(checkArraysContainment([1, 2], [1, 2, 3])); // 返回 2
console.log(checkArraysContainment([1, 2, 3], [1, 2, 3])); // 返回 0
console.log(checkArraysContainment([1, 2, 4], [1, 2, 3])); // 返回 -1

// 龙风家族
// 梅竹家族作为他们的第一点，他是所有家族中最弱的一个，但是他是所有家族中最
// 龙风家族和教会具有很深的矛盾，当年就是因为他们的才让龙风家族成立了育英堂，但是们是要把育婴堂打造成一个娱乐科技
// 教会的成员，让他们宣讲教义，结果7年以来，他们阳奉阴违。