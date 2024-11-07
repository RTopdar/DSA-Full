const removeduplicate = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      array.splice(i, 1);
    }
  }
  return array;
};

console.log(removeduplicate([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));

console.log(removeduplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]));
