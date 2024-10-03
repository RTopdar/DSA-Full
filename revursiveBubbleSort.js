const bubbleSort = (arr, len) => {
  if (len === 1) return arr;
  let i;
  for (i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return bubbleSort(arr, len - 1);
};

let array = [3, 1, 4, 5, 7, 6, 9, 8, 2];
console.log(bubbleSort(array, array.length));
