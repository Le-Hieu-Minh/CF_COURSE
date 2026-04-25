console.log("--------------");

console.log("bai 9:");

// Input:
function taxiBill(km) {
  // Xử lý và in ra kết quả
  if (typeof km !== 'number' || isNaN(km) || km < 0) {

    return "Số km không hợp lệ";
  }
  let money = 0;


  if (km <= 1) {
    money = 10000;
  } else if (km <= 30) {
    money += 10000 + (km - 1) * 8000;
  } else {
    money += 10000 + (29 * 8000) + (km - 30) * 7000;
  }
  return money;
}

// Output:
console.log(taxiBill(0.1));   // Số tiền cần trả: 10000đ
console.log(taxiBill(1));     // Số tiền cần trả: 10000đ
console.log(taxiBill(10));    // Số tiền cần trả: 82000đ
console.log(taxiBill(-5));    // Số km không hợp lệ
console.log(taxiBill("abc")); // Số km không hợp lệ

