// Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if a number is a perfect number
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

// Check if a number is an Armstrong number
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum === num;
};

// Calculate the sum of digits of a number
const getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

module.exports = { isPrime, isPerfect, isArmstrong, getDigitSum };
