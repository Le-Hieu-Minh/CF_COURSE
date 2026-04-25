console.log("-----------------");

console.log("bai 11:");


function taxSalary(salary) {

  if (typeof salary !== 'number' || isNaN(salary) || salary < 0) {
    return 'Thu nhập không hợp lệ';

  } else {
    let tax = 0;

    if (salary > 80000000) {
      return tax += 14000000 * 0.05 + 25000000 * 0.1 + 30000000 * 0.2 + (salary - 80000000) * 0.3;
    }

    if (salary > 50000000) {
      return tax += 14000000 * 0.05 + 25000000 * 0.1 + (salary - 50000000) * 0.2;

    }

    if (salary > 25000000) {
      return tax += 14000000 * 0.05 + (salary - 25000000) * 0.1;

    }

    if (salary > 11000000) {
      return tax += (salary - 11000000) * 0.05;
    }

    if (salary > 0) {
      return tax;
    }

  }



}

console.log(taxSalary(10000000));
console.log(taxSalary(15000000));
console.log(taxSalary(30000000));
console.log(taxSalary(100000000));
console.log(taxSalary(-10000000));
console.log(taxSalary("dsfsfhs"));