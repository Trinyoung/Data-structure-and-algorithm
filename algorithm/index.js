let arr = [1, 2, 3, 4, 5, 6];
function interator(i) {
  if (i >= arr.length) {
    return;
  }
  let a = i+1;
  interator(a);
  console.log(arr[i]); // 先处理后面的，再处理前面的；
}
interator(0);
// 欺骗的递归；
// 三个王国的部分， 递归的思想， 递归的实现；质子的面对的思想，为什么我们的思想的是一种， 最后的我们的结果但是这种，委婉的方法。可能
// 适当的表达的方式是什么样字。ETO。急需得到支持的信息的使命。它给你们想得到了事情。