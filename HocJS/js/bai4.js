console.log("-----------------");

console.log("bai 4:");


function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (
    a + b > c &&
    a + c > b &&
    b + c > a
  ) {
    return true;
  } else {
    return false;
  }
}

// Test
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(3, 4, 7)); // false