const insertionSort = (arr, len, index = 0) => {
  if (index === len) return arr;
  let j = index;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
  }
  return insertionSort(arr, len, index + 1);
};

let array = [3, 1, 4, 5, 7, 6, 9, 8, 2];
console.log(insertionSort(array, array.length));
