console.log("--------------");

console.log("bai 8:");

// Input:
function isSameSign(a, b) {
  if (a >= 0 && b >= 0 || a < 0 && b < 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Output:
isSameSign(0, 20); // true
isSameSign(-10, 0); // true
isSameSign(10, -20); // false

