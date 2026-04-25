//bai 6
console.log("-------------------");
console.log("bai 6:");

function printPrimeNumber(n) {
  // Xử lý và in ra kết quả
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}

// Output:
printPrimeNumber(10); // 2 3 5 7