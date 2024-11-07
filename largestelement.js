const sort = (array) => {
  if (array.length && array.length <= 1) return array;
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      left.push(array[i]);
    } else right.push(array[i]);
  }
  return [...sort(left), pivot, ...sort(right)];
};

console.log(sort([9, 3, 7, 5, 6, 4, 1, 8, 2]));
