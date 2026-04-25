console.log("-------------------");

console.log("bai 12:");

// Input:
function printMultiplicationTable() {
  // Xử lý và in ra kết quả
  for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

      console.log(`${i}x${j}=${j * i}`);
    }
    console.log("\n");

  }
}

// Output:
printMultiplicationTable();