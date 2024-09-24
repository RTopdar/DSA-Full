const palCheck = (num) => {
  let numVal = BigInt(num);
  let reverseValue = BigInt(0);
  while (numVal > 0) {
    let lastDig = numVal % BigInt(10);

    reverseValue = reverseValue * BigInt(10) + lastDig;

    numVal = numVal / BigInt(10);
  }
  if (BigInt(num) === reverseValue) {
    console.log(true);
  } else {
    console.log(false);
  }
};
palCheck(1234567887654321);

