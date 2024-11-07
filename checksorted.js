const checkSorted = (array) => {
  if (array.length && array.length <= 1) return true;
  let flag = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      continue;
    } // check if the element is sorted in ascending order
    else flag = false;
  }
  return flag;
};

console.log(checkSorted([9, 3, 7, 5, 6, 4, 1, 8, 2]));

// console.log(checkSorted([1, 2, 3, 4, 5, 6, 7, 8, 9]));
