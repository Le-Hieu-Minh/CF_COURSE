console.log("-------------------");

console.log("bai 10:");

// Input:
function electricBill(electric) {
  // Xử lý và in ra kết quả
  if (typeof electric !== 'number' || isNaN(electric) || electric < 0) {

    return "Số điện không hợp lệ";
  } else {
    let money = 0;
    if (electric > 350) {
      return money += 50 * 1500 + 50 * 2000 + 100 * 3000 + 150 * 4000 + (electric - 350) * 5000;
    }

    if (electric > 200) {
      return money += 50 * 1500 + 50 * 2000 + 100 * 3000 + (electric - 200) * 4000;

    }

    if (electric > 100) {
      return money += 50 * 1500 + 50 * 2000 + (electric - 100) * 3000;

    }

    if (electric > 50) {
      return money += 50 * 1500 + (electric - 50) * 2000;
    }

    if (electric > 0) {
      return money += electric * 1500;
    }
  }
}

// Output:
console.log(electricBill(30));// Output: Số tiền cần trả: 45000đ
console.log(electricBill(75)); // Output: Số tiền cần trả: 125000đ
console.log(electricBill(-10)); // Output: Số điện không hợp lệ
console.log(electricBill(150));  // 325000
console.log(electricBill(400));  // 1175000
console.log(electricBill("abc")); // Output: Số điện không hợp lệ



