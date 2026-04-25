console.log("-----------------");

console.log("bai 14:");

function printChristmasTree(n, character) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    //khoang trang
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    //nua tren
    for (let k = 1; k <= i; k++) {
      row += character;
    }

    for (let l = 1; l <= i - 1; l++) {
      row += character;
    }

    console.log(row);


  }
  let col = "";
  for (let i = 1; i < n - 1; i++) {
    col += " ";
  }
  col += " *"
  console.log(col);


}



printChristmasTree(5, "*");