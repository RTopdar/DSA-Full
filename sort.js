const { rightShift } = require("./shift");

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
    case "merge": {
      return merge(array);
    }

    case "quick": {
      return quick(array);
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

const merge = (array) => {
  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));

    let right = mergeSort(arr.slice(mid));

    return join(left, right);
  };

  function join(left, right) {
    let sorted = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
  }

  return mergeSort(array);
};

const quick = (array) => {
  // Identify the pivot element (last element in this solutuion)
  // traverse from first to second last element
  // Everything smaller than the pivot to the left array
  //Everyting greater than the pivot to the right array
  //Repeatedly concatenate the left array, pivot and right array till one sorted array remains
  const quickSort = (arr) => {
    if (arr.length && arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      }
    }
    // console.log(left, pivot, right);     Smaller elements are pushed to the left array, larger elements are pushed to the larger array

    // Now we quicksort the left and right arrays, and then return the entire array

    return [...quickSort(left), pivot, ...quickSort(right)]; // We are spreading the arrays as each recursion of quick sort will return another array
  };
  return quickSort(array);
};

console.log(returnSorted("quick", [9, 3, 7, 5, 6, 4, 1, 8, 2]));
