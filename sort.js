const returnSorted = (type, array) => {
  switch (type) {
    case "bubble": {
      return bubbleSort(array);
    }
    case "selection": {
      return selectionSort(array);
    }
    case "insertion": {
      return insertionSort(array);
    }
    default: {
      console.log("Wrong Input");
    }
  }
};

const selectionSort = (arr) => {
  let curIndex = 0;
  let minIndex = 0;
  const len = arr.length;

  while (curIndex < len - 1) {
    minIndex = curIndex;
    for (let j = curIndex; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== curIndex) {
      [arr[curIndex], arr[minIndex]] = [arr[minIndex], arr[curIndex]];
    }
    curIndex++;
  }
  return arr;
};

const bubbleSort = (array) => {
  let i, j;
  const len = array.length;

  for (i = 0; i < len; i++) {
    for (j = i; j < len; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};
const insertionSort = (array) => {
  let i, j;
  const len = array.length;

  for (i = 0; i < len; i++) {
    j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
};

console.log(returnSorted("insertion", [3, 1, 4, 5, 7, 6, 8]));
