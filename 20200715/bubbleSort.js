/**
 * 冒泡排序
 * @param {*} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[i] > arr[y]) {
        [arr[y], arr[i]] = [arr[i], arr[y]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 2, 4, 6, 1, 23, 9]));
console.log(bubbleSort([]));
