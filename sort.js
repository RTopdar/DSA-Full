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
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    console.log(arr);
  }
  return arr;
};

const bubbleSort = (array) => {};
const insertionSort = (array) => {};

console.log(returnSorted("selection", [3, 1, 4, 5, 7, 6, 8]));
