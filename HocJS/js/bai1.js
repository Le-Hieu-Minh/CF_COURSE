console.log("bai 1:");


function calcBMI(weight, height) {
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0
  ) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);

  let status = "";

  if (bmi < 18.5) {
    status = "Thiếu cân";
  } else if (bmi < 23) {
    status = "Bình thường";
  } else if (bmi < 25) {
    status = "Thừa cân";
  } else {
    status = "Béo phì";
  }

  console.log(`BMI = ${bmi}, ${status}`);
}

// Test
calcBMI(75, 1.74); // BMI = 20.76, Bình thường