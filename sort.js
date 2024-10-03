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
  }
};



const selectionSort = (arr) => {


  let curIndex = 0;
  let minIndex = 0;
  const len = arr.length;

  while (curIndex < len - 1) {
    minIndex = curIndex
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

const bubbleSort = (array) => {};
const insertionSort = (array) => {};

console.log(returnSorted("selection", [3, 1, 4, 5, 7, 6, 8]));
