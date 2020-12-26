function quickSort(){
  quick(array, 0, arr.length -1);
}

// 首先，从数组中选择中间一项作为主项
// 创建两个指针， 左边一个指向数组第一个项，右边指向最后一个项。移动左指针直到我们找到一个比主元大的元素，接着指，移动右指针直到找到一个比主元小的
// 元素，然后交换它们，重复这个过程，直到左指针超过右指针。这个过程过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之前，而比主元
// 大的值排在主元之后。这一步叫作划分操作。
function quick (array, left, right){
  var index;
  if (array.length > 1){
    index = partition(array, left, right);
    if (left < index -1){
      quick(array, left, index -1);
    }

    if (index < right){
      quick(array, index, right);
    }
  }
}

function partition (array, left, right){
  var pivot = array[Math.floor((right + left)/2)],
    i = left,
    j = right;
    while (i <=1){
      while (array[i]< pivot){
        i++;
      }
      while (array[j]> pivot){
        j--;
      }
      if (i<=j){
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
}