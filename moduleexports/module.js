const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mul = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  if (b === 0) {
    return "Zero division Error";
  }
  return a / b;
};

const isPositive = function (a) {
  return a >= 0;
};

const isNegative = function (a) {
  return a < 0;
};

// Exporting the functions
module.exports = {
  add,
  sub,
  mul,
  div,
  isPositive,
  isNegative,
};
