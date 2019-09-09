function quicKSort(arr) {
  quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {

}

function partition(arr, left, right) {
  const indexNum = Math.floor(arr.length / 2);
  const index = arr[indexNum];
  while (left <= right) {
    while (arr[left] < index) {
      left++;
    }

    while (arr[right] > index){
      right--;
    }
    if (left ){}
  }
}