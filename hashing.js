const fetchElementCount = (number, array) => {
  const hashArray = [];
  for (let i = 0; i < array.length; i++) {
    hashArray[array[i]] = hashArray[array[i]] + 1;
  }
  console.log(hashArray);
};
fetchElementCount(5, [1, 2, 5, 3, 5, 4, 5]);
fetchElementCount(7, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
fetchElementCount(10, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
fetchElementCount(3, [3, 3, 3, 3, 3, 3, 3]);
fetchElementCount(0, [0, 1, 0, 2, 0, 3, 0, 4, 0]);
