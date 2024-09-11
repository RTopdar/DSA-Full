const recursor = (arr, start, end) => {
  if (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    recursor(arr, start + 1, end - 1);
  }
};

const findPalindrome = (string) => {
  const arr = string.split("");
  recursor(arr, 0, arr.length - 1);
  console.log(string, arr.join(""));
  return string === arr.join("") ? true : false;
};

console.log(findPalindrome("MaaM"));
