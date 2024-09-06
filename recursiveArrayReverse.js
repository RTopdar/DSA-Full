const arrayReverse = (start, end, arr) => {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    console.log(arr);
    arrayReverse(start + 1, end - 1, arr);
  }
};

const findReverse = (num) => {
  arrayReverse(0, num.length - 1, num);
  return num;
};

console.log(findReverse([2, 4, 6, 8, 10]));
