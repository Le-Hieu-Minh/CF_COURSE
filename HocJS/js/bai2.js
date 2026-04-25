console.log("-------------------");

console.log("bai 2:");

// Input:
function swapNumber(a, b) {
  // Xử lý và in ra kết quả
  // if (a > b) {
  //   a = a - b;
  //   b = a + b;
  //   a = b - a;
  // } else {
  //   b = b - a;
  //   a = b + a;
  //   b = a - b;
  // }

  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}

// Output:
swapNumber(3, 5); // 5 3