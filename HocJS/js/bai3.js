console.log("-------------------");

console.log("bai 3:");

function swapNumber(a, b) {

  a = a + b;
  b = a - b;
  a = a - b;

}

// Input:
function sortNumber(a, b, c) {
  // Xử lý và in ra kết quả
  if (a <= b && a <= c) {
    if (b <= c) {
      console.log(a, b, c);
    } else {
      console.log(a, c, b);
    }

  } else if (b <= a && b <= c) {
    if (a <= c) {
      console.log(b, a, c);
    } else {
      console.log(b, c, a);
    }

  } else {
    if (a <= b) {
      console.log(c, a, b);
    } else {
      console.log(c, b, a);
    }
  }

}

// Output:
sortNumber(3, 1, 2); // 1 2 3