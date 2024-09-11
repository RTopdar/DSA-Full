const arrayCounter = (arr, value) => {
  const maxVal = Math.max(...arr);
  const hashArray = new Array(maxVal + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArray[arr[i]] = hashArray[arr[i]] + 1;
    console.log(hashArray);
  }
  console.log("hashed array", hashArray[value]);
};
const testArray = [1, 1, 4, 5, 6, 8, 1, 1, 4, 2, 5, 4, 1, 4, 6, 2, 5, 4, 1];
arrayCounter(testArray, 4);
