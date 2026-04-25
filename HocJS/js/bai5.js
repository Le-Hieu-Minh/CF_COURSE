console.log("-------------------");

console.log("bai 5:");


function printSquareNumber(n) {
  for (let i = 2; i * i <= n; i++) {
    console.log(i * i);
  }
}

printSquareNumber(10); // 4 9
console.log("-------------------");
printSquareNumber(20); // 4 9 16